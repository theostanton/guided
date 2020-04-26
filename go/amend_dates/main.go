package main

import (
	"context"
	"database/sql"
	"fmt"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"time"
)

const (
	layout = "2006-01-02"
)

type Patch struct {
	id   string
	date string
}

func (spot *Spot) findRide(rides []Ride) *Ride {
	for _, ride := range rides {
		if ride.FromSpot == spot.Id {
			return &ride
		}
	}
	return nil
}

func plusDays(dateString *sql.NullString, days int) {
	date, _ := time.Parse(layout, dateString.String)
	date = date.Add(time.Hour * 24 * time.Duration(days))
	dateString.String = date.Format(layout)
}

func prepare(guideId string) (updateRides []Patch, updateSpots []Patch) {

	rides := FetchRides(guideId)
	spots := FetchSpots(guideId)

	fmt.Println("Got", len(rides), "rides")
	fmt.Println("Got", len(spots), "spots")

	updateRides = []Patch{}
	updateSpots = []Patch{}

	guide := FetchGuide(guideId)
	if guide.StartDate.Valid {
		date := guide.StartDate

		for index, spot := range spots {
			switch {
			case guide.IsCircular && index == 0:
			case index == 0:
				updateSpots = append(updateSpots, Patch{
					id: spot.Id,
				})
			default:
				updateSpots = append(updateSpots, Patch{
					id:   spot.Id,
					date: date.String,
				})
			}

			ride := spot.findRide(rides)

			switch {
			case ride == nil:
				if guide.IsCircular || index != len(spots)-1 {
					// Only the last spot of a non-circular guide can not have a ride
					panic("No ride for spot.id=" + spot.Id)
				}
			case index == 0 && spot.Nights > 0:
				panic("First spot shouldn't have any nights")
			default:
				plusDays(&date, spot.Nights)
				println(date.String)
				updateRides = append(updateRides, Patch{
					id:   ride.Id,
					date: date.String,
				})
			}
		}
	} else {
		for _, ride := range rides {
			updateRides = append(updateRides, Patch{
				id: ride.Id,
			})
		}
		for _, spot := range spots {
			updateSpots = append(updateSpots, Patch{
				id: spot.Id,
			})
		}
	}

	return
}

func store(table string, patches []Patch) error {
	tx, err := Database.Begin()
	if err != nil {
		return err
	}

	for _, patch := range patches {
		var query string
		if patch.date == "" {
			query = "update " + table + " set date=null where id=$1"
			_, err = tx.Exec(query, patch.id)
		} else {
			query = "update " + table + " set date=$1 where id=$2"
			_, err = tx.Exec(query, patch.date, patch.id)
		}
		fmt.Println(query)
		if err != nil {
			return err
		}
	}

	err = tx.Commit()
	if err != err {
		return err
	}
	return nil
}

func handler(_ context.Context, event events.SQSEvent) (string, error) {


	for _, message := range event.Records {
		fmt.Printf("The message %s for event source %s = %s \n", message.MessageId, message.EventSource, message.Body)
	}

	if len(event.Records) != 1 {
		err := NewError("Expected exactly 1 message")
		fmt.Println(err)
		return "", err
	}

	guideId := event.Records[0].Body

	if guideId == "" {
		err := NewError("Expected a guideId")
		fmt.Println(err)
		return "", err
	}

	fmt.Println("Amending dates for guideId=" + guideId)

	updateRides, updateSpots := prepare(guideId)

	fmt.Println("Updating", len(updateRides), "rides")
	err := store("rides", updateRides)
	if err != nil {
		fmt.Println(err)
		return "", err
	}

	fmt.Println("Updating", len(updateSpots), "spots")
	err = store("spots", updateSpots)
	if err != nil {
		fmt.Println(err)
		return "", err
	}

	return "success", nil
}

func main() {
	lambda.Start(handler)
	defer Database.Close()
}

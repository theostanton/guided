package main

import (
	"database/sql"
	"fmt"
	"guided/utils"
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

func prepare(guide Guide, rides []Ride, spots []Spot) (updateRides []Patch, updateSpots []Patch, err error) {

	updateRides = []Patch{}
	updateSpots = []Patch{}
	err = nil

	switch {

	case len(spots) == 1:
		if len(rides) > 0 {
			return nil, nil, utils.NewError("Shouldn't have any rides when only one spot")
		}
		updateSpots = append(updateSpots, Patch{
			id: spots[0].Id,
		})
	case guide.StartDate.Valid:
		date := guide.StartDate

		for index, spot := range spots {
			switch {
			case guide.IsCircular && index == 0:
				// noop, will handle after loop
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
					// When more than one spot on guide
					panic("No ride for spot.id=" + spot.Id)
				}
			case index == 0 && spot.Nights > 0:
				return nil, nil, utils.NewError("Shouldn't have any rides when only one spot")
			default:
				plusDays(&date, spot.Nights)
				updateRides = append(updateRides, Patch{
					id:   ride.Id,
					date: date.String,
				})
			}
		}

		if guide.IsCircular {
			updateSpots = append(updateSpots, Patch{
				id:   spots[0].Id,
				date: date.String,
			})
		}

	default:
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

func Invoke(guideId string) (string, error) {
	if guideId == "" {
		err := utils.NewError("Expected a guideId")
		fmt.Println(err)
		return "", err
	}

	fmt.Println("Amending dates for guideId =" + guideId)

	guide, err := FetchGuide(guideId)
	fmt.Println("FetchedGuide")
	if err != nil {
		return "", err
	}
	fmt.Printf("Guide=%s\n", guide)

	rides := FetchRides(guideId)
	spots := FetchSpots(guideId)

	updateRides, updateSpots, err := prepare(*guide, rides, spots)
	if err != nil {
		return "", err
	}

	fmt.Println("Updating", len(updateRides), "rides")
	err = Update("rides", updateRides)
	if err != nil {
		fmt.Println(err)
		return "", err
	}

	fmt.Println("Updating", len(updateSpots), "spots")
	err = Update("spots", updateSpots)
	if err != nil {
		fmt.Println(err)
		return "", err
	}

	return "success", nil
}

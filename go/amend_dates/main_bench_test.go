package main

import (
	"database/sql"
	"guided/utils"
	"testing"
)

func generate(count int, startDate string) (Guide, []Spot, []Ride) {
	var StartDate = sql.NullString{}
	if startDate == "" {
		StartDate = sql.NullString{
			Valid: false,
		}
	} else {
		StartDate = sql.NullString{
			Valid:  true,
			String: startDate,
		}
	}

	guide := Guide{
		Id:         utils.GeneratedId("guide"),
		StartDate:  StartDate,
		IsCircular: false,
	}
	var spots []Spot
	for i := 0; i < count; i++ {
		spots = append(spots, Spot{
			Id:     utils.GeneratedId("spot"),
			Nights: i,
			Locked: true,
		})
	}
	var rides []Ride
	for index, spot := range spots {
		if index < len(spots)-1 {
			rides = append(rides, Ride{
				Id:       utils.GeneratedId("ride"),
				FromSpot: spot.Id,
				ToSpot:   spots[index+1].Id,
			})
		}
	}
	return guide, spots, rides
}

func Benchmark_WithStartDate(b *testing.B) {
	guide, spots, rides := generate(1_000, "2019-01-01")

	b.ResetTimer()
	prepare(guide, rides, spots)

}
func Benchmark_WithNoStartDate(b *testing.B) {
	guide, spots, rides := generate(1_000, "")

	b.ResetTimer()
	prepare(guide, rides, spots)

}

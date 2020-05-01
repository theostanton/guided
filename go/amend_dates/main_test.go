package main

import (
	"database/sql"
	"guided/utils"
	"testing"
)

func generateGuide(startDate string, isCircular bool) Guide {

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

	return Guide{
		Id:         utils.GeneratedId("guide"),
		StartDate:  StartDate,
		IsCircular: isCircular,
	}
}

func TestEmptyPrepare(t *testing.T) {
	var guide = generateGuide("", true)
	var rides []Ride = nil
	var spots []Spot = nil

	updateRides, updateSpots := prepare(guide, rides, spots)

	if rideCount := len(updateRides); rideCount > 0 {
		t.Errorf("Expected 0 rides to update, got %d", rideCount)
	}

	if spotCount := len(updateSpots); spotCount > 0 {
		t.Errorf("Expected 0 spots to update, got %d", spotCount)
	}
}

func Test_OneSpot_Circular_WithStartDate(t *testing.T) {
	var guide = generateGuide("2019-01-01", true)
	var rides []Ride = nil
	spotId1 := utils.GeneratedId("spot")
	var spots = []Spot{
		{
			Id:       spotId1,
			Nights:   0,
			Locked:   true,
			Position: "0.0",
		},
	}

	updateRides, updateSpots := prepare(guide, rides, spots)

	if rideCount := len(updateRides); rideCount > 0 {
		t.Errorf("Expected 0 rides to update, got %d", rideCount)
	}

	if spotCount := len(updateSpots); spotCount != 1 {
		t.Errorf("Expected 1 spots to update, got %d", spotCount)
	}

	for _, spot := range updateSpots {
		switch id, date := spot.id, spot.date; id {
		case spotId1:
			if date != "" {
				t.Errorf("Expected to set Spot One date to null, got %s", date)
			}
		default:
			t.Errorf("Unexpected spotId = %s", id)
		}
	}
}

func Test_OneSpot_NonCircular_WithStartDate(t *testing.T) {
	var guide = generateGuide("2019-01-01", false)
	var rides []Ride = nil
	spotId1 := utils.GeneratedId("spot")
	var spots = []Spot{
		{
			Id:       spotId1,
			Nights:   0,
			Locked:   true,
			Position: "0.0",
		},
	}

	updateRides, updateSpots := prepare(guide, rides, spots)

	if rideCount := len(updateRides); rideCount > 0 {
		t.Errorf("Expected 0 rides to update, got %d", rideCount)
	}

	if spotCount := len(updateSpots); spotCount != 1 {
		t.Errorf("Expected 1 spots to update, got %d", spotCount)
	}

	for _, spot := range updateSpots {
		switch id, date := spot.id, spot.date; id {
		case spotId1:
			if date != "" {
				t.Errorf("Expected to set Spot One date to null, got %s", date)
			}
		default:
			t.Errorf("Unexpected spotId = %s", id)
		}
	}
}

func Test_TwoSpot_NonCircular_WithNoStartDate(t *testing.T) {
	var guide = generateGuide("", false)
	spotId1, spotId2 := utils.GeneratedId("spot"), utils.GeneratedId("spot")
	rideId1 := utils.GeneratedId("ride")
	var spots = []Spot{
		{
			Id:       spotId1,
			Nights:   0,
			Locked:   true,
			Position: "0.0",
		},
		{
			Id:       spotId2,
			Nights:   1,
			Locked:   true,
			Position: "1.0",
		},
	}

	var rides = []Ride{
		{
			Id:       rideId1,
			FromSpot: spotId1,
			ToSpot:   spotId2,
		},
	}

	updateRides, updateSpots := prepare(guide, rides, spots)

	if rideCount := len(updateRides); rideCount != 1 {
		t.Errorf("Expected 1 rides to update, got %d", rideCount)
	}

	if spotCount := len(updateSpots); spotCount != 2 {
		t.Errorf("Expected 2 spots to update, got %d", spotCount)
	}

	for _, spot := range updateSpots {
		switch id, date := spot.id, spot.date; id {
		case spotId1:
			if date != "" {
				t.Errorf("Expected to set Spot One date to null, got %s", date)
			}
		case spotId2:
			if date != "" {
				t.Errorf("Expected to set Spot Two date to null, got %s", date)
			}
		default:
			t.Errorf("Unexpected spotId = %s", id)
		}
	}

	for _, ride := range updateRides {
		switch id, date := ride.id, ride.date; id {
		case rideId1:
			if date != "" {
				t.Errorf("Expected to set Ride One date to null, got %s", date)
			}
		default:
			t.Errorf("Unexpected rideId = %s", id)
		}
	}
}

func Test_TwoSpot_NonCircular_WithStartDate(t *testing.T) {
	var guide = generateGuide("2019-01-01", false)
	spotId1, spotId2 := utils.GeneratedId("spot"), utils.GeneratedId("spot")
	rideId1 := utils.GeneratedId("ride")
	var spots = []Spot{
		{
			Id:       spotId1,
			Nights:   0,
			Locked:   true,
			Position: "0.0",
		},
		{
			Id:       spotId2,
			Nights:   1,
			Locked:   true,
			Position: "1.0",
		},
	}

	var rides = []Ride{
		{
			Id:       rideId1,
			FromSpot: spotId1,
			ToSpot:   spotId2,
		},
	}

	updateRides, updateSpots := prepare(guide, rides, spots)

	if rideCount := len(updateRides); rideCount != 1 {
		t.Errorf("Expected 1 rides to update, got %d", rideCount)
	}

	if spotCount := len(updateSpots); spotCount != 2 {
		t.Errorf("Expected 2 spots to update, got %d", spotCount)
	}

	for _, spot := range updateSpots {
		switch id, date := spot.id, spot.date; id {
		case spotId1:
			if date != "" {
				t.Errorf("Expected to set Spot One date to null, got %s", date)
			}
		case spotId2:
			if date != "2019-01-01" {
				t.Errorf("Expected to set Spot Two date to 2019-01-01, got %s", date)
			}
		default:
			t.Errorf("Unexpected spotId = %s", id)
		}
	}

	for _, ride := range updateRides {
		switch id, date := ride.id, ride.date; id {
		case rideId1:
			if date != "2019-01-01" {
				t.Errorf("Expected to set Ride One date to 2019-01-01, got %s", date)
			}
		default:
			t.Errorf("Unexpected rideId = %s", id)
		}
	}
}

func Test_TwoSpot_Circular_WithNoStartDate(t *testing.T) {
	var guide = generateGuide("", true)
	spotId1, spotId2 := utils.GeneratedId("spot"), utils.GeneratedId("spot")
	rideId1, rideId2 := utils.GeneratedId("ride"), utils.GeneratedId("ride")
	var spots = []Spot{
		{
			Id:       spotId1,
			Nights:   0,
			Locked:   true,
			Position: "0.0",
		},
		{
			Id:       spotId2,
			Nights:   1,
			Locked:   true,
			Position: "1.0",
		},
	}

	var rides = []Ride{
		{
			Id:       rideId1,
			FromSpot: spotId1,
			ToSpot:   spotId2,
		},
		{
			Id:       rideId2,
			FromSpot: spotId2,
			ToSpot:   spotId1,
		},
	}

	updateRides, updateSpots := prepare(guide, rides, spots)

	if rideCount := len(updateRides); rideCount != 2 {
		t.Errorf("Expected 2 rides to update, got %d", rideCount)
	}

	if spotCount := len(updateSpots); spotCount != 2 {
		t.Errorf("Expected 2 spots to update, got %d", spotCount)
	}

	for _, spot := range updateSpots {
		switch id, date := spot.id, spot.date; id {
		case spotId1:
			if date != "" {
				t.Errorf("Expected to set Spot One date to null, got %s", date)
			}
		case spotId2:
			if date != "" {
				t.Errorf("Expected to set Spot Two date to null, got %s", date)
			}
		default:
			t.Errorf("Unexpected spotId = %s", id)
		}
	}

	for _, ride := range updateRides {
		switch id, date := ride.id, ride.date; id {
		case rideId1:
			if date != "" {
				t.Errorf("Expected to set Ride One date to null, got %s", date)
			}
		case rideId2:
			if date != "" {
				t.Errorf("Expected to set Ride Two date to null, got %s", date)
			}
		default:
			t.Errorf("Unexpected rideId = %s", id)
		}
	}
}

func Test_TwoSpot_Circular_WithStartDate(t *testing.T) {
	var guide = generateGuide("2019-01-01", true)
	spotId1, spotId2 := utils.GeneratedId("spot"), utils.GeneratedId("spot")
	rideId1, rideId2 := utils.GeneratedId("ride"), utils.GeneratedId("ride")
	var spots = []Spot{
		{
			Id:       spotId1,
			Nights:   0,
			Locked:   true,
			Position: "0.0",
		},
		{
			Id:       spotId2,
			Nights:   1,
			Locked:   true,
			Position: "1.0",
		},
	}

	var rides = []Ride{
		{
			Id:       rideId1,
			FromSpot: spotId1,
			ToSpot:   spotId2,
		},
		{
			Id:       rideId2,
			FromSpot: spotId2,
			ToSpot:   spotId1,
		},
	}

	updateRides, updateSpots := prepare(guide, rides, spots)

	if rideCount := len(updateRides); rideCount != 2 {
		t.Errorf("Expected 2 rides to update, got %d", rideCount)
	}

	if spotCount := len(updateSpots); spotCount != 2 {
		t.Errorf("Expected 2 spots to update, got %d", spotCount)
	}

	for _, spot := range updateSpots {
		switch id, date := spot.id, spot.date; id {
		case spotId1:
			if date != "2019-01-02" {
				t.Errorf("Expected to set Spot One date to 2019-01-02, got %s", date)
			}
		case spotId2:
			if date != "2019-01-01" {
				t.Errorf("Expected to set Spot Two date to 2019-01-01, got %s", date)
			}
		default:
			t.Errorf("Unexpected spotId = %s", id)
		}
	}

	for _, ride := range updateRides {
		switch id, date := ride.id, ride.date; id {
		case rideId1:
			if date != "2019-01-01" {
				t.Errorf("Expected to set Ride One date to 2019-01-01, got %s", date)
			}
		case rideId2:
			if date != "2019-01-02" {
				t.Errorf("Expected to set Ride Two date to 2019-01-02, got %s", date)
			}
		default:
			t.Errorf("Unexpected rideId = %s", id)
		}
	}

}

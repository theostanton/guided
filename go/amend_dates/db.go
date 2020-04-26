package main

import (
	"database/sql"
	"fmt"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
	"log"
	"os"
)

var Database *sql.DB

func init() {
	if _, exists := os.LookupEnv("STAGE"); !exists {
		if err := godotenv.Load("../../backend/.env"); err != nil {
			log.Fatal("No .env file found")
		}
	}
	Database = connect()
}

func connectionString() string {

	host := getEnv("POSTGRES_HOST")
	port := getEnv("POSTGRES_PORT")
	database := getEnv("POSTGRES_DB")
	user := getEnv("OWNER_USER")
	password := getEnv("OWNER_PASSWORD")

	connInfo := JoinStrings(
		"postgres://",
		user,
		":",
		password,
		"@",
		host,
		":",
		port,
		"/",
		database,
	)

	return connInfo
}

func connect() *sql.DB {

	db, err := sql.Open("postgres", connectionString())
	if err != nil {
		panic(err)
	}

	err = db.Ping()
	if err != nil {
		panic(err)
	}

	return db
}

func FetchSpots(guideId string) []Spot {

	query := `
select distinct sp.id       as id,
                sp.nights   as nights,
                sp.locked   as locked,
                sp.stage    as stage,
                sp.position as position
from spots as sp
         inner join stages st on sp.id = st.to_spot or st.from_spot = sp.id or st.id = sp.id
where sp.guide = $1
  and st.status in ('ready', 'complete')
order by sp.position
    `

	rows, err := Database.Query(query, guideId)
	defer rows.Close()
	if err != nil {
		fmt.Println(err.Error())
	}

	var spots []Spot

	var spot = Spot{}
	for rows.Next() {
		rows.Scan(&spot.Id, &spot.Nights, &spot.Locked, &spot.Stage, &spot.Position)
		spots = append(spots, spot)
	}

	return spots

}

func FetchRides(guideId string) []Ride {

	query := `
select r.id        as id,
       r.from_spot as from_spot,
       r.to_spot   as to_spot,
       r.stage     as stage,
   	   r.status 		as status
from rides as r
         inner join stages st on r.stage = st.id
where r.guide = $1
  and st.status in ('ready', 'complete')
`

	rows, err := Database.Query(query, guideId)
	defer rows.Close()
	if err != nil {
		fmt.Println(err.Error())
	}

	var rides []Ride

	var ride = Ride{}
	for rows.Next() {
		rows.Scan(&ride.Id, &ride.FromSpot, &ride.ToSpot, &ride.Stage, &ride.Stage)
		rides = append(rides, ride)
	}

	return rides

}

func FetchGuide(guideId string) Guide {
	var guide = Guide{}

	query := `select id, start_date,is_circular from guides where id=$1`
	err := Database.QueryRow(query, guideId).Scan(&guide.Id, &guide.StartDate, &guide.IsCircular)
	if err != nil {
		fmt.Println(err.Error())
	}

	return guide
}

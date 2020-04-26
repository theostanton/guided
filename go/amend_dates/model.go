package main

import sql "database/sql"

type User struct {
	Username string `db:"username"`
	Email    string `db:"email"`
}

type Guide struct {
	Id         string         `db:"id"`
	StartDate  sql.NullString `db:"start_date"`
	IsCircular bool           `db:"is_circular"`
}

type Spot struct {
	Id       string `db:"id"`
	Nights   int    `db:"nights"`
	Locked   bool   `db:"locked"`
	Stage    string `db:"stage"`
	Position string `db:"position"`
}

type Ride struct {
	Id       string `db:"id"`
	FromSpot string `db:"from_spot"`
	ToSpot   string `db:"to_spot"`
	Stage    string `db:"stage"`
	Status   string `db:"status"`
}

package main

import (
	"guided/utils"
	"log"
	"regexp"
)

func validDateString(dateString string) bool {
	matched, err := regexp.MatchString(`^(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$`, dateString)

	if err != nil {
		log.Fatal(err)
	}

	return matched
}

func (patch *Patch) query(table string) (string, error) {
	if patch.date == "" {
		return "update " + table + " set date=null where id=$1", nil
	} else if validDateString(patch.date) {
		return "update " + table + " set date=$1 where id=$2", nil
	} else {
		return "", utils.NewError("Invalid dateString")
	}
}

func Update(table string, patches []Patch) error {
	tx, err := Database().Begin()
	if err != nil {
		return err
	}

	for _, patch := range patches {
		var query string
		query, err = patch.query(table)
		if err != nil {
			return err
		}
		if patch.date == "" {
			_, err = tx.Exec(query, patch.id)
		} else {
			query, err = patch.query(table)
			_, err = tx.Exec(query, patch.date, patch.id)
		}
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

package main

import (
	"guided/utils"
	"testing"
)

func Test_Clear_Date(t *testing.T) {
	patch := Patch{
		id:   utils.GeneratedId("mock"),
		date: "",
	}
	query, err := patch.query("mocks")

	if err != nil {
		t.Errorf("Failed to generate query:%e", err)
	}

	expected := "update mocks set date=null where id=$1"
	if query != expected {
		t.Errorf("Expected %s received %s", expected, query)
	}
}

func Test_Set_Date(t *testing.T) {
	patch := Patch{
		id:   utils.GeneratedId("mock"),
		date: "2019-01-01",
	}
	query, err := patch.query("mocks")
	if err != nil {
		t.Errorf("Failed to generate query:%e", err)
	}
	expected := "update mocks set date=$1 where id=$2"
	if query != expected {
		t.Errorf("Expected %s received %s", expected, query)
	}
}

func Test_Invalid_Date(t *testing.T) {
	patch := Patch{
		id:   utils.GeneratedId("mock"),
		date: "2019-1-01",
	}
	_, err := patch.query("mocks")

	if err == nil {
		t.Errorf("Generating query should have failed")
	}

	if err.Error() != "Invalid dateString" {
		t.Errorf("Expected 'Invalid dateString' received %s", err.Error())
	}
}

func Test_validDateString(t *testing.T) {
	values := map[string]bool{
		"2019-01-01": true,
		"1999-01-01": true,
		"2019-12-31": true,
		"2019-13-01": false,
		"2019-01-32": false,
		"201-01-01":  false,
		"3001-01-01": false,
		"2019-1-01":  false,
		"2019-01-1":  false,
	}

	for dateString, expected := range values {
		isValid := validDateString(dateString)
		if isValid != expected {
			if expected {
				t.Errorf("%s considered invalid when it is valid", dateString)
			} else {
				t.Errorf("%s considered valid when it is invalid", dateString)
			}
		}
	}

}

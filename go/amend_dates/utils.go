package main

import (
	"os"
	"strings"
)


func getEnv(key string) string {
	value, exists := os.LookupEnv(key)

	if exists {
		return value
	}

	panic("No env for key=" + key)
}

func JoinStrings(strs ...string) string {
	var sb strings.Builder
	for _, str := range strs {
		sb.WriteString(str)
	}
	return sb.String()
}

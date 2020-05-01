package utils

import "github.com/google/uuid"

func GeneratedId(prefix string) string {
	return prefix + "_" + uuid.New().String()
}

type errorString struct {
	s string
}

func (e *errorString) Error() string {
	return e.s
}

func NewError(text string) error {
	return &errorString{text}
}

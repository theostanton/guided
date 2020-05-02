package main

import (
	"os"
)

func main() {
	defer Database().Close()
	if len(os.Args) > 1 && os.Args[1] == "serve" {
		Serve()
	} else {
		Lambda()
	}
}

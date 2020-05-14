package main

import (
	"fmt"
	"html"
	"log"
	"net/http"
	"strings"
)

func serverHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.URL.Path)

	guideId := strings.TrimLeft(html.EscapeString(r.URL.Path), "/")

	res, err := Invoke(guideId)

	if err == nil {
		fmt.Printf("Result=%s\n", res)
		fmt.Fprintf(w, "Result: %q", res)
	} else {
		fmt.Printf("err=%s\n", err.Error())
		fmt.Fprintf(w, "Error: %s", err.Error())
	}

}

func Serve() {
	fmt.Println("listening")
	http.HandleFunc("/", serverHandler)
	log.Fatal(http.ListenAndServe(":5001", nil))
}

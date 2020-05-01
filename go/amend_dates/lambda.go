package main

import (
	"context"
	"fmt"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"guided/utils"
)

func handler(_ context.Context, event events.SQSEvent) (string, error) {

	for _, message := range event.Records {
		fmt.Printf("The message %s for event source %s = %s \n", message.MessageId, message.EventSource, message.Body)
	}

	if len(event.Records) != 1 {
		err := utils.NewError("Expected exactly 1 message")
		fmt.Println(err)
		return "", err
	}

	guideId := event.Records[0].Body

	return Invoke(guideId)
}

func Lambda() {
	lambda.Start(handler)
}

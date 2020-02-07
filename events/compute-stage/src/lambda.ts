export default function(event: any, context: any, callback: any) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "SQS event processed.",
      input: event,
    }),
  }

  console.log("event: ", JSON.stringify(event))
  console.log("context: ", JSON.stringify(context))

  const body = event.Records[0].body
  console.log("text: ", JSON.parse(body).text)

  callback(null, response)
};

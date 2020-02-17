"use strict"

exports.handler = function(event, context, callback) {
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
    body: `<p>Hello world! ${process.env.APP_VERSION}</p>`,
  }
  callback(null, response)
}
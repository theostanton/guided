import http from "http"
import action from "./action"


export default function listen() {
  console.log("Listening")
  http.createServer(function(req, res) {
    const computationId = req.url!.replace("/", "")

    if (computationId && computationId.startsWith("computation_")) {
      action({
        computationId,
      }).then(result => {
        if (result.success) {
          res.write(`Success`)
        } else if (result.message) {
          res.write(`Failed: ${result.message}`)
        } else {
          res.write(`Failed`)
        }
        res.end()
      }).catch(error => {
        res.write(`Error: ${error.message}`)
        res.end()
      })
    } else {
      res.write(`'${computationId}' is not a valid computationId`)
      res.end()
    }

  }).listen(5002)
}

listen()

import http from "http"
import action from "./action"
import { prepare } from "."


// TODO this spiralled, do it properly
export default function listen() {
  console.log("Listening")
  http.createServer(function(req, res) {
    const id = req.url!.replace("/", "")
    if (id && id.startsWith("computation_")) {
      console.log("computationId=", id)
      action({
        computationId: id,
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
    } else if (id && id.includes("_")) {
      console.log("guideId=", id)
      prepare(id)
        .then(packet => {
          if (packet.computationIds.length === 0) {
            res.write(`Error: Failed to prepare computation`)
            res.end()
            return
          }
          console.log("packet=", packet)
          Promise.all(packet.computationIds.map(computationId => {
            return action({
              computationId,
            })
          })).then(results => {
            if (results.some(result => {
              return !result.success
            })) {
              let messages = ""
              results.forEach(result => {
                messages += result.message
                messages += "\n"
              })
              res.write(`Failed: ${messages}`)
            } else {
              res.write(`Success`)
            }
            res.end()
          }).catch(error => {
            res.write(`Error: ${error.message}`)
            res.end()
          })
        })
    } else {
      res.write(`'${id}' is not a valid computationId`)
      res.end()
    }

  }).listen(5002)
}

listen()

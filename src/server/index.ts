import server from './Server'

const port = process.env.PORT || 3000

server.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }
  return console.log(`server is listening on ${port}`)
})
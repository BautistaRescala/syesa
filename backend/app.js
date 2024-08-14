const express = require('express')
const app = express()
const port = 3001

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/',(request, respose)=> {
    console.log(request.body);
    respose.sendStatus(201);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require("express")
const app = express();
const PORT = 3000

app.get("/", function(request, response){
    response.end('Hello world!');
})

app.listen(3000, () => {
    console.log(`Server started on port ${PORT}`)
})
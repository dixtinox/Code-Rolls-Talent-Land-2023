//Server
const app = require('express')();
const port = process.env.PORT || 3000;

app.listen(
    port,
    () => console.log(`Server is listening on http://localhost:${port}`)
)

app.get('/', (req, res) => {

    res.send('Hello World');

});
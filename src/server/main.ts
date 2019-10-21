import express, {Express} from "express";

const app: Express = express();
const PORT = 9000;

app.get("/", (req, res) => {
    res.send("Hello Express!");
});

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}.`)
});
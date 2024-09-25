import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000; //this is keeping the port that the server will run on.
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended: true}));


//middleware 
const bodyHandler = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log("Body handler middleware");
  next();
}

app.get('/', (req, res) => {
  res.send('Hello, TypeScript Node Express!');
});

app.post("/submit", (res,req) => {
  req.send("Hello Typescript")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";

/*initialize express app */
const app = express();
/*initialize port */
const port = process.env.PORT || 3000; 
/*initialize static folder  */
const __dirname = dirname(fileURLToPath(import.meta.url));
/*initialize body parser */
app.use(bodyParser.urlencoded({extended: true}));

/*middleware */
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
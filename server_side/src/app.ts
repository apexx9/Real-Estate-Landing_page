import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import bodyHandler from "./middlewares/bodyHandler";
import "./routes/blog";
import router from "./routes/blog";

/*initialize express app */
const app = express();
/*initialize port */
const port = process.env.PORT || 3000;
/*initialize static folder  */
const __dirname = dirname(fileURLToPath(import.meta.url));
/*initialize body parser */
app.use(bodyParser.urlencoded({ extended: true }));

/*middleware */
app.use(bodyHandler);

app.get("/", (req, res) => {
  res.send("Hello, TypeScript Node Express!");
});

app.post("/submit", (res, req) => {
  req.send("Hello Typescript");
});
/* 404 error handler */
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(404).send("404 not found");
  },
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/* blog */
app.use("/blogs", router);


/*ejs */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// app.js
const links = [ //this is for the navbar component since it requires links array.
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

app.get("/", (req, res) => {   //the links array is passed to the index.ejs
  res.render("index", { links: links });
});

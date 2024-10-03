/* this is the middleware for the body handler */

import { Express } from "express";



const bodyHandler = (
    req: Express.Request,
    res: Express.Response,
    next: Function,
  ) => {
    console.log("Body handler middleware");
    next();
  };


  export default bodyHandler;
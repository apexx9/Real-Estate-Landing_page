import express from "express";
import blogController from '../controllers/blogController';

const router = express.Router(); // this is used to create a route using the express router module.

/*Blog Route */
router.get("/author/:id", blogController);


router.post("author/:id", blogController);


router.put("author/:id", blogController);


router.delete("author/:id", blogController);
//with the blogController somewhat acting as a middleware for the blog routes.












// router.get("/author/:id",(
//     req: express.Request, 
//     res: express.Response ,
//     next:express.NextFunction)=>{
//         res.send({data:"Blog Posts"})
// });


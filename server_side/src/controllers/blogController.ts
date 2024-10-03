import { Express,Request,Response } from "express";
import expressAsyncHandler from "../../node_modules/express-async-handler/index";
import "dotenv/config";

/*async handler variable */
const asyncHandler = expressAsyncHandler;

/*Error status code from env file */
const errorStatusCode = parseInt(process.env.ERROR_STATUS_CODE || "500");

/*custom Error */
class customError extends Error{
    statusCode: number;
    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = errorStatusCode ;
        this.name = "CustomError";
    }
}

const blogController = asyncHandler(async (req: Request, res: Response) => {
    const authorID = req.params?.Id;

    /*getting the user from the database */
    const author = await getUserFromDb(authorID);

    if(!author){
        throw new customError("Author not found", 404);
        // res.status(404).send("Author not found");
    }

    res.send(author);
});

export default blogController;




/*
express-async-handler, 
we don’t need to send an error response inside of this function but instead just throw an error. 
asyncHandler automatically catches the thrown error and calls next(), 
passing in the caught error as an argument, 
which passes control to our custom error handler!
*/
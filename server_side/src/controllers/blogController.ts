import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { getUserFromDb } from "../services/userService"; // Assuming this function exists
import CustomError from "../utils/CustomError";
import "dotenv/config";

/*Error status code from env file */
const errorStatusCode = parseInt(process.env.ERROR_STATUS_CODE || "500");

/*custom Error */


const blogController = asyncHandler(async (req: Request, res: Response) => {
    const authorId = req.params.id;

    /*getting the user from the database */
    const author = await getUserFromDb(authorId);

    if(!author){
        throw new CustomError("Author not found", 404);
    }

    res.json(author);
});

export default blogController;




/*
express-async-handler, 
we don’t need to send an error response inside of this function but instead just throw an error. 
asyncHandler automatically catches the thrown error and calls next(), 
passing in the caught error as an argument, 
which passes control to our custom error handler!
*/
import express from 'express'


const ErrorMiddleware = function (error:Error, req: express.Request, res: express.Response, next: express.NextFunction) {
	 res.status(500).send({
         status: false, 
         message: "An error occured", 
         data: error.message
        });
};

export default ErrorMiddleware

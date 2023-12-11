const express = require("express");

require("dotenv").config();
const app = express();

const router = express.Router();

const port = process.env.PORT || 8000;
// Build In Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//Application level middleware
const logger = (req, res, next)=> {
    console.log(`${new Date} Request: [${req.method}] [${req.url}]`);
    next();
}

app.use(logger)
// Router level middleware

const fakeAuth = (req, res, next)=>{
    const authStatus = false;

    if(authStatus){
        console.log("User is Authorized!");
        next();
    }else{
        res.status(401)
        throw new Error("User is not Authorized!")
    }
}

app.use(fakeAuth)
// Routers
router.route("/").get(()=>{
    console.log({message: "Get All Users"});
})

router.route("/").post(()=>{
    console.log({message: "create All Users"});
})

// Error-Handler
const handler = (err,req,res,next)=>{
    const codeStatus = res.codeStatus ? res.codeStatus : 500;

    switch (codeStatus) {
        case 400:
            res.json({
                title: "Validation Error",
                message: err.message,
                stackTrace: err.stack
            });
            break;
            case 404:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack
            });
            break;
            case 403:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            });
            break;
            case 401:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack
            });
            break;
            case 500:
            res.json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stack
            });
            break;
    
        default:
            console.log("No Error, All good");
            break;
    }
}
app.use(handler)

app.all("*", (req, res)=>{
    res.status(404);
    throw new Error("Router not Found")
})
app.listen(port, ()=>{
    console.log(`Listening to the port ${port}`);
})
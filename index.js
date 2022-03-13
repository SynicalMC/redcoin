const express = require("express");
const router = express.Router();
const app = express();

router.get('/handle',(request,response) => {
    console.log("Recieved GET.")
});

// add router in the Express app.
app.use("/", router);
const router = require("express").Router();
const userRoute = require("./api/userRoute");
const thoughtRoute = require("./api/thoughtRoute");

router.use("/User", userRoute);
router.use("/Thought", thoughtRoute);

module.exports = router;
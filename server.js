const express = require("express");
const { dbConnect } = require("./config/dbConnect");
const authRoute = require("./routes/auth.route");
const conversationRoute = require("./routes/conversation.route");
const gigRoute = require("./routes/gig.route.js");
const userRoute = require("./routes/user.route.js");
const orderRoute = require("./routes/order.route.js");
const messageRoute = require("./routes/message.route.js");
const reviewRoute = require("./routes/review.route.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

//middlewares
app.use(cors({ origin: "http://localhost:5000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

// starting Database
async function start() {
  await dbConnect();

  app.listen(PORT, (err) => {
    console.log(`Server listening on ${PORT}`);
  });
}
start();

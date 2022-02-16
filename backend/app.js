const express = require("express");
const app = express();
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const profileRouter = require("./routes/profile");
const postRouter = require("./routes/post");

connectDB();

// middleware
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRouter);
app.use("/api/posts", postRouter);

const port = 5000;
app.listen(port, () => console.log(`server running on port ${port}`));

require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const path = require("path");
const { FacebookShare, ilnessShare } = require("./services/EmailTemplates");
const controllersFactory = require("./controllers");
const errorMiddleware = require("./middleware/errorHanlder");
const siteRouterFactory = require("./route");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.json({ limit: "100mb" }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization,*"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE,PATCH,GET");
    return res.status(200).json({});
  }
  next();
});

app.get("/readfiles/:img", (req, res1) => {
  try {
    res1.sendFile(path.join(__dirname + "/images/" + req.params.img));
  } catch (error) {}
});

app.get("/facebookshare/:Id", async (req, res1) => {
  try {
    let sendit = await FacebookShare(req.params.Id);
    res1.send(sendit);
  } catch (error) {}
});

app.get("/ilnessShare/:Id", async (req, res1) => {
  try {
    let sendit = await ilnessShare(req.params.Id);
    res1.send(sendit);
  } catch (error) {}
});

const controllers = controllersFactory();
const siteRouter = siteRouterFactory(controllers);
app.use("/api", siteRouter);

app.use(express.static(path.join(__dirname, "build")));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.use(errorMiddleware);

module.exports = app;

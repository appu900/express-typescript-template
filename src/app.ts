import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Authservice pinged");
});

export default app;

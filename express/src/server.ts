import express from "express";
import name from "./userName";
import router from "./routes/route";

const app = express();

app.use("/api", router);

app.get("/", (req, res) => {
  res.send(`Hello, ${name}!`);
});

app.get("/api/users/:id", (req, res) => {
  res.json({ id: req.params.id });
});

app.get("/api/posts/:postId/comments/:commentId", (req, res) => {
  res.json({ postId: req.params.postId, commentId: req.params.commentId });
});

app.get("*", (req, res) => {
  res.status(404).send("Route not found");
});

export default app;

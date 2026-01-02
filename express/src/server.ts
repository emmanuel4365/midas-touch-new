import express from "express";
import name from "./userName.ts";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello, ${name}!`);
});

app.get("/api/users/:id", (req, res) => {
  res.json({ id: req.params.id });
});

app.get("/api/posts/:postId/comments/:commentId", (req, res) => {
  res.json({ postId: req.params.postId, commentId: req.params.commentId });
});

export default app;

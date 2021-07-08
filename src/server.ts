import "reflect-metadata";
import express from "express";

import "./database";

const app = express();

app.get("/test", (req, res) => {
	res.send("Ola NLW");
});

app.post("/test-post", (req, res) => {
	return res.send("Ola NLW");
});

app.listen(3000, () => console.log("Server is running"));

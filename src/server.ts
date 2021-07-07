import express from "express";

const app = express();

app.get("/test", (req, res) => {
	res.send("Ola NLW");
});

app.post("/test-post", (req, res) => {
	return res.send("Ola NLW");
});

app.listen(3000, () => console.log("Server is running"));

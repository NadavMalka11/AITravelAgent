const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
app.use(cors());

app.get("/api/test", (req, res) => {
    res.json({ message: "Hello from Backend!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
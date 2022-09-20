import express from "express";
const app = express();
app.get("/ads", (request, response) => {
    return response.json([
        { id: "foi", name: "foiTbm" },
        { id: "foi", name: "foiTbm" },
        { id: "foi", name: "foiTbm" },
    ]);
});
app.listen(3333);

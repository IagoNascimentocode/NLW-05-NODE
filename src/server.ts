import express from "express";

const app = express();

app.get("/", (request, response) => {
 return response.json("Olá nlw 05")
})

app.post("/users", (request, response) => {
 return response.json({ message: "Usuario cadastrado" })

})

app.listen(3333, () => console.log("Server Run"))
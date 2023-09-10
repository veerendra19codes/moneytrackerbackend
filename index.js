import express from "express";
import cors from "cors";
import {} from 'dotenv/config';
import mongoose from "mongoose";
import Transaction from "./models/Transaction.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);

app.get("/api/test", (req, res) => {
    res.json("test ok");
});

app.post("/api/transaction", async (req, res) => {
    const {name, description, datetime, price } = req.body;
        //object from db      //model/Schema
    const transaction = await Transaction.create({name, description, datetime, price});
    res.json(transaction);
});

app.get("/api/transactions", async(req, res) => {
    const transactions = await Transaction.find();
    res.json(transactions);
})

app.listen(3001);

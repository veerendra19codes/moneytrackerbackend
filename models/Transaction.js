import mongoose,{ model, Schema }from "mongoose";

const TransactionSchema = new Schema({
    name: {type: String, required: true },
    price: {type: Number, required: true },
    description: {type: String, required: true },
    datetime: {type: Date, required: true },
});

                            // collection/tablenname
const TransactionModel = mongoose.model("Transaction", TransactionSchema);

// module.exports = TransactionModel; this does not allows import in index.js
export default TransactionModel; // this works
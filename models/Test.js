import mongoose from "mongoose";

mongoose.set('strictQuery', false);

const Schema = mongoose.Schema;


const testSchema = new Schema({
    testKelime: String
})


const Test = mongoose.model('kelime-db', testSchema);

export default Test;
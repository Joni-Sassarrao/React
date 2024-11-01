import mongoose from "mongoose";

const generosSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true},
});

const genero = mongoose.model('generos', generosSchema);

export default genero;

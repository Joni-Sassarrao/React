import mongoose from "mongoose";

export default async function conectaNaDb(){
    mongoose.connect('mongodb+srv://admin:admin@cluster0.m8gkg.mongodb.net/spotify?retryWrites=true&w=majority&appName=Cluster0')

    return mongoose.connection;
}
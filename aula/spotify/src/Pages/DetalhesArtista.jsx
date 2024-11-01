import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function DetalhesArtista(){

    const {id} = useParams();
    const [artista, setArtista] = useState({});

    useEffect(() =>{
        const puxarArtista = async () =>{
            try{
                const artista = await fetch(`http://localhost:3000/artistas`);
                const resposta = await artista.json();
                setArtista(resposta);
            } catch(error){
                console.log("Error fetching data:", error);
            } finally {
                console.log("Finalizou a requisição")
            }
        }
    })

    return(
        <div className="w-[20rem] p-10 flex flex-col"> 
            <h1 className="text-3xl font-bold text-white">{artista.name}awdaw</h1>
            <img src={artista.image}/>
        </div>
    )
}
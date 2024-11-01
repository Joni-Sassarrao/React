import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function DetalhesArtista(){

    const {id} = useParams();
    const [artista, setArtista] = useState({});
    const [error, setError] = useState(null);

    useEffect(() =>{
        const puxarArtistas = async () =>{
            try{
                 const artistas = await fetch(`https://react-6j46.vercel.app/${id}`);
                 
                 if (!artistas.ok) {
                     throw new Error(`HTTP error! status: ${artistas.status}`);
                 }
                 
                 const resposta = await artistas.json();
                 setArtista(resposta);
            } catch(error) {
                console.log("Error fetching data:", error);
                setError(error.message);
            } finally {
                console.log('Finalizou a requisição')
            }
        }
        puxarArtistas();
     }, [id])

    return(
        <div className="w-[20rem] p-10 flex flex-col"> 
            <h1 className="text-3xl font-bold text-white">{artista.name}</h1>
            <img src={artista.image}/>
        </div>
    )
}
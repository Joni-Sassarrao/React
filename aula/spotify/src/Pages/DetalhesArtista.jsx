import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function DetalhesArtista(){

    const {id} = useParams();
    
    const [artistas, setArtistas] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/artistas/${id}`)
            .then((res) => res.json())
            .then((data) => setArtistas(data))
            .catch((err) => console.log(err))
            .finally(() => console.log("Finalizou a requisição"));
    }, []);

    return(
        <div className="w-3/4 px-10 pt-0 gap-y-10 flex flex-col items-center"> 
            <h1 className="text-3xl font-bold text-white">{artistas.name}</h1>
            <img className="w-80 h-auto" src={artistas.imagem}/>
        </div>
    )
}
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ConteudoPrincipal({children}){

  const [artistas, setArtistas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() =>{
      fetch('http://localhost:3000/artistas')
      .then(res => res.json())
      .then(data => setArtistas(data))
      .catch(err => console.log(err))
      .finally(() => console.log('Finalizou a requisição'))
    }, [])

    return(
      <>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1 className="py-5 px-10">Rap</h1>
          <div className="flex py-5 px-10">
            {artistas
            .filter(artista => artista.genero.includes("rap"))
            .map((artista) => (
              <Link to={`/artista/${artista._id}`}>
                <div className="bg-pink-700 h-28 w-28 flex flex-col justify-around items-center">
                  <p>{artista.name}</p>
                  <div className="bg-cyan-300 w-4/5 h-8 border-2 border-black flex justify-center">{artista.genero}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="py-5 px-10">Pop</h1>
          <div className="flex py-5 px-10">
            {artistas
            .filter(artista => artista.genero.includes("pop"))
            .map((artista) => (
              <Link to={`/artista/${artista._id}`}>
                <div className="bg-pink-700 h-28 w-28 flex flex-col justify-around items-center">
                  <p>{artista.name}</p>
                  <div className="bg-cyan-300 w-4/5 h-8 border-2 border-black flex justify-center">{artista.genero}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      </>
    )
}
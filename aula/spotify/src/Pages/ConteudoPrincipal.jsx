import { useEffect, useState } from "react";
import Card from "../Componentes/Card";
import SliderCards from "../Componentes/SliderCards";

export default function ConteudoPrincipal({children}){

  const [artistas, setArtistas] = useState([]);

    useEffect(() =>{
      fetch('http://localhost:3000/artistas')
      .then(res => res.json())
      .then(data => setArtistas(data))
      .catch(err => console.log(err))
      .finally(() => console.log('Finalizou a requisição'))
    }, [])

    return(
      <>
      <div className="flex flex-col p-5">
        <SliderCards titulo="Rap">
            {artistas
            .filter( (genero) => genero.genres.includes("rap"))
            .map(artista => (
                <Card key={artista._id} {...artista}/>
            ))}
        </SliderCards>
        <SliderCards titulo="Pop">
            {artistas
            .filter( genero => genero.genres.includes("pop"))
            .map(artista => (
                <Card key={artista._id} {...artista}/>
            ))}
        </SliderCards>
        <SliderCards titulo="Rock">
            {artistas
            .filter( genero => genero.genres.includes("rock"))
            .map(artista => (
                <Card key={artista._id} {...artista}/>
            ))}
        </SliderCards>
      </div>
      </>
    )
}
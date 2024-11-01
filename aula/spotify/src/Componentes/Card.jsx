import { Link } from "react-router-dom"
import { generateRandomColor } from "../services/card-services";
import { useEffect, useState } from "react";

export default function Card({_id, name, image}){

    const [artistas, setArtistas] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3000/artistas')
        .then(res => res.json())
        .then(data => setArtistas(data))
        .catch(err => console.log(err))
        .finally(() => console.log('Finalizou a requisição'))
      }, [])

    const [randomColor, setRandomColor] = useState('')
    
    useEffect(() => {
    const randomColor = generateRandomColor();
    setRandomColor(randomColor);
    }, [])

    return(
        <>
        <Link to={`/artista/${_id}`}>
            <div className="h-48 w-48 flex flex-col justify-start items-start rounded-2xl border-[2px]" style={{backgroundColor: randomColor}}>
                <div className="flex justify-end items-end h-full">
                    <img className="relative w-3/4 rounded-tl-2xl rounded-br-2xl border-[4px] border-l-black border-t-black border-r-0 border-b-0" src={image}/>
                </div>
                <p className="absolute text-center font-bold text-xl p-3">{name}</p>
            </div>
        </Link>
        </>
    )
}
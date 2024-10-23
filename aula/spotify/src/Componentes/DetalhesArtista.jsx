import { useParams } from "react-router-dom"

export default function DetalhesArtista(){

    const {id} = useParams()

    return(
        <>
        <p> {id} </p>
        </>
    )
}
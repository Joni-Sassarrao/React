import { useEffect, useState } from "react"
import Cardsidebar from "./Componentes/Cardsidebar"
import Container from "./Componentes/Container"
import ConteudoPrincipal from "./Componentes/ConteudoPrincipal"
import Header from "./Componentes/Header"
import Sidebar from "./Componentes/Sidebar"


function App() {

  const [artistas, setArtistas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() =>{
    fetch('http://localhost:3000/artistas')
    .then(res => res.json())
    .then(data => setArtistas(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
    <Header/>
    <Container>
    <Sidebar>
      <Cardsidebar/>
      <Cardsidebar/>
      <Cardsidebar/>
    </Sidebar>
    <ConteudoPrincipal>
      {artistas.map((artista) => (
        <div className="bg-pink-700 h-28 w-28 flex flex-col justify-around items-center">
          <p>{artista.name}</p>
          <div className="bg-cyan-300 w-4/5 h-8 border-2 border-black "></div>
        </div>
      ))}
    </ConteudoPrincipal>
    </Container>
    </>
  )
}

export default App

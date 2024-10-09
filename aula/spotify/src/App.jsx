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
    {
      artistas.map( artista => )
    }
    <div className="bg-red-600 h-[200px] w-[200px] p-4">
      <div className="bg-cyan-500 h-[50px] mb-16"></div>
      <div className="bg-cyan-500 h-[50px]"></div>
    </div>

    </ConteudoPrincipal>
    </Container>
    </>
  )
}

export default App

import Cardsidebar from "./Componentes/Cardsidebar"
import Container from "./Componentes/Container"
import ConteudoPrincipal from "./Componentes/ConteudoPrincipal"
import Header from "./Componentes/Header"
import Sidebar from "./Componentes/Sidebar"

function App() {
  return (
    <>
    <Header/>
    <Container>
    <Sidebar>
      <Cardsidebar/>
      <Cardsidebar/>
      <Cardsidebar/>
    </Sidebar>
    <ConteudoPrincipal/>
    </Container>
    </>
  )
}

export default App

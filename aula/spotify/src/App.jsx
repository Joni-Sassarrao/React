import { Outlet } from "react-router-dom"
import Container from "./Componentes/Container"
import Header from "./Componentes/Header"
import Sidebar from "./Componentes/Sidebar"


function App() {

  return (
    <>
    <Header/>
    <Container>
      <Sidebar/>
      <Outlet/>
    </Container>
    </>
  )
}

export default App

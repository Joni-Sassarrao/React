import Cardsidebar from "./Cardsidebar"

export default function Sidebar(){
    return(
        <>
        <div className="flex flex-col bg-purple-950 w-1/6 justify-evenly items-center"> 
            <Cardsidebar/>
            <Cardsidebar/>
            <Cardsidebar/>
        </div>
        </>
    )
}
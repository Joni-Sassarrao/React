export default function Sidebar({ children }){
    return(
        <>
        <div className="flex flex-col bg-cyan-500 h-[747px] w-1/4 justify-evenly items-center"> 
            {children}
        </div>
        </>
    )
}
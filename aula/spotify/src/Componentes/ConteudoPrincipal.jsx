export default function ConteudoPrincipal({children}){
    return(
      <>
      <div className="grid grid-cols-4 bg-rose-400 w-3/4 items-center place-items-center">
        {children}
      </div>
      </>
    )
}
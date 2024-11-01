export default function Container({children}){
    return(
        <section className="w-screen flex bg-black">
            {children}
        </section>
    )
}
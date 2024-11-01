export default function SliderCards({titulo, children}) {
    return(
        <>
        <div className="flex flex-col">
            <h1 className="py-5 px-10 text-white text-3xl">{titulo}</h1>
            <div className="flex py-5 px-10 gap-10">
                {children}
            </div>
        </div>
        </>
    )
}
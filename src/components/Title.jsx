const Title = ({ text , seconderyText }) => {

    const handleText = (parm) => {
        const word = []

        for (let i = 0; i < parm.length; i++) {
            const letter = parm[i];
            word.push(<span key={i} className="text-white" data-aos='fade-down' data-aos-delay={`${i}00`} >{letter}</span>) 
        }

        return word
    }
    

    return (
        <div>
            <div className="w-fit mx-auto flex flex-col items-center">
                <h2 className="text-[44px] font-bold">
                    {handleText(text)}
                </h2>
                <div className="p-1 w-10/12 mx-auto rounded-md bg-c2" data-aos='fade-right'></div>
            </div>
            
            <div className="mt-4">
                <p className="text-c3 text-center pt-11 text-5xl font-normal leading-[1.2]" data-aos='fade-up'> 
                    {seconderyText}
                </p>
            </div>
        </div>
    )
}

export default Title
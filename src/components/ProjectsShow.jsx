import { BlurhashCanvas } from "react-blurhash"

const ProjectShow = ({ src , hash , href }) => {
    return (
        <div 
            className="relative min-h-[290px] shadow-[0_0_1rem_var(--bg-color)] overflow-hidden flex rounded-[2rem]"
        >

            <img 
                className="w-full transition-[0.5s] duration-[ease] z-[2]" 
                src={src} 
                alt 
            />

            <BlurhashCanvas
                hash={hash}
                style={{
                    position: "absolute",
                    left: '0',
                    top: "0",
                    width: "100%",
                    height: "100%",
                    zIndex: "-1"
                }}
            />

        </div>
    )
}

export default ProjectShow
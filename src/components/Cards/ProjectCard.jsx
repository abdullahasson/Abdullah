// react
import { LazyLoadImage } from "react-lazy-load-image-component"
// blur hash
import { BlurhashCanvas } from "react-blurhash"

const ProjectCard = ({data}) => {

  return (
    <div dir='ltr' className="group rounded-3xl p-5 relative overflow-hidden w-full h-[350px] cursor-pointer">
        <a
          className="absolute left-0 top-0 w-full h-full bg-transparent z-20"
          target="_blank"
          href={data.projectDemo}
        ></a>

        <LazyLoadImage
            src={data.img} 
            alt={`${data.title}-image`} 
            className="absolute z-0 left-0 top-0 w-full h-full transition-[2s] group-hover:scale-110 group-hover:-rotate-2" 
        />
        <BlurhashCanvas
            hash={data.hash}
            className="absolute left-0 top-0 w-full h-full rounded-[16px] -z-10"
        /> 


        <div className="z-10 text-xl w-full absolute bottom-0 left-0 pb-8 pl-8 bg-gradient-to-t from-slate-900 from-0% via-slate-700 via-50% to-transparent to-100% ">
            <h3 className="text-5xl font-extrabold mb-3">{data.title}</h3>
            <p className='txt text-[16px] w-5/6 text-start m-0 p-0'>{data.text}</p>
        </div>

        <a 
          className="absolute bottom-10 right-10 w-16 h-16 bg-[#0fe] transition-all hover:bg-white hover:text-[#0fe] text-4xl rounded-xl font-extrabold flex items-center justify-center z-30"
          target="_blank"
          href={data.projectRepo}
        >
          <li className="bx bxl-github"></li>
        </a>
    </div>
  )
}

export default ProjectCard
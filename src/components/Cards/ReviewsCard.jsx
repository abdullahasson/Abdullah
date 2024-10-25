// react
import { LazyLoadImage } from "react-lazy-load-image-component"


const ReviewsCard = ({ data }) => {

  return (
    <div className="rounded-2xl flex flex-col bg-c4 w-full p-7 gap-14" data-aos='zoom-in-up'>
        <div className="text-4xl font-semibold">
            {data.text}
        </div>

        <div className="flex gap-7">
            <div className="flex flex-[1] justify-start items-center gap-7 w-fit p-5 px-7 rounded-2xl bg-c3/10">
                <LazyLoadImage
                    src={data.clientPhoto} 
                    alt={data.clientPhoto} 
                    className="rounded-full w-32 h-32"
                />
                <div className="text-start">
                    <h3 className="font-bold text-4xl mb-2">{data.clientName}</h3>
                    <p className="txt p-0 text-2xl text-start">{data.clientCarrer}</p>
                </div>
            </div>

            <div className="flex-[2.5] w-10/12 rounded-2xl p-5 bg-c3/10">

            </div>
        </div>
    </div>
  )

}

export default ReviewsCard

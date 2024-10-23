const ReviewsCard = ({ data }) => {

  return (
    <div className="rounded-2xl flex flex-col bg-slate-400">
        <div className="p-7 flex justify-between items-center">
            <div>
                <img src={data.clientPhoto} alt={data.clientPhoto} className="rounded-full w-14 h-14" />
                <div>
                    <h3>{data.clientName}</h3>
                    <p>{data.clientCarrer}</p>
                </div>
            </div>
        </div>

        <div>
            {data.text}
        </div>
    </div>
  )

}

export default ReviewsCard

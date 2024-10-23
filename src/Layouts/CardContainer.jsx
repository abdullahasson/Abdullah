const CardContainer = ({
    data,
    resourceName,
    card: Card,
}) => {

  return (
    <div className={`grid grid-cols-2 gap-10`}>
        {
            data.map((item , i) => (
                <div className=""  key={i}>
                    <Card 
                        {...{[resourceName]: item}}
                    />
                </div>
            ))
        }
    </div>
  )

}

export default CardContainer

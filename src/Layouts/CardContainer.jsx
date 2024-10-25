const CardContainer = ({
    data,
    resourceName,
    card: Card,
    columnsNumber = 2
}) => {

  return (
    <div className={`grid ${columnsNumber == 2 ? 'grid-cols-2 max-[560px]:grid-cols-1' : 'grid-cols-1'} gap-10`}>
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

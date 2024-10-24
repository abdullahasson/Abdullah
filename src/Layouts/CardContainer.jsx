const CardContainer = ({
    data,
    resourceName,
    card: Card,
    columnsNumber = 2
}) => {

  return (
    <div className={`grid gap-10`} style={{gridTemplateColumns: `repeat(${columnsNumber}, minmax(0, 1fr))`}}>
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

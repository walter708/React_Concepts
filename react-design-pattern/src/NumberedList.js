export const NumberedList = ({
  items,
  resourceName,
  itemComponent:ItemComponent
}) =>{
  return (
    <>
    {items.map((item , i) =>(
      <>
      <hr />
      <p>{i + 1}</p>
      <ItemComponent key={i} {...{[resourceName] : item}}/>
      </>
    ))}
    </>
  )
}
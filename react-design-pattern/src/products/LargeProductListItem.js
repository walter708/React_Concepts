export const LargeProductListItem = ({product}) =>{
   const {name , price ,description, rating } = product
   
   return (
     <>
     <h3>{name}</h3>
     <p>{price}</p>
     <h3>Description</h3>
     <p>{description}</p>
     <h3>Average Rating</h3>
     <p>{rating}</p>
     </>
   )
 }
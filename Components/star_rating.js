import {FaStar} from 'react-icons/fa'

/************************************** */
const createArray = (length) =>{
  return [...Array(length)]
}

/************************************** */

const Star = ({selected = false , onSelect}) =>{
  return <FaStar color= {selected ? "red" : "gray"}
           onClick={onSelect}/>
}

/************************************** */

const StarRating = ({totalStar = 5 }) =>{
  const [selectedStar, setSelectedStar] = useState(0)
  return (
   <>
  {createArray(totalStar).map((n,i) => 
  <Star key = {i}
    selected={selectedStar > i}
    onSelect = {() => setSelectedStar(i + 1)} 
  />)}
  <p>{selectedStar} of {totalStar}</p>
  </>
  )
}
/************************************** */

const App = () =>{
  return <StarRating totalStar={4} />
}
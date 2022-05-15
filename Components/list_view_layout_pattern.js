import { RegularList } from "./RegularList";
import { SmallListItem } from "./people/SmallListItem";
import { LargeListItem } from "./people/LargeListItem";
import { LargeProductListItem } from "./products/LargeProductListItem";
import { SmallProductListItem } from "./products/SmallProductListItem";
import { NumberedList } from "./NumberedList";

const people = [{
  name:"John Doe",
  age:54,
  hairColor:"brown",
  hobbies:['swimming' , 'bicycling' , 'video games'],
  
},{
  name:'Brenda Smith',
  age:33,
  hairColor:'black',
  hobbies:['golf', 'mathematics'],
  
},
{
  name:'Jane Gracia',
  age:27,
  hairColor:'blonde',
  hobbies:['biology', 'medicine' , 'gymnastics'],
}];


const products = [{
	name: 'Flat-Screen TV',
	price: '$300',
	description: 'Huge LCD screen, a great deal',
	rating: 4.5,
}, {
	name: 'Basketball',
	price: '$10',
	description: 'Just like the pros use',
	rating: 3.8,
}, {
	name: 'Running Shoes',
	price: '$120',
	description: 'State-of-the-art technology for optimum running',
	rating: 4.2,
}];
function App() {
  return (
    <>
      <RegularList 
            items ={people} 
            resourceName = "person" 
            itemComponent = {SmallListItem} />
      <NumberedList 
            items ={people} 
            resourceName = "person" 
            itemComponent = {LargeListItem} />
      <RegularList 
            items ={products} 
            resourceName = "product" 
            itemComponent = {SmallProductListItem} />
      <NumberedList
            items ={products} 
            resourceName = "product" 
            itemComponent = {LargeProductListItem} />
    </>
  );
}

export default App;

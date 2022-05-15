import './App.css';
// import { CurrentUserLoader } from './CurrentUserLoader';
import { UserInfo } from './UserInfo';
// import {ProductInfo} from './ProductInfo'
// import { UserLoader } from './UserLoader';
// import {ResourceLoader} from './ResourceLoader
import { DataSource } from './DataSource';
import axios from 'axios';

// const Id = ["123" , "456" , "789"];


const getDataFunc = url =>  async () =>{
  const response = await axios.get(url)
  return response.data
}




function App() {
  return (
    //  Id.map((id) =><UserLoader key={id} userId={id}><UserInfo /></UserLoader>)
//     <ResourceLoader resourceUrl = "/users/789"  resourceName ="user">
//     <UserInfo />
//   </ResourceLoader>
  
//   <ResourceLoader resourceUrl = "/products/1234"  resourceName ="product">
//   <ProductInfo />
// </ResourceLoader>


      <DataSource getResource={getDataFunc('/users/123')}  resourceName ="user" >
        <UserInfo />
      </DataSource>
 
  )
}

export default App;

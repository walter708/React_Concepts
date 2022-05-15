import React, {useState, useEffect} from "react";
// import axios from 'axios'




export const  DataSource = ({getResource = () => {} , resourceName , children}) =>{
  const [state , setState] = useState(null)
  
  useEffect(() => {
    (async () => {
      const data = await getResource()
      setState(data)
    })()

  }, [getResource])
  
  
  
  
  
  return state ? (
    <>
      {React.Children.map(children , child => {
          if(React.isValidElement(child)){
              return React.cloneElement(child , { [resourceName] : state });
          }
          return child;
         
      } )}
       </>
  ): <p>Loading...</p>;

}

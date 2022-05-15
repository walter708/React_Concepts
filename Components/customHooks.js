import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useInput } from './useInput';



const App = () =>{
    const  [titleProps, resetSound]  = useInput("");
    const  [colorProps, resetColor] = useInput("");
    
    const Submit = (e) =>{
      e.preventDefault()
      alert(`The sound ${titleProps.value} look like ${colorProps.value}`)
      resetSound("");
      resetColor("#000000");
       
    }
    
    
    return(
      <form onSubmit={Submit}> 
        <input {...titleProps} type ="text" placeholder='Sound...'  />
        <input {...colorProps} type ="color" />
        <button>Add</button>
      </form>
    )
    
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

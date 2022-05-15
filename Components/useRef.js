import React, {useRef} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



const App = () =>{
    const  sound = useRef();
    const  color = useRef();
    
    const Submit = (e) =>{
      e.preventDefault()
      let soundVal = sound.current.value;
      let colorVal = color.current.value
      alert(`The sound ${soundVal} look like ${colorVal}`)
      sound.current.value = "";
      color.current.value = "";
       
    }
    
    
    return(
      <form onSubmit={Submit}> 
        <input ref ={sound} type ="text" />
        <input ref ={color} type ="color"/>
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

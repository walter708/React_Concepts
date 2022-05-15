import React, {useReducer} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const initialState = {
  message:"Hi"
}; 

function reducer(state , action) {
  switch(action.type){
    case "Yell":
      let temp = `excuse!!! me, i just said ${state.message}`
      if(state.message === temp){
        return
      }else{
        return {
          message:`excuse!!! me, i just said ${state.message}`
        };
      }

    case "whisper":
      return {
        message:`excuse me, i just said ${state.message}`
      };
    default:
      return {
        message:`Hello`
      };
  }
}

const App = () =>{
  const [state , dispatch] = useReducer(
    reducer,
    initialState
  )
  
  return (
    <div>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({type:"Yell"})}>yell</button>
      <button onClick={() => dispatch({type:"whisper"})}>whisper</button> 
    </div>
  )
  
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

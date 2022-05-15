import React, {createContext , useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'

const TreeContext = createContext()

export const useTrees = () => useContext(TreeContext);

const trees = [
  {id:"1" , type:"Maple"},
  {id:"2" , type:"Oak"},
  {id:"3" , type:"Family"},
  {id:"4" , type:"Mango"}
  
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TreeContext.Provider value ={{ trees }}>
    <App />
  </TreeContext.Provider>
  
);



import { useTrees } from '.';
import './App.css';
function App() {
  const { trees } = useTrees() 
  return (
    <div>
      <ul>
        {trees.map(tree => <li key = {tree.id}>{tree.type}</li>)}
      </ul>
    </div>
  );
}

export default App;
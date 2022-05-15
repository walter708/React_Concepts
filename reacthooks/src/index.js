import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useFetch  } from './useFetch';

const App = ({login}) =>{
  const {data , loading , error} = useFetch(`https://api.github.com/users/${login}`)
  
  if(loading) return <h1>Loading</h1>
  if (error) return <pre>{JSON.stringify(error , null , 2)}</pre>
  
  return(
    <div>
      <img alt={data.login} src={data.avatar_url}  />
      {data.name && <p>{data.name}</p>}
      {data.name && <p>{data.name}</p>}
    </div>
  )
}
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App login= "walter708"/>
  
);

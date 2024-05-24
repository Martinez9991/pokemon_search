import './App.css';
import SearchBar from './components/SearchBar.js';
import Result from './components/Result.js';
import axios from 'axios';
import { useState , useEffect } from 'react';



function App() {
const [response2 , setresponse] = useState([]) 
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0' 
const Getdata = async ()=> {
  try{
    const response = await axios.get(URL)
    setresponse(response.data)
  }catch{
    console.log("Fail to connect to service")
  }
};

useEffect(()=> {
  Getdata()
})

  return (
    <div className="App">
      {response2 && response2.results.map(u => (
        <div key={u.name}>
          <p>Name: {u.name}</p>
      </div>
  ))}
    <Result/>
    <SearchBar/>
    {console.log(Getdata.data)}
    </div>
  );
}

export default App;

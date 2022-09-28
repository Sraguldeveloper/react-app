
import { useState } from 'react';
import './App.css';
import data from './data.js'
import List from './List';
function App() {
  const[person,setPerson]=useState(data)
  return (
    <>
    <div  className='container'>
    <h3>{person.length} Birthday's Today</h3>
          <List person={person}/>
          <button type="button"  onClick={()=>{setPerson([])}}>Clear all</button>
    </div>
    </>
  );
}

export default App;

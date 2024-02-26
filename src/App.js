import './App.css';
import React from 'react';
import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
<Navigation></Navigation>
    </div>
  );
}

function Navigation(){
 return (
<div className='navbarContainer'>
<div className='title'>
  <h1>Movies</h1>
</div>
<div className='searchBar'>
  <h2>Search Movies</h2><input type="text" placeholder='search for a movie...' ></input>
</div>
</div>
 );
 }

 function Movies(){
  return (
<div>

</div>
    );
 }

 function Favorites(){
  return (
<div>

</div>
    );
 }
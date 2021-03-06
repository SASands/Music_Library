import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DiplayMusic from './Components/DisplayMusicTable/DisplayMusic';
import AddSongForm from './Components/AddNewSongForm/AddSongForm';
// todo 
// make DisplayMusic.jsx component to hold our table you started making below
// you will need to pass in the songs variable into the component to have access to it, example below



function App() {
  // song data coming from Django API through axios call, going to send to display song component
  const [songs, setSongs] = useState([])


  // with the optional empty array in the last line of this useEffect it will only run the first time the page renders
  // if we remove the optional array it will run once when the page renders and run every time it sees a variable change value on this component
  // if we add a variable name in the optional array it will run when page renders or when that value changes 
useEffect(() => {
  getAllSongs();
},[])


async function getAllSongs(){  // grabbing all song data
  // await is telling react that what is happening in this function might take longer than a normal function 
  // response is catching the data being sent back from the Django API
  // .get is our method type, we would need to say .put, .delete .post right after axios to change the type of request
  let response = await axios.get('http://127.0.0.1:8000/api/music/');
  console.log("ran axios request")
  console.log(response.data);
  setSongs(response.data);
}


async function createSong(newSong){
  let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
  console.log(response.data);
  if (response.status === 201) {
    getAllSongs()
  }
}

  

  return (
    <div className='border-box'>
     <AddSongForm createSong={createSong}/>
     <DiplayMusic songs={songs}/>
    </div>

  );
}

export default App;

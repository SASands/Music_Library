import axios from 'axios';
import React, { useEffect, useState } from 'react';




function App() {
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

  

  return (
    <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Album_Image</th>
              <th>Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Release Date</th>
              <th>Genre</th>
              <th>Likes</th>
            </tr>
          </thead>
        </table>
      </div>
  
  
  );
}

export default App;

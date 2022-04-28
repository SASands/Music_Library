import React, { useState } from 'react';
import "./DisplayMusic.css"


// {/* here is an exmaple of calling a DisplayMusic component and passing in our songs variable as "props"
// before this will work you will also need to import the component at the very top of the file */}
// {/* <DisplayMusic songs={songs} />>  */}
const DiplayMusic = (props) => {
const [search, setSearch] = useState('')



let songList = props.songs.filter(function(el){
    if(el.artist.toLowerCase().includes(search.toLowerCase()) || el.title.includes(search) || el.album.includes(search) || el.release.includes(search) || el.genre.includes(search ) ){
        return true
    }
})
    return (

    <table>
        <thead>
            
            <tr className='Header'>
                <input type = "text" className='searchBar' placeholder='Search' onChange={(event) => setSearch(event.target.value)}/>
                <th>Artist</th>
                <th>Title</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
            </tr>            
        </thead>
        {songList.map((song) => {
            return (
        <div>
        
            <tbody className='MusicBody'>
                <tr className='TableRow'>
                    <td><img className="table_image" src={song.album_image}/></td>
                    <td className='Table'>{song.artist}</td>
                    <td>{song.title}</td>
                    <td>{song.album}</td>
                    <td>{song.release}</td>
                    <td>{song.genre}</td>
                </tr>
            </tbody>
        </div>
        )})}
    </table>
    
    )
}

export default DiplayMusic
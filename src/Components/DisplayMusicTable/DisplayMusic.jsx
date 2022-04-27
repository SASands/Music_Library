import React from 'react';
import "./DisplayMusic.css"


// {/* here is an exmaple of calling a DisplayMusic component and passing in our songs variable as "props"
// before this will work you will also need to import the component at the very top of the file */}
// {/* <DisplayMusic songs={songs} />>  */}
const DiplayMusic = (props) => {
    return (

    <table>
        <thead>
            <tr>
                <th>Artist</th>
                <th>Title</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
            </tr>
        </thead>
        {props.songs.map((song) => {
            return (
        <div>
        
            <tbody>
                <tr>
                    <td><img className="table_image" src={song.album_image}/></td>
                    <td>{song.artist}</td>
                    <td>{song.title}</td>
                    <td>{song.album}</td>
                    <td>{song.releaseDate}</td>
                    <td>{song.genre}</td>
                </tr>
            </tbody>
        </div>
        )})}
    </table>
    
    )
}

export default DiplayMusic
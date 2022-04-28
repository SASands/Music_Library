import React, { useState } from 'react';
// import './AddSongForm.css'


const AddSongForm = (props) => {
    const [title, setTitle] = useState([])
    const [artist, setArtist] = useState([])
    const [album, setAlbum] = useState([])
    const [release, setRelease] = useState([])
    const [genre, setGenre] = useState([])
    const [albumImage, setAlbumImage] = ([])

    function handleSubmit (formEvent){
        formEvent.preventDefault()
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release: release,
            genre: genre,
            album_image: albumImage
        }
        console.log(newSong)
        props.AddSongForm(newSong)
        setTitle("")
        setArtist("")
        setAlbum("")
        setRelease("")
        setGenre("")
        setAlbumImage("")
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div class="form-group row">
                <label for="Title" class="col-sm-2 col-form-label">Title</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" value = {title} onChange = {(event) => setTitle(event.target.value)} name='Title' placeholder="title"></input>
                </div>
            </div>
            <div class="form-group row">
                <label for="Artist" class="col-sm-2 col-form-label">Artist</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" value = {artist} onChange = {(event) => setArtist(event.target.value)} name="Artist" placeholder="artist"></input>
                </div>
            </div>
            <div class="form-group row">
                <label for="Album" class="col-sm-2 col-form-label">Album</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" value = {album} onChange = {(event) => setAlbum(event.target.value)} name="Album" placeholder="Album"></input>
                </div>
            </div>
            <div class="form-group row">
                <label for="Release Date" class="col-sm-2 col-form-label">Release Date</label>
                <div class="col-sm-10">
                    <input type="date" class="form-control" value = {release} onChange = {(event) => setRelease(event.target.value)} name='date' placeholder="Date"></input>
                </div>
            </div>
            <div class="form-group row">
                <label for="Genre" class="col-sm-2 col-form-label">Genre</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" value = {genre} onChange = {(event) => setGenre(event.target.value)} name='genre' placeholder="Genre"></input>
                </div>
            </div>
            <div class="form-group row">
                <label for="Album Image" class="col-sm-2 col-form-label">Album Image</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" value = {albumImage} onChange = {(event) => setAlbumImage(event.target.value)} name='Album Image' placeholder="Album Image"></input>
                </div>
            </div>
        </form>
    );
}
 
export default AddSongForm;
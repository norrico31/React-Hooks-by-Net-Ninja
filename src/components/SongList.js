import React, { useState } from 'react';
import uuid from 'react-uuid';

const SongList = () => {

    // it takes 2 arguments. 1st argument return the data, 2nd argument a function to change the data 
    const [ songs, setSongs ] = useState([
        { title: 'almost home', id: 1 },
        { title: 'memory gospel', id: 2 },
        { title: 'this wild darkness', id: 3 }
    ]);

    const addSong = () => {
        setSongs([ ...songs, { title: 'new song', id: uuid() }]);
    }

    return (
        <div className="song-list">
            <ul>
                {songs.map((song) => {
                    return (
                        <li key={ song.id }>{ song.title }</li>
                    )
                })}
            </ul>
            <button onClick={ addSong }>Add a song</button>
        </div>
    )
}

export default SongList;
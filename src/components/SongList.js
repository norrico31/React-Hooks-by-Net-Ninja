import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';

import NewSongForm from './NewSongForm';

const SongList = () => {

    // it takes 2 arguments. 1st argument return the data, 2nd argument a function to change the data 
    const [ songs, setSongs ] = useState([
        { title: 'almost home', id: 1 },
        { title: 'memory gospel', id: 2 },
        { title: 'this wild darkness', id: 3 }
    ]);

    const [ age, setAge ] = useState(20);

    const addSong = (title) => {
        setSongs([ ...songs, { title: title, id: uuid() }]);
    }


    useEffect(() => {
        console.log('useEffect Hook ran', songs);
    }, [ songs ])
    useEffect(() => {
        console.log('useEffect Hook ran', age);
    }, [ age ])

    return (
        <div className="song-list">
            <ul>
                {songs.map((song) => {
                    return (
                        <li key={ song.id }>{ song.title }</li>
                    )
                })}
            </ul>
            <NewSongForm addSong={ addSong }/>
            <button onClick={() => setAge(age + 1)}>Add 1 to age: { age }</button>
        </div>
    )
}

export default SongList;
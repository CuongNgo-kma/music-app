import React, { useContext, useEffect, useState } from 'react'
import { Songs } from '../Contents'
function ListSong() {
    const [idSong, setIdSong] = useState()
    const { DataSongs, handlerSetSong, song } = useContext(Songs)
    const handlerPlaySongs = (idSong) => {
        setIdSong(idSong)
        handlerSetSong(idSong)
    }
    useEffect(() => {
        setIdSong(song.id)
    }, [song])
    return (
        <div className='col-span-2 overflow-y-scroll'>
            <table className='table-auto w-full'>
                <thead className='text-white text-left'>
                    <tr>
                        <th>#</th>
                        <th >Title</th>
                        <th >Author</th>
                        <th><i className='fa fa-download '></i></th>
                    </tr>
                </thead>
                <tbody>
                    {DataSongs.map((song, index) =>
                        <tr key={index} className={`bg-slate-800 h-10 text-gray-500 hover:bg-gray-300 ${idSong === song.id && `text-teal-400`}`}
                            onClick={() => handlerPlaySongs(song.id)}>
                            <td>{index + 1}</td>
                            <td>{song.name}</td>
                            <td>{song.author}</td>
                            <td><a href={song.url} className="fa fa-download"></a></td>
                        </tr>)}
                </tbody>

            </table>

        </div>
    )
}

export default ListSong
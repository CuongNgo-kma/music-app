import React, { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import { Songs } from '../Contents'
function Playing() {
    const { song, handlerSetSong } = useContext(Songs)
    const handlerClickNext = () => {
        handlerSetSong(song.id + 1)
    }
    const handlerClickPre = () => {
        handlerSetSong(song.id != 0 ? song.id - 1 : song.id = 0)
    }
    return (
        <div>
            <AudioPlayer className='play-music'
                showSkipControls={true}
                showJumpControls={false}
                src={song.url}
                layout='stacked-reverse'
                onClickNext={handlerClickNext}
                onClickPrevious={handlerClickPre} />
        </div>
    )
}

export default Playing
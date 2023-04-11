import React, { useEffect, useRef, useState } from 'react';
import '../AudioPlayer/css/style.css'
import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsFillSkipEndCircleFill } from 'react-icons/bs';
import { songsData } from './data/arrayAudio';

//Музыкальный плеер
const Player = () => {
  const clickRef = useRef(document.createElement("div"));
  const [songs] = useState(songsData);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsData[1]);
  const audioElement = useRef(document.createElement("audio"));

  // При проигрывании
  const onPlaying = () => {
    const commonTimeSong = audioElement.current.duration;
    const currentTimeSonf = audioElement.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": currentTimeSonf / commonTimeSong * 100, "length": commonTimeSong })
  }

  // нажатие на кноку "Пуск"
  const heandlerPlayPause = () => {
    setIsPlaying(!isPlaying);
  }

  // Изменение времени в прогресс баре
  const heandlerChangeCurrentTime = (event: any) => {
    let currentTime = Number(clickRef.current?.clientWidth);
    const offset = event.nativeEvent.offsetX;
    const progressBlock = offset / currentTime * 100;

    audioElement.current.currentTime = progressBlock / 100 * currentSong.length;
  }

  // Предыдущая песня
  const heandlerSkipBack = () => {
    const index = songs.findIndex((parSong: { title: any; }) => parSong.title === currentSong.title);

    if (index === 0) {
      setCurrentSong(songs[songs.length - 1])
    }
    else {
      setCurrentSong(songs[index - 1])
    }

    setIsPlaying(true);
    audioElement.current.currentTime = 0;
  }

  // Следующая песня
  const heandlerSkipToNext = () => {
    const indexNext = songs.findIndex((parSong: { title: any; }) => parSong.title === currentSong.title);

    if (indexNext === songs.length - 1) {
      setCurrentSong(songs[0])
    }
    else {
      setCurrentSong(songs[indexNext + 1])
    }

    setIsPlaying(true);
    audioElement.current.currentTime = 0;
  }

  // проиграть аудио
  const playAudio = () => {
    audioElement.current.play();
  }

  // Остановить аудио
  const stopAudio = () => {
    audioElement.current.pause();
  }

  useEffect(() => {
    if (isPlaying) {
      playAudio(); 
    }
    else {
      stopAudio();
    }
  }, [isPlaying]);

  return (
    <>
      <audio src={currentSong.trackPath} ref={audioElement} onTimeUpdate={onPlaying} />
      <div className='player_container'>
        <div className="title">
          <p>{currentSong.title}</p>
        </div>
        <div className="navigation">
          <div className="navigation_wrapper" onClick={heandlerChangeCurrentTime} ref={clickRef}>
            <div className="seek_bar" style={{ width: `${currentSong.progress + "%"}` }}></div>
          </div>
        </div>
        <div className="controls">
          <BsFillSkipStartCircleFill className='btn_action' onClick={heandlerSkipBack} />
          {isPlaying ? <BsFillPauseCircleFill className='btn_action pp' onClick={heandlerPlayPause} /> : <BsFillPlayCircleFill className='btn_action pp' onClick={heandlerPlayPause} />}
          <BsFillSkipEndCircleFill className='btn_action' onClick={heandlerSkipToNext} />
        </div>
      </div>
    </>
  )
}

export default Player
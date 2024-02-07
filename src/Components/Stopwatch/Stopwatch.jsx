import React, { useRef, useState } from "react";
import styles from "./Stopwatch.module.css";
import { ReactComponent as PlayButton } from "../../Assets/play_circle.svg";
import { ReactComponent as PauseButton } from "../../Assets/pause_circle.svg";
import { ReactComponent as StopButton } from "../../Assets/stop_circle.svg";
import { ReactComponent as VolumeButton } from "../../Assets/volume_up.svg";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timer = useRef(null);

  const startTimer = () => {
    setIsRunning(true);
    timer.current = setInterval(() => {
      setTime((prev) => prev + 10);
      // console.log(time)
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(timer.current);
    setIsRunning(false);
    setTime(0);
  }

  const pauseTimer = () => {
    clearInterval(timer.current);
    setIsRunning(false);
  }


  function showTime(time) {
    const hour = Math.floor(time / 3600000);
    const min = Math.floor((time % 3600000) / 60000);
    const sec = Math.floor((time % 60000) / 1000);
    const remainingMilliseconds = time % 1000;

    return `${doubleZero(hour)}:${doubleZero(min)}:${doubleZero(sec)}.${doubleZero(remainingMilliseconds)}`;
  }

  const doubleZero = (value) => (value < 10 ? `0${value}` : value);




  return (
    <div className={styles.wrapper}>
      <div className={styles.timer}>
        <h2>{showTime(time)}</h2>
      </div>
      <div className={styles.controller}>
        <PlayButton onClick={startTimer} className={styles.play} />
        <PauseButton onClick={pauseTimer} className={styles.play}/>
        <StopButton onClick={stopTimer} className={styles.pause} />
        <VolumeButton className={styles.volume} />
      </div>
    </div>
  );
};

export default Stopwatch;

import { ChangeEvent, FC } from 'react';
import styles from './TrackProgress.module.scss';

interface TrackProgressProps {
  current: number;
  duration: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isVolume?: boolean;
}

const TrackProgress: FC<TrackProgressProps> = ({ current, duration, onChange, isVolume=false }) => {

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div className={styles.root}>
      <input
        type="range"
        min={0}
        max={duration}
        value={current}
        onChange={onChange}
        className={styles.progress}
      />
      <div className={styles.time}>
        {!isVolume ? formatTime(current) : current + '%'}
      </div>
    </div>
  );
};

export default TrackProgress;

import { ChangeEvent } from 'react';
import styles from './TrackProgress.module.scss';

interface TrackProgressProps {
  currentTime: number;
  duration: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TrackProgress = ({ currentTime, duration, onChange }) => {
  return (
    <div className={styles.root}>
      <input
        type="range"
        min={currentTime}
        max={duration}
        value={currentTime}
        onChange={onChange}
      />
      <div>
        {currentTime} / {duration}
      </div>
    </div>
  );
};

export default TrackProgress;

import { ChangeEvent, FC, ReactNode, useRef } from 'react';
import styles from './FileUpload.module.scss';

interface FileUploadProps {
  children: ReactNode;
  setFile: (file: File) => void;
  accept: string;
}

const FileUpload: FC<FileUploadProps> = ({ setFile, accept, children }) => {
  const ref = useRef<HTMLInputElement>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0]);
  };

  return (
    <div onClick={() => ref.current.click()} className={styles.wrapper}>
      <input type="file" accept={accept} className={styles.input} ref={ref} onChange={onChange} />
      {children}
    </div>
  );
};

export default FileUpload;

import { ChangeEvent, useState } from 'react';

export interface useInputValue {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const useInput = (initialValue: string): useInputValue => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
};

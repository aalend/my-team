import { Input } from '../types';
import styles from './textarea.module.scss';

type TextareaProps = Omit<Input, 'type'>;

export function Textarea({
  name,
  label,
  register,
  errorMsg,
  placeholder,
  validation,
}: TextareaProps) {
  return (
    <>
      <div className={styles.textarea}>
        <label htmlFor={name}>{label}</label>
        <textarea id={name} {...register(name, validation)} placeholder={placeholder}></textarea>
        <span>{errorMsg}</span>
      </div>
    </>
  );
}

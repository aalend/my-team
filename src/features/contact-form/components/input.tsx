import { Input as InputProps } from '../types';
import styles from './input.module.scss';

export function Input({
  name,
  label,
  register,
  type,
  errorMsg,
  placeholder,
  validation,
}: InputProps) {
  return (
    <div className={styles['input']}>
      <label htmlFor={name} className={styles['input__label']}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={styles['input__element']}
        {...register(name, validation)}
      />
      <span className={styles.msgError}>{errorMsg}</span>
    </div>
  );
}

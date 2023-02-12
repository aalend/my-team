import { useForm } from 'react-hook-form';
import { FormInputs } from '../types';
import { Input } from './input';
import { Textarea } from './textarea';

export function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const handleOnSubmit = function (data: FormInputs) {
    console.log(data);

    reset();
  };

  return (
    <section>
      <form onSubmit={handleSubmit(handleOnSubmit)} style={{ display: 'grid', gap: '20px' }}>
        <Input
          label={'Name'}
          type='text'
          name={'name'}
          errorMsg={errors.name?.message}
          register={register}
          placeholder={'John Doe'}
          validation={{
            required: 'Name field is required!',
          }}
        />
        <Input
          label={'Email'}
          type='email'
          name={'email'}
          errorMsg={errors.email?.message}
          register={register}
          placeholder={'Enter Address'}
          validation={{
            required: 'Email field is required!',
          }}
        />
        <Input
          label={'Company'}
          type='text'
          name={'company'}
          errorMsg={errors.company?.message}
          register={register}
          placeholder={'Company Name'}
        />
        <Input
          label={'Title'}
          type='text'
          name={'title'}
          errorMsg={errors.title?.message}
          register={register}
          placeholder={'Title'}
          validation={{
            required: 'Title field is required!',
          }}
        />
        <Textarea
          name={'content'}
          label={'Message'}
          errorMsg={errors.content?.message}
          register={register}
          placeholder={'Message'}
          validation={{
            required: 'Message field is required!',
          }}
        />
        <button
          type='submit'
          style={{
            padding: '16px 32px',
            border: '1px solid var(--white-200)',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Send message
        </button>
      </form>
    </section>
  );
}

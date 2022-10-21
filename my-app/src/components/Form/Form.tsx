import React, { useEffect, useState } from 'react';
import styles from './Form.module.css';
import { FormProps } from './Form.props';
import cn from 'classnames';
import { Button, Htag, Input, Select, Switcher } from 'components';
import { IForm } from './Form.interface';
import { useForm } from 'react-hook-form';
import { getGender } from './helpers/getGender';
import { getAvatar } from './helpers/getAvatar';
import { IFormCard } from './FormCard/FormCard.interface';
import { getMinDate } from './helpers/fieldsValidator';

export const Form = ({ className, addCard, title, ...props }: FormProps): JSX.Element => {
  const [success, setSuccess] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isSubmitted, isValid, isSubmitSuccessful },
  } = useForm<IForm>();

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data: IForm) => {
    const card: IFormCard = Object.assign(data, {
      id: Date.now(),
      avatar: getAvatar(data.file),
      gender: getGender(data.gender),
    });
    reset();
    if (addCard) addCard(card);
    viewSuccess();
  };

  const viewSuccess = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 1000);
  };

  return (
    <form
      className={cn(styles.form, className)}
      onSubmit={handleSubmit(onSubmit)}
      data-testid="form"
    >
      {title && (
        <Htag className={styles.title} tag="h2">
          {title}
        </Htag>
      )}
      <Input
        {...register('name', {
          required: 'Please, input name',
          minLength: {
            value: 3,
            message: 'Name is too short',
          },
        })}
        error={errors.name}
        type="text"
        placeholder="Name"
        data-testid="name"
      />
      <Input
        {...register('surname', {
          required: 'Please, input surname',
          minLength: {
            value: 3,
            message: 'Surname is too short',
          },
        })}
        error={errors.surname}
        type="text"
        placeholder="Surname"
        data-testid="surname"
      />
      <Input
        {...register('zipCode', {
          required: 'Please, input zipCode',
          minLength: {
            value: 6,
            message: 'ZipCode is too short',
          },
          maxLength: {
            value: 12,
            message: 'ZipCode is too long',
          },
        })}
        error={errors.zipCode}
        type="number"
        name="zipCode"
        placeholder="Zip-code"
        data-testid="zipCode"
      />
      <Input
        {...register('birthday', {
          required: 'Please, choose your birthday date',
          validate: {
            validate: (value) =>
              new Date(value).getTime() < getMinDate() || 'Sorry, you is so young',
          },
        })}
        error={errors.birthday}
        type="date"
        name="birthday"
        label="Your Birthday"
        max={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`}
        min={`${new Date().getFullYear() - 120}-${new Date().getMonth() + 1}-${
          new Date().getDate() - 1
        }`}
        data-testid="birthday"
      />
      <Select
        {...register('country', {
          required: 'Please, choose country',
          validate: {
            validate: (value) => value !== '0' || 'Please, choose country',
          },
        })}
        error={errors.country}
        name="country"
        defaultValue={0}
        valueDisabled={true}
        options={['Choose country', 'Belarus', 'Ukraine', 'Russia']}
        data-testid="country"
      />
      <Switcher {...register('gender')} tabIndex={0} data-testid="gender" />
      <Input
        {...register('file')}
        type="file"
        name="file"
        accept="image/*"
        className={styles.file}
        data-testid="file"
      />
      <Input
        {...register('agree', { required: 'Please, check agree' })}
        error={errors.agree}
        type="checkbox"
        name="agree"
        className={styles.agree}
        label={'I consent to my personal data '}
        data-testid="agree"
      />
      <Button type="submit" appearance="primary" disabled={isDirty && !isValid && isSubmitted}>
        SUBMIT
      </Button>
      <span
        className={cn(styles.success, {
          [styles.none]: !success,
        })}
      >
        success
      </span>
    </form>
  );
};

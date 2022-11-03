import React, { useEffect } from 'react';
import styles from './Form.module.css';
import { FormProps } from './Form.props';
import cn from 'classnames';
import { Button, Htag, Input, Select, Switcher } from 'components';
import { IForm } from './Form.interface';
import { useForm } from 'react-hook-form';
import { getGender } from './helpers/getGender';
import { getAvatar } from './helpers/getAvatar';
import { IFormCard } from './FormCard/FormCard.interface';
import { fieldsValidator } from './helpers/fieldsValidator';
import { getMaxDate, getMinDate } from './helpers/getDateParams';
import { useSuccess } from 'Hook/useSuccess';
import { useAppDispatch } from 'Hook';
import { addCard } from 'store/slices/FormSlice';

export const Form = ({ className, title, ...props }: FormProps): JSX.Element => {
  const { success, viewSuccess } = useSuccess();
  const dispatch = useAppDispatch();

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
    dispatch(addCard(card));
    viewSuccess();
  };

  return (
    <form
      className={cn(styles.form, className)}
      onSubmit={handleSubmit(onSubmit)}
      data-testid="form"
      {...props}
    >
      {title && (
        <Htag className={styles.title} tag="h2">
          {title}
        </Htag>
      )}
      <Input
        {...register('name', {
          required: 'Please, input name',
          ...fieldsValidator.text,
        })}
        error={errors.name}
        type="text"
        placeholder="Name"
        data-testid="name"
      />
      <Input
        {...register('surname', {
          required: 'Please, input surname',
          ...fieldsValidator.text,
        })}
        error={errors.surname}
        type="text"
        placeholder="Surname"
        data-testid="surname"
      />
      <Input
        {...register('zipCode', {
          required: 'Please, input zipCode',
          ...fieldsValidator.zipCode,
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
          ...fieldsValidator.birthday,
        })}
        error={errors.birthday}
        type="date"
        name="birthday"
        label="Your Birthday"
        max={getMaxDate()}
        min={getMinDate()}
        data-testid="birthday"
      />
      <Select
        {...register('country', {
          required: 'Please, choose country',
          ...fieldsValidator.country,
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

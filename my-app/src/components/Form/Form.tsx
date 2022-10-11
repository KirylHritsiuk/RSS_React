import React, { createRef, FormEvent } from 'react';
import styles from './Form.module.css';
import { FormFields, FormProps, IState } from './Form.props';
import cn from 'classnames';
import { Button, Htag, Input, Select, Switcher } from 'components';
import { isAllFieldsValid } from './helpers/isAllFieldsValid';
import { getGender } from './helpers/getGender';
import { validData } from './helpers/fieldsValidator';
import { getAvatar } from './helpers/getAvatar';

type StateKeys =
  | 'name'
  | 'surname'
  | 'zipCode'
  | 'birthday'
  | 'gender'
  | 'country'
  | 'agree'
  | 'file';

export class Form extends React.Component<FormProps, IState> {
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  zipCodeInput: React.RefObject<HTMLInputElement>;
  birthdayInput: React.RefObject<HTMLInputElement>;
  genderInput: React.RefObject<HTMLInputElement>;
  agreeInput: React.RefObject<HTMLInputElement>;
  countrySelect: React.RefObject<HTMLSelectElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  state: IState;

  constructor(props: FormProps) {
    super(props);
    this.nameInput = createRef();
    this.surnameInput = createRef();
    this.zipCodeInput = createRef();
    this.birthdayInput = createRef();
    this.countrySelect = createRef();
    this.genderInput = createRef();
    this.fileInput = createRef();
    this.agreeInput = createRef();
    this.state = {
      isDirty: false,
      name: false,
      surname: false,
      zipCode: false,
      birthday: false,
      country: false,
      agree: false,
      success: false,
    };
  }

  onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const name = e.target.name as StateKeys;
    this.setState((prevState) => {
      if (name === 'file') return;
      return { ...prevState, [name]: validData(e) };
    });

    if (
      this.state.isDirty &&
      this.state.name &&
      this.state.surname &&
      this.state.birthday &&
      this.state.country &&
      this.state.zipCode &&
      this.state.agree
    ) {
      this.setState((prevState) => {
        return { ...prevState, isDirty: false };
      });
    }
  };

  handleSubmit(e: FormEvent) {
    e.preventDefault();

    const { cardList } = this.props;
    const form = e.currentTarget as HTMLFormElement & FormFields;

    if (isAllFieldsValid(this.state)) {
      this.props.addCard(cardList, {
        name: form.name.value,
        surname: form.surname.value,
        zipCode: form.zipCode.value,
        birthday: form.birthday.value,
        country: form.country.value,
        gender: getGender(form.gender.checked),
        avatar: getAvatar(form),
      });
      this.setState({ isDirty: false, success: true });
      this.onReset();
    } else {
      this.setState({ isDirty: true });
    }
  }

  onReset() {
    const name: HTMLInputElement | null = this.nameInput.current;
    const surname: HTMLInputElement | null = this.surnameInput.current;
    const zipCode: HTMLInputElement | null = this.zipCodeInput.current;
    const birthday: HTMLInputElement | null = this.birthdayInput.current;
    const country: HTMLSelectElement | null = this.countrySelect.current;
    const file: HTMLInputElement | null = this.fileInput.current;
    const agree: HTMLInputElement | null = this.agreeInput.current;
    if (name && surname && zipCode && birthday && country && file && agree) {
      name.value = '';
      surname.value = '';
      zipCode.value = '';
      birthday.value = '';
      country.value = '0';
      file.value = '';
      agree.checked = false;
    }

    this.setState({
      isDirty: false,
      name: false,
      surname: false,
      zipCode: false,
      birthday: false,
      country: false,
      agree: false,
    });
    setTimeout(() => {
      this.setState({ success: false });
    }, 1500);
  }

  render() {
    return (
      <form
        className={cn(styles.form, this.props.className)}
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <Htag className={styles.title} tag="h2">
          Main form
        </Htag>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          error={this.state.name}
          isDirty={this.state.isDirty}
          errorMessage={'Please, choose correct'}
          reference={this.nameInput}
          onChange={this.onChangeHandler}
        />
        <Input
          type="text"
          name="surname"
          placeholder="Surname"
          error={this.state.surname}
          isDirty={this.state.isDirty}
          errorMessage={'Please, choose correct'}
          reference={this.surnameInput}
          onChange={this.onChangeHandler}
        />
        <Input
          type="number"
          name="zipCode"
          placeholder="Zip-code"
          error={this.state.zipCode}
          isDirty={this.state.zipCode}
          errorMessage={'Please, choose correct'}
          reference={this.zipCodeInput}
          onChange={this.onChangeHandler}
        />
        <Input
          type="date"
          name="birthday"
          label="Your Birthday"
          error={this.state.birthday}
          isDirty={this.state.isDirty}
          errorMessage={'Please, choose correct'}
          reference={this.birthdayInput}
          onChange={this.onChangeHandler}
        />
        <Select
          name="country"
          defaultValue={0}
          error={this.state.country}
          isDirty={this.state.isDirty}
          errorMessage={'Please, choose correct'}
          reference={this.countrySelect}
          onChange={this.onChangeHandler}
          options={[' Choose country', 'Belarus', 'Ukraine', 'Russia']}
        />
        <Switcher tabIndex={0} name="gender" reference={this.genderInput} />
        <Input
          type="file"
          name="file"
          accept="image/*"
          reference={this.fileInput}
          onChange={this.onChangeHandler}
          className={styles.file}
        />
        <Input
          type="checkbox"
          name="agree"
          className={styles.agree}
          error={this.state.agree}
          isDirty={this.state.isDirty}
          label={'I consent to my personal data '}
          errorMessage={'Please, choose correct'}
          onChange={(e) => this.setState({ agree: e.target.checked })}
          reference={this.agreeInput}
        />
        <Button type="submit" appearance="primary" disabled={this.state.isDirty}>
          SUBMIT
        </Button>
        <span className={cn(styles.success, { [styles.none]: this.state.success === false })}>
          success
        </span>
      </form>
    );
  }
}

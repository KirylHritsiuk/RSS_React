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
  myForm: React.RefObject<HTMLFormElement>;

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
    this.myForm = createRef();
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

    const form = e.currentTarget as HTMLFormElement & FormFields;

    if (isAllFieldsValid(this.state)) {
      if (this.props.addCard) {
        this.props.addCard({
          id: Date.now(),
          name: form.name.value,
          surname: form.surname.value,
          zipCode: form.zipCode.value,
          birthday: form.birthday.value,
          country: form.country.value,
          gender: getGender(form.gender.checked),
          avatar: getAvatar(form),
        });
      }
      this.setState({ isDirty: false, success: true });
      this.onReset();
    } else {
      this.setState({ isDirty: true });
    }
  }

  onReset() {
    const form: HTMLFormElement | null = this.myForm.current;

    if (form) {
      form.reset();
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
        ref={this.myForm}
        className={cn(styles.form, this.props.className)}
        onSubmit={(e) => this.handleSubmit(e)}
        data-testid="form"
      >
        {this.props.title && (
          <Htag className={styles.title} tag="h2">
            {this.props.title}
          </Htag>
        )}
        <Input
          type="text"
          name="name"
          placeholder="Name"
          error={this.state.name}
          isDirty={this.state.isDirty}
          errorMessage={'Please, input correct name'}
          reference={this.nameInput}
          onChange={this.onChangeHandler}
          data-testid="name"
        />
        <Input
          type="text"
          name="surname"
          placeholder="Surname"
          error={this.state.surname}
          isDirty={this.state.isDirty}
          errorMessage={'Please, input correct surname'}
          reference={this.surnameInput}
          onChange={this.onChangeHandler}
          data-testid="surname"
        />
        <Input
          type="number"
          name="zipCode"
          placeholder="Zip-code"
          error={this.state.zipCode}
          isDirty={this.state.isDirty}
          errorMessage={'Please, input correct zip-code'}
          reference={this.zipCodeInput}
          onChange={this.onChangeHandler}
          data-testid="zipCode"
        />
        <Input
          type="date"
          name="birthday"
          label="Your Birthday"
          error={this.state.birthday}
          isDirty={this.state.isDirty}
          max={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`}
          min={`${new Date().getFullYear() - 120}-${new Date().getMonth() + 1}-${
            new Date().getDate() - 1
          }`}
          errorMessage={'Sorry, you is so young'}
          reference={this.birthdayInput}
          onChange={this.onChangeHandler}
          data-testid="birthday"
        />
        <Select
          name="country"
          defaultValue={0}
          valueDisabled={true}
          error={this.state.country}
          isDirty={this.state.isDirty}
          errorMessage={'Please, choose country'}
          reference={this.countrySelect}
          onChange={this.onChangeHandler}
          options={[' Choose country', 'Belarus', 'Ukraine', 'Russia']}
          data-testid="country"
        />
        <Switcher tabIndex={0} name="gender" reference={this.genderInput} data-testid="gender" />
        <Input
          type="file"
          name="file"
          accept="image/*"
          reference={this.fileInput}
          onChange={this.onChangeHandler}
          className={styles.file}
          data-testid="file"
        />
        <Input
          type="checkbox"
          name="agree"
          className={styles.agree}
          error={this.state.agree}
          isDirty={this.state.isDirty}
          label={'I consent to my personal data '}
          errorMessage={'Please, check agree'}
          onChange={(e) => this.setState({ agree: e.target.checked })}
          reference={this.agreeInput}
          data-testid="agree"
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

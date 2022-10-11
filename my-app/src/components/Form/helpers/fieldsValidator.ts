export const validData = (
  e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
) => {
  switch (e.target.name) {
    case 'name':
      if (e.target.value === '' || e.target.value.trim().length < 3) {
        return false;
      }

      return true;
    case 'surname':
      if (e.target.value === '' || e.target.value.trim().length < 3) {
        return false;
      }

      return true;
    case 'zipCode':
      if (e.target.value === '' || e.target.value.trim().length < 6) {
        return false;
      }

      return true;
    case 'birthday':
      if (e.target.value === '' || new Date(e.target.value) > new Date('2007-01-01')) {
        return false;
      }

      return true;
    case 'country':
      if (e.target.value === '0') {
        return false;
      }

      return true;
    case 'agree':
      if (e.target.value === 'off') {
        return false;
      }
      return true;
    case 'file':
      return false;
  }
};

export const validData = (
  e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
) => {
  switch (e.target.name) {
    case 'name':
    case 'surname':
      if (
        e.target.value === '' ||
        e.target.value.trim().length < 3 ||
        e.target.value.match(/[0-9]/i)
      ) {
        return false;
      }

      return true;
    case 'zipCode':
      if (e.target.value === '' || e.target.value.trim().length < 6) {
        return false;
      }

      return true;
    case 'birthday':
      const date = new Date();
      const [year, month, day] = [date.getFullYear() - 14, date.getMonth() + 1, date.getDate()];
      if (
        e.target.value === '' ||
        new Date(e.target.value).getTime() > new Date(year, month, day).getTime()
      ) {
        return false;
      }

      return true;
    case 'country':
      if (e.target.value === '0') {
        return false;
      }

      return true;
    case 'agree':
      return (e.target as HTMLInputElement).checked;
    case 'file':
      return false;
  }
};

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormCard } from 'components/Form/FormCard/FormCard.interface';

interface IFormCardState {
  cards: IFormCard[];
}

const initialState: IFormCardState = {
  cards: [],
};

const FormSlice = createSlice({
  name: 'FormCards',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<IFormCard>) {
      state.cards.push(action.payload);
    },
  },
});

export default FormSlice.reducer;
export const { addCard } = FormSlice.actions;

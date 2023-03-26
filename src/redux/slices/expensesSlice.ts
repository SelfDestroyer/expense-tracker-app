import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import IExpense from '../../models/IExpense';
import {getFormattedDate} from '../../utils/date';

const initialState: IExpense[] = [
  {
    id: '1',
    description: 'test1',
    amount: 1,
    date: getFormattedDate(new Date('24-02-2023')),
  },
  {
    id: '2',
    description: 'test2',
    amount: 2,
    date: getFormattedDate(new Date('23-02-2023')),
  },
  {
    id: '3',
    description: 'test3',
    amount: 3,
    date: getFormattedDate(new Date('23-02-2023')),
  },
];

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    removeExpense: (state, action: PayloadAction<string>) =>
      state.filter(expense => expense.id !== action.payload),
    addExpense: (state, action: PayloadAction<IExpense>) => {
      state.unshift(action.payload);
    },
    editExpense: (state, action: PayloadAction<IExpense>) => {
      console.log(action);
      state.map(expense => {
        if (expense.id === action.payload.id) {
          expense.date = action.payload.date;
          expense.amount = action.payload.amount;
          expense.description = action.payload.description;

          return expense;
        }
        return expense;
      });
    },
  },
});

export const {removeExpense, editExpense, addExpense} = expensesSlice.actions;
export default expensesSlice.reducer;

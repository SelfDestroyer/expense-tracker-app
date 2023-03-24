import {createSlice} from '@reduxjs/toolkit';
import IExpense from '../../models/IExpense';

const initialState: IExpense[] = [
  {id: '1', description: 'test1', amount: 1, date: '12-12-11'},
  {id: '2', description: 'test2', amount: 2, date: '12-12-12'},
  {id: '3', description: 'test3', amount: 3, date: '12-12-13'},
];

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {},
});

export default expensesSlice.reducer;

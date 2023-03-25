import {createSlice} from '@reduxjs/toolkit';
import IExpense from '../../models/IExpense';

const initialState: IExpense[] = [
  {id: '1', description: 'test1', amount: 1, date: new Date('22-11-2023')},
  {id: '2', description: 'test2', amount: 2, date: new Date('22-11-2023')},
  {id: '3', description: 'test3', amount: 3, date: new Date('22-11-2023')},
  {id: '315', description: 'test3', amount: 3, date: new Date('22-11-2023')},
  {id: '32', description: 'test3', amount: 3, date: new Date('22-11-2023')},
  {id: '31', description: 'test3', amount: 3, date: new Date('22-11-2023')},
  {id: '325', description: 'test3', amount: 3, date: new Date('22-11-2023')},
  {id: '1432', description: 'test3', amount: 3, date: new Date('22-11-2023')},
  {id: '34', description: 'test3', amount: 3, date: new Date('22-11-2023')},
  {id: '23', description: 'test3', amount: 3, date: new Date('22-11-2023')},
  {id: '35', description: 'test3', amount: 3, date: new Date('22-11-2023')},
  {id: '232', description: 'test3', amount: 3, date: new Date('22-11-2023')},
  {id: '13', description: 'test3', amount: 3, date: new Date('22-11-2023')},
];

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {},
});

export default expensesSlice.reducer;

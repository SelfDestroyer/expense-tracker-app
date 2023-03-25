import React, {FC} from 'react';
import IExpense from '../../models/IExpense';
import {FlatList, ListRenderItem} from 'react-native';
import ExpenseItem from './ExpenseItem';

type ExpensesListPros = {
  readonly expenses: IExpense[];
};
const ExpensesList: FC<ExpensesListPros> = ({expenses}): JSX.Element => {
  const onRenderExpanseItemHandler: ListRenderItem<IExpense> = ({item}) => (
    <ExpenseItem {...item} />
  );
  const onExtractKeyHandler = ({id}: IExpense): string => id.toString();

  return (
    <FlatList
      data={expenses}
      renderItem={onRenderExpanseItemHandler}
      keyExtractor={onExtractKeyHandler}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ExpensesList;

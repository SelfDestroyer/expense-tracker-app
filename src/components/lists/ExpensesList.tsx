import React, {FC} from 'react';
import IExpense from '../../models/IExpense';
import {FlatList, ListRenderItem, Text} from 'react-native';
import ExpenseItem from './ExpenseItem';
import InfoMessage from '../IU/InfoMessage';

type ExpensesListPros = {
  readonly expenses: IExpense[];
  readonly fallBackText?: string;
};
const ExpensesList: FC<ExpensesListPros> = ({
  expenses,
  fallBackText,
}): JSX.Element => {
  const onRenderExpanseItemHandler: ListRenderItem<IExpense> = ({item}) => (
    <ExpenseItem {...item} />
  );
  const onExtractKeyHandler = ({id}: IExpense): string => id.toString();
  const onRenderListEmptyComponentHandler = () => (
    <InfoMessage message={fallBackText} />
  );

  return (
    <FlatList
      data={expenses}
      renderItem={onRenderExpanseItemHandler}
      keyExtractor={onExtractKeyHandler}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={onRenderListEmptyComponentHandler}
      alwaysBounceVertical={false}
    />
  );
};

export default ExpensesList;

import React, {FC, useMemo} from 'react';
import ScreenContainer from '../components/containers/ScreenContainer';
import {ManageExpenseScreenProps} from '../types/navigation/ScreenTypes';
import ExpenseForm from '../components/Expenses/ExpenseForm';
import {Alert, StyleSheet, View} from 'react-native';
import IconButton from '../components/IU/IconButton';
import ITheme from '../types/styles/theme/DefautTheme';
import {useAppDispatch} from '../hooks/redux/useAppDispatch';
import {useTheme} from '../hooks/theme/useTheme';
import {
  addExpense,
  editExpense,
  removeExpense,
} from '../redux/slices/expensesSlice';
import IExpense from '../models/IExpense';

const ManageExpense: FC<ManageExpenseScreenProps> = ({
  navigation,
  route,
}): JSX.Element => {
  const expense = route.params?.expense;
  const isEditing = !!expense;
  const dispatch = useAppDispatch();
  const {theme} = useTheme();
  const themedStyles = useMemo(() => styles(theme), [theme]);

  const canselHandler = () => navigation.goBack();

  const createDeleteAlert = () =>
    Alert.alert('', 'Are you sure you want to remove?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          dispatch(removeExpense(expense?.id));
          canselHandler();
        },
      },
    ]);

  const deleteExpanseHandler = () => createDeleteAlert();
  const submitHandler = (expense: IExpense) => {
    if (isEditing) {
      dispatch(editExpense(expense));
    } else {
      dispatch(addExpense(expense));
    }
    canselHandler();
  };

  return (
    <ScreenContainer style={themedStyles.container}>
      <ExpenseForm
        buttonLabel={isEditing ? 'Update' : 'Add'}
        onCansel={canselHandler}
        onSubmit={submitHandler}
        defaultValues={expense}
      />
      <View style={themedStyles.deleteContainer}>
        {isEditing && (
          <IconButton
            color={theme.colors.error500}
            size={36}
            iconName={'trash'}
            onPress={deleteExpanseHandler}
          />
        )}
      </View>
    </ScreenContainer>
  );
};
export default ManageExpense;
const styles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary800,
    },
    deleteContainer: {
      marginTop: 16,
      paddingTop: 16,
      borderTopWidth: 2,
      borderTopColor: theme.colors.primary200,
      alignItems: 'center',
    },
  });

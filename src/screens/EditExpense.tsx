import React, {FC, useMemo} from 'react';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import ScreenContainer from '../components/containers/ScreenContainer';
import {EditExpenseScreenProps} from '../types/navigation/ScreenTypes';
import IconButton from '../components/IU/IconButton';
import {useTheme} from '../hooks/theme/useTheme';
import ITheme from '../types/styles/theme/DefautTheme';
import {Alert, StyleSheet, View} from 'react-native';
import Button from '../components/IU/Button';
import {useAppDispatch} from '../hooks/redux/useAppDispatch';
import {editExpense, removeExpense} from '../redux/slices/expensesSlice';
import {getFormattedDate} from '../utils/date';

const EditExpense: FC<EditExpenseScreenProps> = ({
  route,
  navigation,
}): JSX.Element => {
  const expanseId = route.params.expanseId;
  const dispatch = useAppDispatch();
  const {theme} = useTheme();
  const themedStyles = useMemo(() => styles(theme), [theme]);

  const canselHandler = () => navigation.goBack();
  const createDeleteAlert = () =>
    Alert.alert('', 'Are you sure you want to remove?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          dispatch(removeExpense(expanseId));
          canselHandler();
        },
      },
    ]);

  const deleteExpanseHandler = () => createDeleteAlert();
  const canselExpanseHandler = () => canselHandler();
  const confirmExpanseHandler = () => {
    dispatch(
      editExpense({
        id: expanseId,
        description: '1231231231',
        amount: 123123,
        date: getFormattedDate(new Date()),
      }),
    );
    canselHandler();
  };

  return (
    <ScreenContainer style={themedStyles.container}>
      <View style={themedStyles.buttonContainer}>
        <Button
          title={'Cansel'}
          onPress={canselExpanseHandler}
          mode={'flat'}
          style={themedStyles.button}
        />
        <Button
          title={'Update'}
          onPress={confirmExpanseHandler}
          style={themedStyles.button}
        />
      </View>
      <View style={themedStyles.deleteContainer}>
        <IconButton
          color={theme.colors.error500}
          size={36}
          iconName={'trash'}
          onPress={deleteExpanseHandler}
        />
      </View>
    </ScreenContainer>
  );
};

export default EditExpense;

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
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      minWidth: 120,
      marginHorizontal: 8,
    },
  });

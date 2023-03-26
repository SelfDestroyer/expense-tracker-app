import React, {FC} from 'react';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import ScreenContainer from '../components/containers/ScreenContainer';
import Button from '../components/IU/Button';
import {StyleSheet, View} from 'react-native';
import {useAppDispatch} from '../hooks/redux/useAppDispatch';
import {AddExpensesScreenProps} from '../types/navigation/ScreenTypes';
import {addExpense} from '../redux/slices/expensesSlice';
import {getFormattedDate} from '../utils/date';

const AddExpense: FC<AddExpensesScreenProps> = ({navigation}): JSX.Element => {
  const dispatch = useAppDispatch();
  const canselHandler = () => navigation.goBack();

  return (
    <ScreenContainer>
      <View style={styles.buttonContainer}>
        <Button
          title={'Cansel'}
          onPress={canselHandler}
          mode={'flat'}
          style={styles.button}
        />
        <Button
          title={'Add'}
          onPress={() => {
            dispatch(
              addExpense({
                id: uuid(),
                description: 'test1',
                amount: 1,
                date: getFormattedDate(new Date()),
              }),
            );
          }}
          style={styles.button}
        />
      </View>
    </ScreenContainer>
  );
};

export default AddExpense;

const styles = StyleSheet.create({
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

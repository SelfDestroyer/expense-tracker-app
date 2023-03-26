import React, {FC, useMemo, useState} from 'react';
import {Alert, StyleSheet, Text, TextInputProps, View} from 'react-native';
import CustomInput from '../IU/CustomInput';
import {useTheme} from '../../hooks/theme/useTheme';
import ITheme from '../../types/styles/theme/DefautTheme';
import ThemeFont from '../../types/styles/theme/ThemeFont';
import IExpense from '../../models/IExpense';
import CustomButton from '../IU/CustomButton';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {isValidDateFormat} from '../../utils/date';

type ExpenseFormProps = {
  readonly buttonLabel: string;
  readonly onCansel: () => void;
  readonly onSubmit: (expense: IExpense) => void;
  readonly defaultValues?: IExpense;
};

const ExpenseForm: FC<ExpenseFormProps> = ({
  buttonLabel,
  onCansel,
  onSubmit,
  defaultValues,
}): JSX.Element => {
  const [inputValues, setInputValues] = useState<
    Omit<IExpense, 'id' | 'amount'> & {amount: string}
  >({
    date: defaultValues?.date || '',
    description: defaultValues?.description || '',
    amount: defaultValues?.amount.toString() || '',
  });

  const {theme} = useTheme();
  const themedStyles = useMemo(() => styles(theme), [theme]);

  const inputChangeHandler = (inputIdentifier: string, value: string) => {
    setInputValues(prevState => ({
      ...prevState,
      [inputIdentifier]: value,
    }));
  };

  const amountTextInputConfig: TextInputProps = {
    keyboardType: 'decimal-pad',
    onChangeText: inputChangeHandler.bind(this, 'amount'),
    value: inputValues.amount,
  };

  const dateTextInputConfig: TextInputProps = {
    placeholder: 'YYYY-MM-DD',
    placeholderTextColor: theme.colors.gray500,
    maxLength: 10,
    onChangeText: inputChangeHandler.bind(this, 'date'),
    value: inputValues.date,
  };

  const descriptionTextInputConfig: TextInputProps = {
    multiline: true,
    onChangeText: inputChangeHandler.bind(this, 'description'),
    value: inputValues.description,
  };

  const submitHandler = () => {
    const submitData: IExpense = {
      id: defaultValues?.id || uuidv4(),
      date: inputValues.date,
      description: inputValues.description,
      amount: +inputValues.amount,
    };

    const amountIsValid = !isNaN(submitData.amount) && submitData.amount > 0;
    const dateIsValid = isValidDateFormat(submitData.date);
    const descriptionIsValid = submitData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert('Invalid input', 'Please check your input values');
      return;
    }
    onSubmit(submitData);
  };

  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.title}>Your Expense</Text>
      <View style={themedStyles.inputsRow}>
        <CustomInput
          label={'Amount'}
          textInputConfig={amountTextInputConfig}
          style={themedStyles.inputRow}
        />
        <CustomInput
          label={'Date'}
          textInputConfig={dateTextInputConfig}
          style={themedStyles.inputRow}
        />
      </View>
      <CustomInput
        label={'Description'}
        textInputConfig={descriptionTextInputConfig}
      />

      <View style={themedStyles.buttonContainer}>
        <CustomButton
          title={'Cansel'}
          onPress={onCansel}
          mode={'flat'}
          style={themedStyles.button}
        />
        <CustomButton
          title={buttonLabel}
          onPress={submitHandler}
          style={themedStyles.button}
        />
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      marginTop: 80,
    },
    inputsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    inputRow: {
      flex: 1,
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
      fontFamily: ThemeFont.SourceSansProBold,
      color: theme.colors.white,
      textAlign: 'center',
      marginVertical: 24,
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

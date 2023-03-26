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
  const [inputValues, setInputValues] = useState({
    date: {value: defaultValues?.date || '', isValid: true},
    description: {
      value: defaultValues?.description || '',
      isValid: true,
    },
    amount: {
      value: defaultValues?.amount.toString() || '',
      isValid: true,
    },
  });

  const {theme} = useTheme();
  const themedStyles = useMemo(() => styles(theme), [theme]);

  const inputChangeHandler = (inputIdentifier: string, value: string) => {
    setInputValues(prevState => ({
      ...prevState,
      [inputIdentifier]: {
        value: value,
        isValid: value.length === 0 ? false : true,
      },
    }));
  };

  const amountTextInputConfig: TextInputProps = {
    keyboardType: 'decimal-pad',
    onChangeText: inputChangeHandler.bind(this, 'amount'),
    value: inputValues.amount.value,
  };

  const dateTextInputConfig: TextInputProps = {
    placeholder: 'YYYY-MM-DD',
    placeholderTextColor: theme.colors.gray500,
    maxLength: 10,
    onChangeText: inputChangeHandler.bind(this, 'date'),
    value: inputValues.date.value,
  };

  const descriptionTextInputConfig: TextInputProps = {
    multiline: true,
    onChangeText: inputChangeHandler.bind(this, 'description'),
    value: inputValues.description.value,
  };

  const submitHandler = () => {
    const submitData: IExpense = {
      id: defaultValues?.id || uuidv4(),
      date: inputValues.date.value,
      description: inputValues.description.value,
      amount: +inputValues.amount.value,
    };

    const amountIsValid = !isNaN(submitData.amount) && submitData.amount > 0;
    const dateIsValid = isValidDateFormat(submitData.date);
    const descriptionIsValid = submitData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputValues(prevState => ({
        date: {
          value: prevState.date.value,
          isValid: dateIsValid,
        },
        description: {
          value: prevState.description.value,
          isValid: descriptionIsValid,
        },
        amount: {
          value: prevState.amount.value,
          isValid: amountIsValid,
        },
      }));
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
          isValid={inputValues.amount.isValid}
        />
        <CustomInput
          label={'Date'}
          textInputConfig={dateTextInputConfig}
          style={themedStyles.inputRow}
          isValid={inputValues.date.isValid}
        />
      </View>
      <CustomInput
        label={'Description'}
        textInputConfig={descriptionTextInputConfig}
        isValid={inputValues.description.isValid}
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

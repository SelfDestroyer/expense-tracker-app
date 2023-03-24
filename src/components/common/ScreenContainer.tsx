import React, {FC, PropsWithChildren} from 'react';
import {View, StyleSheet} from 'react-native';

const ScreenContainer: FC<PropsWithChildren> = ({children}): JSX.Element => {
  return <View style={styles.container}>{children}</View>;
};

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

import React from 'react';
import MainNavigation from './navigation/MainNavigation';
import {darkTheme} from './styles/themes/darkTheme';
import {ThemeProvider} from './types/styles/theme/styled-components';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={darkTheme}>
      <MainNavigation />
    </ThemeProvider>
  );
}

export default App;

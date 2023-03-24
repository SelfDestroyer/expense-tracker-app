import React from 'react';
import {Provider} from 'react-redux';
import store, {persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import ThemeProvider from './contexts/theme/ThemeProvider';
import {lightTheme} from './styles/themes/lightTheme';
import {darkTheme} from './styles/themes/darkTheme';
import MainNavigation from './navigation/MainNavigation';
import CustomStatusBar from './components/IU/CustomStatusBar';

const App = (): JSX.Element => (
  <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CustomStatusBar />
        <MainNavigation />
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

export default App;

import * as styledComponents from 'styled-components/native';
import ITheme from './DefautTheme';

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as unknown as styledComponents.ReactNativeThemedStyledComponentsModule<ITheme>;

export {css, ThemeProvider};
export default styled;

import {MainProps} from './pages/index';

export function CapitalizedEnhancePropsFunction(_defaultProps: MainProps): Partial<MainProps> {
  return {
    // Change this and see that nothing will happen
    title: 'Title overriden by `CapitalizedEnhancePropsFunction` function',
  };
}

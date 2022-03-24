import {MainProps} from './pages/index';

export function lowercasedEnhancePropsFunction(_defaultProps: MainProps): Partial<MainProps> {
  return {
    // Change this and see that HMR is working correctly
    description: 'Description overriden by `lowercasedEnhancePropsFunction` function.',
  };
}

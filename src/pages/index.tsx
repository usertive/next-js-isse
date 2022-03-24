import {CapitalizedEnhancePropsFunction} from '../CapitalizedEnhancePropsFunction';
import {lowercasedEnhancePropsFunction} from '../lowercasedEnhancePropsFunction';

export interface MainProps {
  title: string;
  description: string;
}

const defaultProps: MainProps = {
  title: 'Default title',
  description: 'Default description'
};

function Main(props: MainProps) {
  props = {
    ...defaultProps,
    ...CapitalizedEnhancePropsFunction(defaultProps),
    ...lowercasedEnhancePropsFunction(defaultProps),
    ...props
  };

  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </>
  );
}

export default Main;

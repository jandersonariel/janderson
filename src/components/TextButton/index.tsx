import {
  TxButton
} from './styles';

interface TxButtonProp { 
  onClick: () => void;
  name: string;
}

export const TextButton = (prop: TxButtonProp) =>  {
  return (
    <TxButton onClick={prop.onClick}>
      {prop.name}
    </TxButton>
  )
}
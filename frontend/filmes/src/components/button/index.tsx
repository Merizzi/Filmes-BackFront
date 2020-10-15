import React, {SyntheticEvent} from 'react';
import '../../assets/global.css';
import './style.css';

interface Props {
  onClick: () => void;
  text: string;
}

export default function Button(props: Props) {
  const {onClick, text} = props

  const onclick = (event: SyntheticEvent) => {
    event.preventDefault();
    onClick();
  }

  return (
  <button onClick={onclick}>{text}</button>
  )
}







// const Button: React.FunctionComponent<ButtonProps> = (props) => {
//   return (
//     <div className="button">
//         <button>{props.value}</button>
//     </div>
//   );
// }

// export default Button;
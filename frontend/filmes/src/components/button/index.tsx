import React, {SyntheticEvent} from 'react';
import '../../assets/global.css';
import './style.css';



interface ButtonProps {
  value: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({value}) => {
  return (
    <div className="btn">
      <input className="button" type="submit" value={value}/>
    </div>
  );
}

export default Button;


// interface Props {
//   onClick: () => void;
//   text: string;
// }

// export default function Button(props: Props) {
//   const {onClick, text} = props

//   const onclick = (event: SyntheticEvent) => {
//     event.preventDefault();
//     onClick();
//   }

//   return (
//   <button onClick={onclick}>{text}</button>
//   )
// }


// const Button: React.FunctionComponent<ButtonProps> = (props) => {
//   return (
//     <div className="button">
//         <button>{props.value}</button>
//     </div>
//   );
// }

// export default Button;
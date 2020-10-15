import React, {InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    name?:  string;
}

const Input:React.FC<InputProps> = ({label, name, ...rest}) =>{
    return (
        <div>
            <label htmlFor={name} className="label">{label}</label>
            <br/>
            <input type="text" id={name}{...rest} className="input"/>
        </div>
    );
}

export default Input;


// export default (props: Props) => {
//     const {label, name} = props;

//     return(
//         <div>
//             <label htmlFor="name"></label>
//         </div>
//     );
// }

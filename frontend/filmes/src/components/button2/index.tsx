import React, {SyntheticEvent} from 'react';
import '../../assets/global.css';
import './style.css';


interface Button2Props {
    value: string;
    image: string;
    altImage: string;
    form: string;
  }
  
  const Button2: React.FunctionComponent<Button2Props> = ({value, image, altImage, form}) => {
    return (
      <div className="btn2">       
                <button className="button2" type="submit" form={form} >
                  {value}
                  <img src={image} alt={altImage}/>
                </button>
      </div>
    );
  }
  
  export default Button2;
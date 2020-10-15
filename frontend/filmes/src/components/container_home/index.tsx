import '../container_home/style.css';
import React from 'react';


export default function Container(props : any){
    return(
        <div className={"container"}>
            {props.children}
        </div>
    )

}

// interface ContainerProps {

// }

// const Container:React.FC<ContainerProps> = ({props: any}) =>{
//     return (
//         <div className={"container"}>
//             {props.children}
//         </div>
//     );
// }
// export default Container;
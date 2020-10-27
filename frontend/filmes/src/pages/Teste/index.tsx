import React from 'react';

import Modal from '../../components/modal';
import Nav from '../../components/nav';
import '../../assets/global.css';
import '../Teste/style.css';
import Button2 from '../../components/button2';
import cinema from './../../assets/images/cinema.png';

function Teste() {


    return (
        <div className="Teste">
            <Button2 value="Entrar com    |"
                form={"teste"}
                altImage={"Cinema"}
                image={cinema}
            />

        </div>
    );
}

export default Teste;

// const [isModalOpen, setModalState] = React.useState(false);

// const toggleModal = () => setModalState(!isModalOpen);
// <button className="app_btn" onClick={toggleModal}>
                        // </button>
                        // <Modal
                        // title={"Modal"}
                        //     isOpen={isModalOpen}
                        //     onClose={toggleModal}
                        // ></Modal>
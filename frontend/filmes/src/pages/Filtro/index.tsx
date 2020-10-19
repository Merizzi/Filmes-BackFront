import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import '../../assets/global.css';
import '../Filtro/style.css';


function Filtro() {
    return (
        <div className="Filtro">
            <Header description="Conheça sua Coletanea" />
            <main>
                <div id="divConteudo">
                    <table id="tabela">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Descrição</th>
                                <th>Grupo</th>
                            </tr>
                            <tr>
                                <th><input type="text" id="txtColuna1" /></th>
                                <th><input type="text" id="txtColuna2" /></th>
                                <th><input type="text" id="txtColuna3" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>001.01-A</td>
                                <td>Feijão preto</td>
                                <td>Cerais</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Filtro;
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
                    <table>
                        <th>
                            <td> </td>
                        </th>

                    </table>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Filtro;
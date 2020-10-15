import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardHome from './../../components/card_home/index';
import cinema from './../../assets/images/cinema.png';
import choraAgoraRiDepois from './../../assets/images/theater.png';

import '../../assets/global.css';
import '../Home/style.css';

function Home() {
  return (
    <div className="Home">
      <Header description="Conheça sua Coletanea"/>
      <div className="centro">
        <div className="home">
             <div className="home-top">
               <div className="home-text-top">
               <h1>Monte sua coletânea de filmes...</h1>
               </div>
               <div className="home-text-bot">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus scelerisque felis.</h2>
                    <p>Lorem ipsum semper morbi cras vivamus ornare viverra conubia 
                      vel donec cursus, proin volutpat venenatis varius cursus proin 
                      ac quam consequat egestas. felis suscipit fames tortor convallis 
                      maecenas erat tellus quam lobortis rhoncus adipiscing ad est, eros 
                      ante vulputate libero semper et orci fusce inceptos mi curabitur. 
                      fringilla conubia fames vitae faucibus pharetra aenean.</p>
               </div>
             </div>
             <div className="home-bot">
                <CardHome
                  altImage={"Filme"}
                  image={cinema}
                  title={"Filmes"}
                  text={"Lorem ipsum semper morbi cras vivamus ornare viverra conubia vel donec cursus, proin volutpat venenatis varius cursus proin ac quam consequat egestas. felis suscipit fames tortor convallis maecenas erat tellus quam lobortis rhoncus adipiscing ad est, eros ante vulputate libero semper et orci fusce inceptos mi curabitur. fringilla conubia fames vitae faucibus pharetr"}
               />
              
                <CardHome
                            altImage={"Chora agora ri depois"}
                            image={choraAgoraRiDepois}
                            title={"Categoria"}
                            text={"Lorem ipsum semper morbi cras vivamus ornare viverra conubia vel donec cursus, proin volutpat venenatis varius cursus proin ac quam consequat egestas. felis suscipit fames tortor convallis maecenas erat tellus quam lobortis rhoncus adipiscing ad est, eros ante vulputate libero semper et orci fusce inceptos mi curabitur. fringilla conubia fames vitae faucibus pharetr"}
                />
               
             </div>             
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
import "./Main.scss";
import React from "react";
import andilci from "../audio/charlie_andilci.mp3";
import chlastat from "../audio/charlie_chlastat.mp3";
import rozumim from "../audio/charlie_rozumim.mp3";
import hlava from "../audio/alan_hlava.mp3";
import proktolog from "../audio/alan_proktolog.mp3";
import tekutiny from "../audio/alan_tekutiny.mp3";
import kondom from "../audio/berta_kondom.mp3";
import opera from "../audio/berta_opera.mp3";
import vysavac from "../audio/berta_vysavac.mp3";
import ukol from "../audio/jake_ukol.mp3";
import cigaretka from "../audio/evelyn_cigaretka.mp3";
import herb from "../audio/herb.mp3";

class Main extends React.Component {
  playAndilci = () => {
    new Audio(andilci).play();
  };

  playChlastat = () => {
    new Audio(chlastat).play();
  };

  playRozumim = () => {
    new Audio(rozumim).play();
  };

  playHlava = () => {
    new Audio(hlava).play();
  };

  playProktolog = () => {
    new Audio(proktolog).play();
  };

  playTekutiny = () => {
    new Audio(tekutiny).play();
  };

  playKondom = () => {
    new Audio(kondom).play();
  };

  playOpera = () => {
    new Audio(opera).play();
  };

  playVysavac = () => {
    new Audio(vysavac).play();
  };

  playUkol = () => {
    new Audio(ukol).play();
  };

  playCigaretka = () => {
    new Audio(cigaretka).play();
  };

  playHerb = () => {
    new Audio(herb).play();
  };

  render() {
    return (
      <body>
        <h1>Dva půl chlapa</h1>

        <section class="basic-grid">
          <div class="card" onClick={this.playAndilci}>
            <h2>andílci</h2>
          </div>
          <div class="card" onClick={this.playChlastat}>
            <h2>chlastat</h2>
          </div>
          <div class="card" onClick={this.playRozumim}>
            <h2>rozumím</h2>
          </div>
          <div class="card" onClick={this.playHlava}>
            <h2>hlava</h2>
          </div>
          <div class="card" onClick={this.playProktolog}>
            <h2>proktolog</h2>
          </div>
          <div class="card" onClick={this.playTekutiny}>
            <h2>tekutiny</h2>
          </div>
          <div class="card" onClick={this.playKondom}>
            <h2>opera</h2>
          </div>
          <div class="card" onClick={this.playOpera}>
            <h2>vysavač</h2>
          </div>
          <div class="card" onClick={this.playVysavac}>
            <h2>kondom</h2>
          </div>
          <div class="card" onClick={this.playUkol}>
            <h2>úkol</h2>
          </div>
          <div class="card" onClick={this.playCigaretka}>
            <h2>cigaretka</h2>
          </div>
          <div class="card" onClick={this.playHerb}>
            <h2>peklo</h2>
          </div>
        </section>

        <section>
          <div class="card cardN">
            <h2>náhodná hláška</h2>
          </div>
        </section>
      </body>
    );
  }
}

export default Main;

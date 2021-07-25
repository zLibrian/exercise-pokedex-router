import React, { Component } from 'react';

class AboutPokedex extends Component {
  render() {
    return (
      <section className="aboutPokedex">
        <p>
         The Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of t  he various Pokémon of the world.
        </p>
        <p>
          In order to accomplish Professor Oak's goal of a complete Pokémon database, the Pokédex is designed to find and record data on   each Pokémon the Trainer meets.
        </p>
        <p>
          Pokémon are added to the Pokédex simply by encountering them in battle or, sometimes, by seeing a picture of the Pokémon.
        </p>
        <p>
          However, detailed entries are not recorded until the player catches the Pokémon, receives it as a prize/gift or acquires it in a trade.
        </p>
        <img src="https://pbs.twimg.com/media/EewwT0sXgAAY-Bo.png" alt="pokedex"/>
      </section>
    );
  }
}

export default AboutPokedex;
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SideBar from "./components/SideBar"
import Home from "./components/Home"
import Pokemons from "./components/Pokemons"
import PokemonDetails from "./components/PokemonDetails"
import Abilities from "./components/Abilities"
import AbilityDetails from "./components/AbilityDetails"
import Types from "./components/Types"
import TypeDetails from "./components/TypeDetails"
import FavoritePokemons from "./components/FavoritePokemons"
import { FavoritesProvider } from './components/favorites';

export function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div className="App">
          <SideBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/pokemon" exact component={Pokemons} />
            <Route path="/ability" exact component={Abilities} />
            <Route path="/type" exact component={Types} />
            <Route path="/favorite_pokemons" component={FavoritePokemons} />
            <Route path="/pokemon/:id" component={PokemonDetails} />
            <Route path="/ability/:id" component={AbilityDetails} />
            <Route path="/type/:id" component={TypeDetails} />
          </Switch>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

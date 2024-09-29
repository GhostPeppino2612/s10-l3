import { Component } from "react";
import StarWars from "./StarWars";
import Marvel from "./Marvel";
import LordOfRings from "./LordOfRings";

class Main extends Component {
  render() {
    return (
      <>
        <StarWars />
        <Marvel />
        <LordOfRings />
      </>
    );
  }
}

export default Main;

import { Component } from "react";
import CardListMonsters from "./card-list-monsters.component";

import './card-list.style.css';

class CardList extends Component {

    render() {
        const { monsters } = this.props;

        return (
            <CardListMonsters showMonsters={monsters} />
        )
    }
}

export default CardList;
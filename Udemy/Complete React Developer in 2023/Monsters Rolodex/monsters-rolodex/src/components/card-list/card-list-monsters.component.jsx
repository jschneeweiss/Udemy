import { Component } from "react";

import './card-list.style.css';

class CardListMonsters extends Component {

    render() {
        const { showMonsters } = this.props;
        console.log('props', this.props);        

        return (
            <div className='card-list'>
                {showMonsters.map((showMonster) => {
                    const { name, email, id } = showMonster;
                    return (
                        <div className='card-container' key={id}>
                            <img
                                alt={`monster ${name}`}
                                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                            />
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default CardListMonsters;
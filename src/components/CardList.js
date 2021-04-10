import React from 'react';
import CharacterCard from './CharacterCard';
import '../assets/css/CardList.css';


const CardList = ({kanaList}) => {

    const renderedCardList = kanaList.map((kana) => {
        return (<CharacterCard key={kana.id} kana={kana}/>);
    })
    return (<div className="card-list">{renderedCardList}</div>);
};

export default CardList;
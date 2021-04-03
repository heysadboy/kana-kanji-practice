import React from 'react';
import CharacterCard from './CharacterCard';

const CardList = ({kanaList}) => {

    const renderedCardList = kanaList.map((kana) => {
        return (<CharacterCard key={kana.id} kana={kana}/>);
    })
    return (<div>{renderedCardList}</div>);
};

export default CardList;
import React from 'react';
import CardList from './CardList';
import hiraganaData from '../assets/data/hiragana.json';
import katakanaData from '../assets/data/katakana.json';

const App = () => {
    const hiragana = hiraganaData;
    const katakana = katakanaData;
    return (
        <div className="ui container" style={{ paddingTop: "50px" }}><CardList kanaList={hiragana} /></div>
    );
}

export default App;
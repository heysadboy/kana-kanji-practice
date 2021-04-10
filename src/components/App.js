import React from 'react';
import CardList from './CardList';
import hiraganaData from '../assets/data/hiragana.json';
import katakanaData from '../assets/data/katakana.json';
import '../assets/css/App.css';


const App = () => {
    const hiragana = hiraganaData;
    const katakana = katakanaData;
    return (
        <div className="ui container">
            <CardList kanaList={hiragana} />
        </div>
    );
}

export default App;
import { useState, React } from 'react';
import CardList from './CardList';
import hiraganaData from '../assets/data/hiragana.json';
import katakanaData from '../assets/data/katakana.json';
import '../assets/css/App.css';

const App = () => {
    const hiragana = hiraganaData;
    const katakana = katakanaData;
    const [kana, setKana] = useState(hiragana);

    const toggleKana = (e) => {
        if (e.target.innerText === "Hiragana") {
            setKana(hiragana);
        }
        else if (e.target.innerText === "Katakana") {
            setKana(katakana);
        }

    };

    return (
        <div className="ui container">
            <div className="ui grid">
                <div className="ten wide column">
                    <h1 className="ui header">
                        <i className="pencil alternate icon"></i>
                        <div className="content">Kana Practice</div>
                    </h1>
                </div>
                <div className="six wide column">
                    <button className="ui blue button" onClick={toggleKana}>Hiragana</button>
                    <button className="ui blue button" onClick={toggleKana}>Katakana</button>
                </div>
            </div>
            <CardList kanaList={kana} />
        </div>
    );
}

export default App;
import { useState } from 'react';
import '../assets/css/CharacterCard.css';

const CharacterCard = ({ kana }) => {
    const [isCorrect, setIsCorrect] = useState(undefined)

    const checkKana = (e) => {
        if (e.target.value.toLowerCase() === "") {
            setIsCorrect("");
        }
        else if (e.target.value.toLowerCase() === kana.en) {
            setIsCorrect("green");
        }
        else {
            setIsCorrect("red");
        }
    };

    return (
        <div className={`ui ${isCorrect} card`}>
            <div className="content">
                <div className="character">{kana.jp}</div>
            </div>
            <div className="extra content">
                <div className="ui huge transparent input">
                    <input type="text" maxLength="3" onChange={checkKana} />
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;
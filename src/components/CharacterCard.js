import '../assets/css/CharacterCard.css';

const CharacterCard = ({kana}) => {
    return (
        <div className="ui card">
            <div className="content">
                <div className="character">{kana.jp}</div>
            </div>
            <div className="extra content">
                <div className="ui huge transparent input">
                    <input type="text" />
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;
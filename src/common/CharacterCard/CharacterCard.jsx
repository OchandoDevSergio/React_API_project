

import './CharacterCard.css';

export const CharacterCard = ({key, name, picture, status}) => {

    return (
        <div className='cardDesign'>
            {name}
            <img className='picture' src={picture} />
            {status}
            </div>
    )
}
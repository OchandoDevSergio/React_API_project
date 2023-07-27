

import './CharacterCard.css';

export const CharacterCard = ({id, name, picture, status}) => {

    return (
        <div className='cardDesign'>
            {id}
            {name}
            <img className='picture' src={picture} />
            {status}
            </div>
    )
}
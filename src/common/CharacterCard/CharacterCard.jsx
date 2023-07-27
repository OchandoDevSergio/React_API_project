

import './CharacterCard.css';

export const CharacterCard = ({id, name, picture, status, person}) => {

    return (
        <div className='cardDesign' onClick={()=>console.log(person)}>
            {id}
            {name}
            <img className='picture' src={picture} alt={id}/>
            {status}
            </div>
    )
}
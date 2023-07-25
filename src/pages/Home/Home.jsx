
import {useEffect, useState} from 'react';
import { CharacterCard } from '../../common/CharacterCard/CharacterCard';
import { bringCharacters } from '../../services/apiCalls';
import './Home.css';

export const Home = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(()=>{

        if(characters.length === 0){
            //Al no haber ningún personaje aún de la API de rick and morty, lo más
            //correcto sería traerlos...
          bringCharacters()
                .then(
                    resultado => {
                        setCharacters(resultado.data.results);
                    }
                )
                .catch(error => console.log(error));
        } else {
            console.log(characters);
        }
    },[characters]);

    return (
        <>
            {characters.length > 0 

                ? (<div className='homeDesign'>
                     <div className='rowDesign'>
                     {characters.map(
                        person => {
                            if (person.id <268)
                            return (
                                <CharacterCard
                                
                                    key={person.id}
                                    name={person.name}
                                    picture={person.image}
                                    status={person.status}
                                    
                                />
                            )
                        }
                    )}
                     </div>
                     <div className='rowDesign'>
                     {characters.map(
                        person => {
                            if ((person.id >267)&&(person.id < 275))
                            return (
                                <CharacterCard
                                
                                    key={person.id}
                                    name={person.name}
                                    picture={person.image}
                                    status={person.status}
                                    
                                />
                            )
                        }
                    )}
                     </div>
                     <div className='rowDesign'>
                     {characters.map(
                        person => {
                            if (person.id >274)
                            return (
                                <CharacterCard
                                
                                    key={person.id}
                                    name={person.name}
                                    picture={person.image}
                                    status={person.status}
                                    
                                />
                            )
                        }
                    )}
                     </div>
                </div>

                )

                : (<div>en camino</div>)
            
            }
        </>
    )
}
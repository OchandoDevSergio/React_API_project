
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

                     {characters.map(
                        person => {
                            return (
                                <CharacterCard
                                
                                    // Key es siempre una palabra reservada en React
                                    key={person.id}
                                    ////////////////////////////////
                                    id={person.id}
                                    name={person.name}
                                    picture={person.image}
                                    status={person.status}
                                    person={person}
                                />
                            )
                        }
                    )}

                </div>

                )

                : (<div>en camino</div>)
            
            }
        </>
    )
}
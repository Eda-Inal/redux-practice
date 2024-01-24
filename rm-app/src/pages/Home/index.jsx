import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../../redux/charactersSlice';
function Home() {
    const characters = useSelector((state) => state.characters.items);
    const dispatch = useDispatch();
   
    useEffect(() =>{
dispatch(fetchCharacters());
    },[dispatch])
  return (
    <div>
     <h1>Characters</h1>
     {
        characters.map((character => (
            <div key={character.id}>
                <img alt={character.name} src= {character.image}/>
            </div>
        )))
     }
    </div>
  )
}

export default Home

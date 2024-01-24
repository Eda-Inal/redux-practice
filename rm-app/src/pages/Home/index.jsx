import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../../redux/charactersSlice';
import { Link } from "react-router-dom";
import "./styles.css"
import Masonry from 'react-masonry-css'
function Home() {
    const characters = useSelector((state) => state.characters.items);
    const dispatch = useDispatch();
   
    useEffect(() =>{
dispatch(fetchCharacters());
    },[dispatch])
  return (
    <div>
     <Masonry
  breakpointCols={4}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
 
 {
        characters.map((character => (
            <div key={character.id}>
                <Link to ={`/char/${character.id}`}>
                <img alt={character.name} src= {character.image} className='character'/>
                <div className='char_name'>{character.name}</div>
                </Link>
            </div>
        )))
     }
</Masonry>
    
    </div>
  )
}

export default Home

import React from 'react';
import './character.css'

// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити (описати) 6 персонажів з цьго апі.
const Character = (props) => {
    const {id,name,status,species,gender,image} = props
    return (
        <div className={'item'}>
            <h2> {id} {name} </h2>
            <p> {status} {species} {gender}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Character;
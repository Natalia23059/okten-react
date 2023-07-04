import React from 'react';
import './simpson.css';

// 1. Описати всю сім'ю сімпсонів (5 персонажів). Характеристики : ім‘я приізвище вік стать, фотографія (посиланням на зовнішній ресурс,тобто не локальна фотка) Інфу брати звідки завгодно,хоч придумайте. Але для цього є сайт який ви юзали на жс
const Simpson = ({name, surname, age, gender, photo}) => {
    return (
        <div className={'person'}>
            <h2>{name} {surname} - {age}</h2>
            <h2>{gender}</h2>
            <img src={photo} alt={name}/>
        </div>
    );
};

export default Simpson;
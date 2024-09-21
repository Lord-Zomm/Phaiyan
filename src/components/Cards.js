import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Oh Check Karo پہیان!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/dev.jpg'
              text='You want more money? Yes. Yes.'
              label='CCPO Fayyaz Ahmed Dev'
              path='/services'
            />
            <CardItem
              src='images/osman.jpg'
              text='Ayyy, mubarak ho!'
              label='Kurulus Osman'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/campos.jpg'
              text='MR.CHEEMA YOU CANT STAND THERE! Oh its your birthday? Happy birthday! Stay low mate.'
              label='Campos'
              path='/services'
            />
            <CardItem
              src='images/baheem3.png'
              text='Oh پہیان birthday is the nira fraud. Please buy yourself the gift I does not haves the money.'
              label='Baheem'
              path='/products'
            />
            <CardItem
              src='images/kyle.png'
              text='Oh Gallrazz Happy Birthday your son is brutal! He ruined my life!'
              label='داڑی الا'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

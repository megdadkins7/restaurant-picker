import React from 'react';
import styled from 'styled-components'

const StyledRestaurantPicker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0 10px 0;
  text-align: center;
  .RestaurantName {
    font-size: 40px;
    font-weight: 600;
    text-transform: uppercase;
    color: #283044;
    margin-bottom: 10px;
  }
  .EatButton {
    margin: 10px 0;
    padding: 15px 70px;
    cursor: pointer;
    outline: none;
    border: 4px solid #F15656;
    border-radius: 60px;
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
    background: #F15656;
    color: #fff;
  }
  .EatButton:hover {
    background: #F36868;
  }
`;

export default function RestaurantPicker({ getRestaurant, restaurant }) {
  return (
    <StyledRestaurantPicker>
      <div className='RestaurantName'>You're going to {restaurant} </div>
      <button className='EatButton' onClick={getRestaurant}>Eat It!</button>
    </StyledRestaurantPicker>
  )
}
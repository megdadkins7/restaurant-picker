import React from 'react';
import styled from 'styled-components'

const StyledRestaurantPicker = styled.div`
  margin: 10px;
`;

export default function RestaurantPicker({ getRestaurant, restaurant }) {
  return (
    <StyledRestaurantPicker>
      <div>You're going to {restaurant} </div>
      <button onClick={getRestaurant}>Eat It!</button>
    </StyledRestaurantPicker>
  )
}
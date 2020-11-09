import React from 'react'
import styled from 'styled-components'

const StyledRestaurantView = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StyledRestaurantList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
  width: 200px;
  height: 200px;
  margin-top: 30px;
  margin-right: 10px;
  .Restaurant {
    margin-top: 5px;
  }
`;

export default function RestaurantList({ restaurants }) {
  return (
    <StyledRestaurantView>
      {restaurants.map(restaurant => (
        <StyledRestaurantList key={restaurant.id}>
        <div className='Restaurant'>{restaurant.name}</div>
        <div className='Restaurant'>{restaurant.type}</div>
        </StyledRestaurantList>
      ))}
    </StyledRestaurantView>
  )
}
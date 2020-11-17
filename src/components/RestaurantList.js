import React from 'react'
import styled from 'styled-components'

//helper
import { transformPrice } from '../data'

const StyledRestaurantView = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledRestaurantList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: ${prop => prop.visited === 'true' ? '1px solid #283044' : '2px solid #F15656'};
  width: 200px;
  height: 200px;
  margin-top: 20px;
  margin-right: 10px;
  color: ${prop => prop.visited ? '#283044' : '#F15656'};
  .RestaurantName {
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase
  }
  .RestaurantType {
    margin-top: 5px;
    text-transform: uppercase;
  }
`;

export default function RestaurantList({ visibleRestaurants }) {

  return (
    <StyledRestaurantView>
      {visibleRestaurants.map(restaurant => (
        <StyledRestaurantList visited={restaurant.visited} key={restaurant.id}>
        <div className='RestaurantName'>{restaurant.name}</div>
        <div className='RestaurantType'>{restaurant.type}</div>
        <div className='RestaurantType'>{restaurant.location}</div>
        <div className='RestaurantType'>{restaurant.alcohol}</div>
        <div className='RestaurantType'>{transformPrice(restaurant.price)}</div>
        </StyledRestaurantList>
      ))}
    </StyledRestaurantView>
  )
}
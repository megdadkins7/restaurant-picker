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
  text-align: center;
  width: 200px;
  height: 200px;
  margin-top: 20px;
  margin-right: 10px;
  border: ${props => props.visited === 'true' ? '1px solid #283044' : '2px solid #F15656'};
  .RestaurantName {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    color: ${props => props.visited === 'true' ? '#283044' : '#F15656'};
  }
  .RestaurantType {
    margin: 5px;
    text-transform: uppercase;
    color: #283044;
  }
  .highlight {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    box-shadow: 0px 0px 5px 5px #6476A6;
  }
`;

const StyledTags = styled.div`
  display: flex;
  margin: 10px;
  font-size: 12px;
`;

const StyledLocation =styled.div`
  margin: 5px 10px 0 0;
  padding: 5px;
  text-transform: uppercase;
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  border-radius: 13px;
;`

const StyledAlcohol = styled.div`
  margin-top: 5px;
  padding: 5px 8px;
  text-transform: uppercase;
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  border-radius: 13px;
`;

export default function RestaurantList({ visibleRestaurants, selectedRestaurant }) {
  return (
    <StyledRestaurantView>
      {visibleRestaurants.map(restaurant => (
        <StyledRestaurantList visited={restaurant.visited} key={restaurant.id}>
          <div className={selectedRestaurant === restaurant.name ? 'highlight' : ''}>
          <div className='RestaurantName' visited={restaurant.visited}>{restaurant.name}</div>
          <div className='RestaurantType'>{restaurant.type}</div>
          <div className='RestaurantType'>{transformPrice(restaurant.price)}</div>
          <StyledTags>
            <StyledLocation color={restaurant.locationColor}>{restaurant.location}</StyledLocation>
            <StyledAlcohol color={restaurant.alcoholColor}>{restaurant.alcohol}</StyledAlcohol>
          </StyledTags>
          </div>
        </StyledRestaurantList>
      ))}
    </StyledRestaurantView>
  )
}

/*
if selected === visibleRestaurants.indexOf(selected)
box-shadow: 0px 0px 5px 5px #6476A6;
*/
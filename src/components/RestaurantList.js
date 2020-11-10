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
  border: 1px solid #283044;
  width: 200px;
  height: 200px;
  margin-top: 30px;
  margin-right: 10px;
  color: #283044;
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

export default function RestaurantList({ restaurants, filters }) {
  const getActiveFilterCount = filters => {
    return Object.keys(filters).reduce((total, filterKey) => {
      return filters[filterKey].length > 0 ? total + 1 : total;
    }, 0)
  }

  const getFilteredList = (list, filters) => {
    const activeFilterCount = getActiveFilterCount(filters);
    if(activeFilterCount === 0) {
      return restaurants
    }
    return list.filter(restaurant => {
      const matchCount = Object.keys(filters).reduce((total, filterKey) => {
        const haveMatch = filters[filterKey].some(r => restaurant[filterKey] === null ? false : restaurant[filterKey].includes(r));
        if(haveMatch) {
          return total + 1
        } else {
          return total
        }
      }, 0);
      return matchCount === activeFilterCount
    });
  };

  const visibleRestaurants = getFilteredList(restaurants, filters)

  return (
    <StyledRestaurantView>
      {visibleRestaurants.map(restaurant => (
        <StyledRestaurantList key={restaurant.id}>
        <div className='RestaurantName'>{restaurant.name}</div>
        <div className='RestaurantType'>{restaurant.type}</div>
        </StyledRestaurantList>
      ))}
    </StyledRestaurantView>
  )
}
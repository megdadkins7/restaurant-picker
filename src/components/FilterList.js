import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

//data
import { restaurants } from '../data'

//helper
import { transformPrice } from '../data'

const StyledFilterList = styled.div`
 display: grid;
 margin: 10px 40px 0 40px;
 flex-wrap: wrap;
 .TypeContainer {
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   margin: 5px 0;
 }
 .Container {
   display: flex;
   margin: 5px 0;
   justify-content: center;
   align-items: center;
 }
 input {
   margin: 0 10px;
 }
 label {
   text-transform: uppercase;
   color: #283044;
 }
`;

export default function FilterList({ onFiltersChange }) {
  const [typeFilter, setTypeFilter] = useState([]);
  const [locationFilter, setLocationFilter] = useState([]);
  const [alcoholFilter, setAlcoholFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);

  useEffect(() => {
    onFiltersChange({ type: typeFilter, location: locationFilter, alcohol: alcoholFilter, price: priceFilter })
  }, [typeFilter, locationFilter, alcoholFilter, priceFilter])

  const handleOnTypeChange = e => {
    const nextTypeFilter = e.target.value

    setTypeFilter(state => {
      const currentFilterLoc = state.indexOf(nextTypeFilter)
      if(currentFilterLoc === -1) {
        return [...typeFilter, nextTypeFilter]
      } else {
        return [
          ...state.slice(0, currentFilterLoc),
          ...state.slice(currentFilterLoc + 1, state.length)
        ]
      }
    })
  }

  const handleOnLocationChange = e => {
    const nextLocationFilter = e.target.value

    setLocationFilter(state => {
      const currentFilterLoc = state.indexOf(nextLocationFilter)
      if(currentFilterLoc === -1) {
        return [...locationFilter, nextLocationFilter]
      } else {
        return [
          ...state.slice(0, currentFilterLoc),
          ...state.slice(currentFilterLoc + 1, state.length)
        ]
      }
    })
  }

  const handleOnAlcoholChange = e => {
    const nextAlcoholFilter = e.target.value

    setAlcoholFilter(state => {
      const currentFilterLoc = state.indexOf(nextAlcoholFilter)
      if(currentFilterLoc === -1) {
        return [...alcoholFilter, nextAlcoholFilter]
      } else {
        return [
          ...state.slice(0, currentFilterLoc),
          ...state.slice(currentFilterLoc + 1, state.length)
        ]
      }
    })
  }

  const handleOnPriceChange = e => {
    const nextPriceFilter = e.target.value

    setPriceFilter(state => {
      const currentFilterLoc = state.indexOf(nextPriceFilter)
      if(currentFilterLoc === -1) {
        return [...priceFilter, nextPriceFilter]
      } else {
        return [
          ...state.slice(0, currentFilterLoc),
          ...state.slice(currentFilterLoc + 1, state.length)
        ]
      }
    })
  }


  const uniqueTypes = (x, i, array) => array.indexOf(x) === i;
  const typeCategories = restaurants.map(restaurant => restaurant.type).filter(
    uniqueTypes
  );
  const locationCategories = restaurants.map(restaurant => restaurant.location).filter(
    uniqueTypes
  );
  const alcoholCategories = restaurants.map(restaurant => restaurant.alcohol).filter(
    uniqueTypes
  );
  const priceCategories = restaurants.map(restaurant => restaurant.price).filter(
    uniqueTypes
  );
  const visitedCategories = restaurants.map(restaurant => restaurant.visited).filter(
    uniqueTypes
  );

  return (
    <>
      <StyledFilterList>
      <div className='TypeContainer'>
      {
        typeCategories.map((type, i) => (
          <div key={`${type}${i}`}>
            <input 
              type='checkbox' 
              name='type' 
              value={type}
              checked={typeFilter.includes(type)}
              onChange={handleOnTypeChange}
            />
            <label htmlFor='type'>{type}</label>
          </div>
        ))
      }
      </div>
      <div className='Container'>
      {
        locationCategories.map((location, i) => (
          <div key={`${location}${i}`}>
            <input 
              type='checkbox' 
              name='location' 
              value={location}
              checked={locationFilter.includes(location)}
              onChange={handleOnLocationChange}
            />
            <label htmlFor='location'>{location}</label>
          </div>
        ))
      }
      </div>
      <div className='Container'>
      {
        alcoholCategories.map((alcohol, i) => (
          <div key={`${alcohol}${i}`}>
            <input 
              type='checkbox' 
              name='alcohol' 
              value={alcohol}
              checked={alcoholFilter.includes(alcohol)}
              onChange={handleOnAlcoholChange}
            />
            <label htmlFor='alcohol'>{alcohol}</label>
          </div>
        ))
      }
      </div>
      <div className='Container'>
        {
          priceCategories.map((price, i) => (
            <div key={`${price}${i}`}>
              <input 
                type='checkbox'
                name='price'
                value={price}
                checked={priceFilter.includes(price)}
                onChange={handleOnPriceChange}
              />
              <label htmlFor='price'>{transformPrice(price)}</label>
            </div>
          ))
        }
      </div>
      <div className='Container'>
        {
          visitedCategories.map((visited, i) => (
            <div key={`${visited}${i}`}>
              <input 
                type='checkbox'
                name='visited'
                value={visited}
              />
              <label htmlFor='visited'>{visited ? 'visited' : 'never been'}</label>
            </div>
          ))
        }
      </div>
      </StyledFilterList>
    </>
  )
}
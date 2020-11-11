import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

//data
import { restaurants } from '../data'

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
  const [typeFilter, setTypeFilter] = useState('');

  useEffect(() => {
    onFiltersChange({ type: typeFilter })
  }, [typeFilter])

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
      
      </StyledFilterList>
    </>
  )
}

/*
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
        locationCategories.map((loc, i) => (
          <div key={`${loc}${i}`}>
            <input 
              type='checkbox' 
              name='type' 
              value={loc}
              checked={locationFilter.includes(loc)}
              onChange={handleOnLocationChange}
            />
            <label htmlFor='type'>{loc}</label>
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
              name='type' 
              value={alcohol}
              checked={alcoholFilter.includes(alcohol)}
              onChange={handleOnAlcoholChange}
            />
            <label htmlFor='type'>{alcohol}</label>
          </div>
        ))
      }
      </div>
*/
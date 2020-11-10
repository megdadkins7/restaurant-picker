import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

//data
import { restaurants } from '../data'

const StyledFilterList = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 margin: 20px 40px 0 40px;
 flex-wrap: wrap;
 input {
   margin-right: 10px;
 }
 label {
   text-transform: uppercase;
   color: #283044;
 }
`;

export default function FilterList({ onFiltersChange }) {
  const [typeFilter, setTypeFilter] = useState('')

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
  return (
    <>
      <StyledFilterList>
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
      </StyledFilterList>
    </>
  )
}
import { useState, useEffect, useCallback } from'react';

//components
import RestaurantList from './components/RestaurantList'
import RestaurantPicker from './components/RestaurantPicker'
import FilterList from './components/FilterList'

//data
import { restaurants } from './data'

//styles
import GlobalStyles from './styles/GlobalStyles'

function App() {
  const [restaurant, setRestaurant] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    type: '',
  })

  const getRestaurant = () => {
    const restaurantNum = Math.floor(Math.random() * restaurants.length)
    const randomRestaurant = restaurants[restaurantNum]
    setRestaurant(randomRestaurant.name)
  }

  useEffect(() => {
    getRestaurant()
  }, [])

  const handleClick = useCallback(event => {
    getRestaurant()
  }, [])

  const handleOnFiltersChange = partialFilters => {
    setActiveFilters(state => ({
      ...state,
      ...partialFilters
    }))
  }

  return (
    <>
      <GlobalStyles />
      <RestaurantPicker restaurant={restaurant} getRestaurant={handleClick} />
      <FilterList onFiltersChange={handleOnFiltersChange} />
      <RestaurantList restaurants={restaurants} filters={activeFilters} />
    </>
  );
}

export default App;

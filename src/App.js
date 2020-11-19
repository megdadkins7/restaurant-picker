import { useState, useEffect } from'react';

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
    type: [],
    location: [],
    alcohol: [],
    price: [],
    visited: [],
  });

  const handleOnFiltersChange = partialFilters => {
    setActiveFilters(state => ({
      ...state,
      ...partialFilters
    }))
  }

  const getActiveFilterCount = activeFilters => {
    return Object.keys(activeFilters).reduce((total, filterKey) => {
      return activeFilters[filterKey].length > 0 ? total + 1 : total;
    }, 0)
  }

  const getFilteredList = (list, activeFilters) => {
    const activeFilterCount = getActiveFilterCount(activeFilters);
    if(activeFilterCount === 0) {
      return restaurants
    }
    return list.filter(restaurant => {
      const matchCount = Object.keys(activeFilters).reduce((total, filterKey) => {
        const haveMatch = activeFilters[filterKey].some(r => restaurant[filterKey] === null ? false : restaurant[filterKey].includes(r));
        if(haveMatch) {
          return total + 1
        } else {
          return total
        }
      }, 0);
      return matchCount === activeFilterCount
    });
  };

  const visibleRestaurants = getFilteredList(restaurants, activeFilters)

  const getRestaurant = () => {
    const restaurantNum = Math.floor(Math.random() * visibleRestaurants.length)
    const randomRestaurant = visibleRestaurants[restaurantNum]
    setRestaurant(randomRestaurant.name)
  }

  useEffect(() => {
    getRestaurant()
  }, [])

  return (
    <>
      <GlobalStyles />
      <RestaurantPicker restaurant={restaurant} getRestaurant={getRestaurant} />
      <FilterList onFiltersChange={handleOnFiltersChange} restaurants={restaurants} />
      <RestaurantList selectedRestaurant={restaurant} visibleRestaurants={visibleRestaurants} />
    </>
  );
}

export default App;

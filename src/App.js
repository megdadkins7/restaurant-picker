import { useState, useEffect, useCallback } from'react';

//components
import RestaurantList from './components/RestaurantList'
import RestaurantPicker from './components/RestaurantPicker'

//data
import { restaurants } from './data'

//styles
import GlobalStyles from './styles/GlobalStyles'

function App() {
  const [restaurant, setRestaurant] = useState('')

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

  return (
    <>
      <GlobalStyles />
      <RestaurantPicker restaurant={restaurant} getRestaurant={handleClick} />
      <RestaurantList restaurants={restaurants} />
    </>
  );
}

export default App;

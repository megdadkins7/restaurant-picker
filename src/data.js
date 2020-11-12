export const restaurants = [
  {
    id: 'dieselAndDuke',
    name: 'Diesel And Duke',
    type: 'burgers',
    visited: true,
    location: 'take-out',
    alcohol: 'none',
    price: 'cheap'
  },
  {
    id: 'wurstbar',
    name: 'Wurstbar',
    type: 'sausage',
    visited: true,
    location: 'dine-in',
    alcohol: 'beer',
    price: 'affordable'
  },
  {
    id: 'porta',
    name: 'Porta',
    type: 'pizza',
    visited: true,
    location: 'dine-in',
    alcohol: 'beer',
    price: 'affordable'
  },
  {
    id: 'aniRamen',
    name: 'Ani Ramen',
    type: 'ramen',
    visited: true,
    location: 'dine-in',
    alcohol: 'cocktails',
    price: 'average'
  },
  {
    id: 'surfCity',
    name: 'Surf City',
    type: 'seafood',
    visited: true,
    location: 'dine-in',
    alcohol: 'beer',
    price: 'affordable'
  },
  {
    id: 'zeppelinHall',
    name: 'Zeppelin Hall',
    type: 'barbeque',
    visited: true,
    location: 'dine-in',
    alcohol: 'beer',
    price: 'affordable'
  },
  {
    id: 'gringos',
    name: 'Gringos',
    type: 'mexican',
    visited: true,
    location: 'dine-in',
    alcohol: 'cocktails',
    price: 'average'
  },
  {
    id: 'hudsonHound',
    name: 'Hudson Hound',
    type: 'irish',
    visited: false,
    location: 'dine-in',
    alcohol: 'beer',
    price: 'average'
  },
  {
    id: 'loFi',
    name: 'Lo Fi',
    type: 'pizza',
    visited: true,
    location: 'dine-in',
    alcohol: 'beer',
    price: 'affordable'
  },
  {
    id: 'theBoil',
    name: 'The Boil',
    type: 'seafood',
    visited: true,
    location: 'dine-in',
    alcohol: 'beer',
    price: 'affordable'
  },
  {
    id: 'hardGrove',
    name: 'Hard Grove',
    type: 'steakhouse',
    visited: true,
    location: 'dine-in',
    alcohol: 'cocktails',
    price: 'average'
  },
  {
    id: 'hamiltonPork',
    name: 'Hamilton Pork',
    type: 'barbeque',
    visited: true,
    location: 'dine-in',
    alcohol: 'beer',
    price: 'average'
  },
  {
    id: 'leftBank',
    name: 'Left Bank',
    type: 'burgers',
    visited: true,
    location: 'dine-in',
    alcohol: 'beer',
    price: 'average'
  },
  {
    id: 'senHai',
    name: 'Sen Hai',
    type: 'chinese',
    visited: true,
    location: 'take-out',
    alcohol: 'none',
    price: 'cheap'
  },
  {
    id: 'cloveGarden',
    name: 'Clove Garden',
    type: 'indian',
    visited: true,
    location: 'take-out',
    alcohol: 'none',
    price: 'average'
  },
  {
    id: 'southHouse',
    name: 'South House',
    type: 'steakhouse',
    visited: true,
    location: 'dine-in',
    alcohol: 'cocktails',
    price: 'average'
  },
  {
    id: 'theAshford',
    name: 'The Ashford',
    type: 'american',
    visited: false,
    location: 'dine-in',
    alcohol: 'cocktails',
    price: 'expensive'
  },
  {
    id: 'taqueria',
    name: 'Taqueria',
    type: 'mexican',
    visited: true,
    location: 'dine-in',
    alcohol: 'beer',
    price: 'average'
  },
  {
    id: 'tacoria',
    name: 'Tacoria',
    type: 'mexican',
    visited: true,
    location: 'take-out',
    alcohol: 'none',
    price: 'affordable'
  },
  {
    id: 'graceOMalleys',
    name: 'Grace OMalleys',
    type: 'irish',
    visited: false,
    location: 'dine-in',
    alcohol: 'cocktails',
    price: 'average'
  },
  {
    id: 'tonyBaloneys',
    name: 'Tony Baloneys',
    type: 'pizza',
    visited: true,
    location: 'take-out',
    alcohol: 'none',
    price: 'affordable'
  }
]


export const transformPrice = (restaurants) => {
  switch(restaurants) {
    case 'cheap':
        return '$';
        break;
      case 'affordable':
        return '$$';
        break;
      case 'average':
        return '$$$';
        break;
      case 'expensive':
        return '$$$$';
        break;
  }
}
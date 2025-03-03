import { getRandomArrayElement, getRandomNumber } from '../utils.js';

const mockDestinations = [
  {
    id: 1,
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Chamonix',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber()}`,
        description: 'Chamonix'
      }
    ]
  },
  {
    id: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
    name: 'Amsterdam',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber()}`,
        description: 'Amsterdam'
      }
    ]
  },
  {
    id: 3,
    description: 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis.',
    name: 'Geneva',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber()}`,
        description: 'Geneva'
      }
    ]
  },
  {
    id: 4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'Paris',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber()}`,
        description: 'Paris'
      }
    ]
  },
  {
    id: 5,
    description: 'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    name: 'London',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber()}`,
        description: 'London'
      }
    ]
  },
];

function getRandomDestination() {
  return getRandomArrayElement(mockDestinations);
}

export {getRandomDestination};

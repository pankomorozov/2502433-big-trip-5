import { EVENT_TYPES } from '../const.js';
import { getRandomArrayElement } from '../utils.js';
import { getRandomDestination } from './destination.js';

const mockEvents = [
  {
    id: 1,
    price: 1100,
    dateFrom: new Date('2023-12-20'),
    dateTo: new Date('2023-12-23'),
    destination: getRandomDestination(),
    isFavorite: false,
    offers: [
      1
    ],
    type: getRandomArrayElement(EVENT_TYPES)
  },
  {
    id: 2,
    price: 2000,
    dateFrom: new Date('2023-12-15'),
    dateTo: new Date('2023-12-23'),
    destination: getRandomDestination(),
    isFavorite: true,
    offers: [
      1
    ],
    type: getRandomArrayElement(EVENT_TYPES)
  },
  {
    id: 3,
    price: 100,
    dateFrom: new Date('2023-12-20'),
    dateTo: new Date('2023-12-21'),
    destination: getRandomDestination(),
    isFavorite: false,
    offers: [
      2, 3
    ],
    type: getRandomArrayElement(EVENT_TYPES)
  },
  {
    id: 4,
    price: 8100,
    dateFrom: new Date('2023-12-01'),
    dateTo: new Date('2023-12-31'),
    destination: getRandomDestination(),
    isFavorite: false,
    offers: [
      2
    ],
    type: getRandomArrayElement(EVENT_TYPES)
  },
  {
    id: 5,
    price: 1300,
    dateFrom: new Date('2023-12-19'),
    dateTo: new Date('2023-12-23'),
    destination: getRandomDestination(),
    isFavorite: true,
    offers: [
      1, 3
    ],
    type: getRandomArrayElement(EVENT_TYPES)
  },
  {
    id: 6,
    price: 600,
    dateFrom: new Date('2023-10-18'),
    dateTo: new Date('2023-12-24'),
    destination: getRandomDestination(),
    isFavorite: false,
    offers: [
      1, 4
    ],
    type: getRandomArrayElement(EVENT_TYPES)
  },
];

function getRandomEvent() {
  return getRandomArrayElement(mockEvents);
}

export {getRandomEvent};

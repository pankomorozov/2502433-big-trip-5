import { EVENT_TYPES } from '../const.js';
import { getRandomArrayElement } from '../utils.js';
import { getRandomDestinationID } from './destination.js';

const mockEvents = [
  {
    id: 1,
    price: 1100,
    dateFrom: new Date('2023-12-20'),
    dateTo: new Date('2023-12-23'),
    destination: getRandomDestinationID(),
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
    destination: getRandomDestinationID(),
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
    destination: getRandomDestinationID(),
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
    destination: getRandomDestinationID(),
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
    destination: getRandomDestinationID(),
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
    destination: getRandomDestinationID(),
    isFavorite: false,
    offers: [
      1, 4
    ],
    type: getRandomArrayElement(EVENT_TYPES)
  },
  {
    id: 7,
    price: 8500,
    dateFrom: new Date('2024-10-18'),
    dateTo: new Date('2024-12-24'),
    destination: getRandomDestinationID(),
    isFavorite: true,
    offers: [
      1, 2
    ],
    type: getRandomArrayElement(EVENT_TYPES)
  },
  {
    id: 8,
    price: 600,
    dateFrom: new Date('2023-11-18'),
    dateTo: new Date('2023-12-28'),
    destination: getRandomDestinationID(),
    isFavorite: false,
    offers: [
      1
    ],
    type: getRandomArrayElement(EVENT_TYPES)
  },
  {
    id: 9,
    price: 500,
    dateFrom: new Date('2023-12-23'),
    dateTo: new Date('2023-12-24'),
    destination: getRandomDestinationID(),
    isFavorite: true,
    offers: [
      4
    ],
    type: getRandomArrayElement(EVENT_TYPES)
  },
  {
    id: 10,
    price: 50,
    dateFrom: new Date('2023-12-24'),
    dateTo: new Date('2023-12-25'),
    destination: getRandomDestinationID(),
    isFavorite: false,
    offers: [],
    type: getRandomArrayElement(EVENT_TYPES)
  },
  {
    id: 11,
    price: 680,
    dateFrom: new Date('2023-10-18'),
    dateTo: new Date('2023-10-24'),
    destination: getRandomDestinationID(),
    isFavorite: false,
    offers: [
      3
    ],
    type: getRandomArrayElement(EVENT_TYPES)
  },
];

function getRandomEvent() {
  return getRandomArrayElement(mockEvents);
}

export {getRandomEvent};

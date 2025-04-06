import { EVENT_TYPES } from '../const.js';
import { getRandomArrayElement } from '../utils.js';
import { getRandomDestinationID } from './destination.js';

const mockEvents = [
  {
    id: 1,
    price: 1100,
    dateFrom: '2019-07-03T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
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
    dateFrom: '2023-07-02T22:55:56.845Z',
    dateTo: '2023-08-01T11:25:13.375Z',
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
    dateFrom: '2024-02-10T10:55:56.845Z',
    dateTo: '2024-03-11T11:22:13.375Z',
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
    dateFrom: '2023-12-10T22:55:56.845Z',
    dateTo: '2023-12-31T11:22:13.375Z',
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
    dateFrom: '2023-07-07T22:55:56.845Z',
    dateTo: '2023-07-11T11:22:13.375Z',
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
    dateFrom: '2023-12-21T22:55:56.845Z',
    dateTo: '2023-12-22T11:22:13.375Z',
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
    dateFrom: '2023-07-18T10:55:56.845Z',
    dateTo: '2023-07-18T11:22:13.375Z',
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
    dateFrom: '2020-07-09T22:55:56.845Z',
    dateTo: '2020-07-11T11:22:13.375Z',
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
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
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
    dateFrom: '2023-10-09T22:55:56.845Z',
    dateTo: '2023-11-11T10:22:13.375Z',
    destination: getRandomDestinationID(),
    isFavorite: false,
    offers: [],
    type: getRandomArrayElement(EVENT_TYPES)
  },
  {
    id: 11,
    price: 680,
    dateFrom: '2021-10-10T22:55:56.845Z',
    dateTo: '2021-10-15T11:22:13.375Z',
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

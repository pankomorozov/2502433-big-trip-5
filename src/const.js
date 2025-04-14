const EVENT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const DateFormats = {
  MONTH: 'MMM D',
  TIME: 'HH:mm',
  FULL_DATE: 'd/m/y H:i',
  TOTAL_MONTH: 'D MMM'
};

const FilterTypes = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

const SortTypes = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFER: 'offer'
};

export {EVENT_TYPES, DateFormats, FilterTypes, SortTypes};

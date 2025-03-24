const EVENT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const DateFormats = {
  MONTH: 'MMM D',
  TIME: 'HH:mm',
  FULL_DATE: 'DD/MM/YY HH:mm'
};

const FilterTypes = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

export {EVENT_TYPES, DateFormats, FilterTypes};

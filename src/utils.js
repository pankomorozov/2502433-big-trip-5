import dayjs from 'dayjs';

const DATE_FORMAT = 'D MMM';

function getRandomNumber(min = 1, max = 100) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function getRandomArrayElement(items) {
  return items[getRandomNumber(0, items.length - 1)];
}

function formatDate(date) {
  return date ? dayjs(date).format(DATE_FORMAT) : '';
}

function calculateDuration(startDate, endDate) {
  return dayjs(endDate).diff(startDate, 'd');
}

export {getRandomArrayElement, getRandomNumber, formatDate, calculateDuration};

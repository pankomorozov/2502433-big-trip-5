import dayjs from 'dayjs';
import { FilterTypes, SortTypes } from './const.js';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

const MS_IN_DAY = 86400000;
const MS_IN_HOUR = 3600000;

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

function getRandomNumber(min = 1, max = 100) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function getRandomArrayElement(items) {
  return items[getRandomNumber(0, items.length - 1)];
}

function formatDate(date, dateFormat) {
  return date ? dayjs(date).format(dateFormat) : '';
}

function calculateDuration(startDate, endDate, inMilliseconds = false) {
  const timeDuration = dayjs(endDate).diff(startDate);
  if (inMilliseconds) {
    return timeDuration;
  }
  let timeFormat = 'DD[D] HH[H] mm[M]';
  if (timeDuration < MS_IN_DAY) {
    timeFormat = 'HH[H] mm[M]';
  }
  if (timeDuration < MS_IN_HOUR) {
    timeFormat = 'mm[M]';
  }
  return dayjs(timeDuration).format(timeFormat);
}

const filter = {
  [FilterTypes.EVERYTHING]: (events) => events,
  [FilterTypes.FUTURE]: (events) => events.filter((event) => dayjs().isBefore(dayjs(event.dateFrom))),
  [FilterTypes.PRESENT]: (events) => events.filter((event) => dayjs().isSameOrAfter(dayjs(event.dateFrom)) && dayjs().isSameOrBefore(dayjs(event.dateTo))),
  [FilterTypes.PAST]: (events) => events.filter((event) => dayjs().isAfter(dayjs(event.dateTo)))
};

function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

const sort = {
  [SortTypes.DAY]: (points) => points.sort((first, second) => dayjs(first.dateFrom).diff(dayjs(second.dateFrom))),
  [SortTypes.PRICE]: (points) => points.sort((first, second) => second.price - first.price),
  [SortTypes.TIME]: (points) => points.sort((first, second) => calculateDuration(second.dateFrom, second.dateTo, true) - calculateDuration(first.dateFrom, first.dateTo, true))
};

export {getRandomArrayElement, getRandomNumber, formatDate, calculateDuration, filter, isEscapeKey, sort};

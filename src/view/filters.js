import AbstractView from '../framework/view/abstract-view.js';
import { filter } from '../utils.js';

function createFilterItemTemplate(filterInfo, isChecked) {
  const {type, count} = filterInfo;
  return (
    `<div class="trip-filters__filter">
      <input id="filter-${type}"
            class="trip-filters__filter-input  visually-hidden"
            type="radio"
            name="trip-filter"
            value="${type}"
            ${isChecked ? 'checked' : ''}
            ${count === 0 ? 'disabled' : ''}>
      <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
    </div>`
  );
}

function createFilterTemplate(filters) {
  return (
    `<form class="trip-filters" action="#" method="get">
      ${filters.map((item, index) => createFilterItemTemplate(item, index === 0)).join('')}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
}

export default class FiltersView extends AbstractView {
  #points = null;

  constructor({points}) {
    super();
    this.#points = points;
  }

  get template() {
    return createFilterTemplate(this.#generateFilters());
  }

  #generateFilters() {
    return Object.entries(filter).map(
      ([filterType, filterPoints]) => ({
        type: filterType,
        count: filterPoints(this.#points).length,
      }),
    );
  }
}

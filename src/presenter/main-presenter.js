import SortingView from '../view/sorting.js';
import EventsListView from '../view/points-list.js';
import FiltersView from '../view/filters.js';
import EmptyListView from '../view/empty-list-view.js';
import PointPresenter from './point-presenter.js';
import { sort, updateItem } from '../utils.js';
import { SortTypes } from '../const.js';
import { render } from '../framework/render.js';

export default class MainPresenter {
  #eventListComponent = new EventsListView();
  #listContainer = null;
  #filterContainer = null;
  #eventsModel = null;
  #currentSortType = SortTypes.DAY;
  #pointPresenters = new Map();

  constructor(listContainer, filterContainer, eventsModel) {
    this.#listContainer = listContainer;
    this.#filterContainer = filterContainer;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.eventsList = [...this.#eventsModel.events];
    this.offersList = [...this.#eventsModel.offers];
    this.destinationsList = [...this.#eventsModel.destinations];

    this.#renderFilters();

    if (this.eventsList.length === 0) {
      render(new EmptyListView(), this.#listContainer);
      return;
    }

    this.#renderSortList();
    this.#renderPointsBoard();
  }

  #renderFilters() {
    render(new FiltersView({points: this.eventsList}), this.#filterContainer);
  }

  #renderSortList() {
    render(new SortingView({onSortChange: this.#handleSortChange}), this.#listContainer);
  }

  #renderPointsBoard() {
    render(this.#eventListComponent, this.#listContainer);

    sort[this.#currentSortType](this.eventsList);

    for (let i = 0; i < this.eventsList.length; i++) {
      this.#renderPoint(this.eventsList[i]);
    }
  }

  #clearPointsBoard() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointsContainer: this.#eventListComponent.element,
      offers: this.offersList,
      destinations: this.destinationsList,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #handlePointChange = (updatedPoint) => {
    this.eventsList = updateItem(this.eventsList, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetFormView());
  };

  #handleSortChange = (evt) => {
    if (evt.target.closest('input')) {
      if (this.#currentSortType === evt.target.dataset.sortType) {
        return;
      }
      this.#currentSortType = evt.target.dataset.sortType;
      this.#clearPointsBoard();
      this.#renderPointsBoard();
    }
  };
}

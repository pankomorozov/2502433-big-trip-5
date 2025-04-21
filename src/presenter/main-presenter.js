import SortingView from '../view/sorting.js';
import EventsListView from '../view/points-list.js';
import EmptyListView from '../view/empty-list-view.js';
import PointPresenter from './point-presenter.js';
import NewEventBtnView from '../view/new-event-btn-view.js';
import NewPointPresenter from './new-point-presenter.js';
import { filter, sort } from '../utils.js';
import { FilterTypes, NoEventsTexts, SortTypes, UpdateType, UserAction } from '../const.js';
import { remove, render } from '../framework/render.js';

export default class MainPresenter {
  #eventListComponent = new EventsListView();
  #noEventsComponent = null;
  #sortComponent = null;
  #addBtnComponent = null;
  #listContainer = null;
  #btnContainer = null;
  #eventsModel = null;
  #offersModel = null;
  #destinationsModel = null;
  #filterModel = null;
  #currentSortType = SortTypes.DAY;
  #pointPresenters = new Map();

  constructor(listContainer, buttonContainer, eventsModel, offersModel, destinationsModel, filterModel) {
    this.#listContainer = listContainer;
    this.#btnContainer = buttonContainer;
    this.#eventsModel = eventsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
    this.#filterModel = filterModel;

    this.#eventsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get events() {
    const filteredEvents = filter[this.#filterModel.filter](this.#eventsModel.events);
    sort[this.#currentSortType](filteredEvents);
    return filteredEvents;
  }

  get offers() {
    return this.#offersModel.offers;
  }

  get destinations() {
    return this.#destinationsModel.destinations;
  }

  init() {
    this.#addBtnComponent = new NewEventBtnView({onBtnClick: this.#handleAddPointBtnClick});
    render(this.#addBtnComponent, this.#btnContainer);
    this.#renderFullPointsBoard();
  }

  #renderSortList() {
    this.#sortComponent = new SortingView({onSortChange: this.#handleSortChange, currentSortType: this.#currentSortType});
    render(this.#sortComponent, this.#listContainer);
  }

  #renderFullPointsBoard() {
    if (this.events.length === 0) {
      this.#renderNoEventsComponent();
      return;
    }
    this.#renderSortList();
    this.#renderPoints();
  }

  #renderPoints() {
    render(this.#eventListComponent, this.#listContainer);
    for (let i = 0; i < this.events.length; i++) {
      this.#renderPoint(this.events[i]);
    }
  }

  #renderNoEventsComponent() {
    this.#noEventsComponent = new EmptyListView({text: NoEventsTexts[this.#filterModel.filter]});
    render(this.#noEventsComponent, this.#listContainer);
  }

  #clearFullBoard() {
    remove(this.#noEventsComponent);
    remove(this.#sortComponent);
    this.#clearPointsBoard();
  }

  #clearPointsBoard() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointsContainer: this.#eventListComponent.element,
      offers: this.offers,
      destinations: this.destinations,
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_EVENT:
        this.#eventsModel.updateEvent(updateType, update);
        break;
      case UserAction.ADD_EVENT:
        this.#eventsModel.addEvent(updateType, update);
        break;
      case UserAction.DELETE_EVENT:
        this.#eventsModel.deleteEvent(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearFullBoard();
        this.#renderFullPointsBoard();
        break;
      case UpdateType.MAJOR:
        this.#clearFullBoard();
        this.#renderFullPointsBoard();
        break;
    }
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
      this.#renderPoints();
    }
  };

  #handleAddPointBtnClick = () => {
    this.#addBtnComponent.element.disabled = true;
    const newPointPresenter = new NewPointPresenter({
      container: this.#eventListComponent.element,
      offers: this.offers,
      destinations: this.destinations,
      onDataChange: this.#handleViewAction,
      onResetForm: this.#handleNewEventFormClose
    });
    this.#currentSortType = SortTypes.DAY;
    this.#filterModel.setFilter(UpdateType.MAJOR, FilterTypes.EVERYTHING);
    newPointPresenter.init();
  };

  #handleNewEventFormClose = () => {
    this.#addBtnComponent.element.disabled = false;
  };
}

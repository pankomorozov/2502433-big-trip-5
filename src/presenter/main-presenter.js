import EventView from '../view/point.js';
import SortingView from '../view/sorting.js';
import EventsListView from '../view/points-list.js';
import EventEditorView from '../view/point-editor.js';
import FiltersView from '../view/filters.js';
import EmptyListView from '../view/empty-list-view.js';
import { render, replace } from '../framework/render.js';

export default class MainPresenter {
  #eventListComponent = new EventsListView();
  #listContainer = null;
  #filterContainer = null;
  #eventsModel = null;

  constructor(listContainer, filterContainer, eventsModel) {
    this.#listContainer = listContainer;
    this.#filterContainer = filterContainer;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.eventsList = [...this.#eventsModel.events];
    this.offersList = [...this.#eventsModel.offers];
    this.destinationsList = [...this.#eventsModel.destinations];

    render(new FiltersView({points: this.eventsList}), this.#filterContainer);

    if (this.eventsList.length === 0) {
      render(new EmptyListView(), this.#listContainer);
      return;
    }

    render(new SortingView(), this.#listContainer);
    render(this.#eventListComponent, this.#listContainer);

    for (let i = 0; i < this.eventsList.length; i++) {
      this.#renderPoint(this.eventsList[i]);
    }
  }

  #renderPoint(point) {
    const escapeKeydownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceEditFormToPoint();
        document.removeEventListener('keydown', escapeKeydownHandler);
      }
    };

    const pointComponent = new EventView({
      point,
      offers: this.offersList,
      destinations: this.destinationsList,
      onEditBtnClick: () => {
        replacePointToEditForm();
        document.addEventListener('keydown', escapeKeydownHandler);
      }
    });

    const pointEditComponent = new EventEditorView({
      point,
      offers: this.offersList,
      destinations: this.destinationsList,
      onFormSubmit: () => {
        replaceEditFormToPoint();
        document.removeEventListener('keydown', escapeKeydownHandler);
      },
      onFormReset: () => {
        replaceEditFormToPoint();
        document.removeEventListener('keydown', escapeKeydownHandler);
      }
    });

    function replacePointToEditForm() {
      replace(pointEditComponent, pointComponent);
    }

    function replaceEditFormToPoint() {
      replace(pointComponent, pointEditComponent);
    }

    render(pointComponent, this.#eventListComponent.element);
  }
}

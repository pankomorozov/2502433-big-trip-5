import EventView from '../view/point.js';
import SortingView from '../view/sorting.js';
import EventsListView from '../view/points-list.js';
import EventCreatorView from '../view/point-creator.js';
import EventEditorView from '../view/point-editor.js';
import FiltersView from '../view/filters.js';
import {render} from '../render.js';

export default class MainPresenter {
  eventListComponent = new EventsListView();

  constructor() {
    this.eventsContainer = document.querySelector('.trip-events');
    this.filterContainer = document.querySelector('.trip-controls__filters');
  }

  init() {
    render(new FiltersView(), this.filterContainer);
    render(new SortingView(), this.eventsContainer);
    render(this.eventListComponent, this.eventsContainer);
    render(new EventEditorView(), this.eventListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventView(), this.eventListComponent.getElement());
    }

    render(new EventCreatorView(), this.eventListComponent.getElement());
  }
}

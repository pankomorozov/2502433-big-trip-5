import EventView from '../view/point.js';
import SortingView from '../view/sorting.js';
import EventsListView from '../view/points-list.js';
import EventCreatorView from '../view/point-creator.js';
import EventEditorView from '../view/point-editor.js';
import FiltersView from '../view/filters.js';
import {render} from '../render.js';

export default class MainPresenter {
  eventListComponent = new EventsListView();

  constructor(listContainer, filterContainer, eventsModel) {
    this.eventsContainer = listContainer;
    this.filterContainer = filterContainer;
    this.eventsModel = eventsModel;
  }

  init() {
    this.eventsList = [...this.eventsModel.getEvents()];
    this.offersList = [...this.eventsModel.getOffers()];

    render(new FiltersView(), this.filterContainer);
    render(new SortingView(), this.eventsContainer);
    render(this.eventListComponent, this.eventsContainer);
    render(new EventEditorView({point: this.eventsList[0], offers: this.offersList}), this.eventListComponent.getElement());

    for (let i = 1; i < this.eventsList.length; i++) {
      const offersForEvent = this.offersList.find((offer) => offer.type === this.eventsList[i].type);
      render(new EventView({point: this.eventsList[i], offers: offersForEvent}), this.eventListComponent.getElement());
    }

    render(new EventCreatorView(), this.eventListComponent.getElement());
  }
}

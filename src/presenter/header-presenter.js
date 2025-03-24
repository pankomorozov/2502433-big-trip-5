import { RenderPosition, render } from '../framework/render';
import HeaderView from '../view/header-view';

export default class HeaderPresenter {
  #container = null;
  #eventsModel = null;

  constructor(container, eventsModel) {
    this.#container = container;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.eventsList = [...this.#eventsModel.events];
    this.destinationsList = [...this.#eventsModel.destinations];

    render(new HeaderView({points: this.eventsList, destinations: this.#getCheckedDestinations()}), this.#container, RenderPosition.AFTERBEGIN);
  }

  #getCheckedDestinations() {
    const destinationsIds = this.eventsList.map((event) => event.destination);
    return this.destinationsList.filter((destination) => destinationsIds.includes(destination.id));
  }
}

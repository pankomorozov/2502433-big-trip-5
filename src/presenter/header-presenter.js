import { RenderPosition, render, remove } from '../framework/render';
import { sort } from '../utils.js';
import { SortTypes } from '../const.js';
import HeaderView from '../view/header-view';

export default class HeaderPresenter {
  #container = null;
  #eventsModel = null;
  #destinationsModel = null;
  #headerComponent = null;

  constructor(container, eventsModel, destinationsModel) {
    this.#container = container;
    this.#eventsModel = eventsModel;
    this.#destinationsModel = destinationsModel;

    this.#eventsModel.addObserver(this.#handleEventsChange);
  }

  get events() {
    return this.#eventsModel.events;
  }

  get destinations() {
    return this.#destinationsModel.destinations;
  }

  init() {
    this.#renderHeaderList();
  }

  #handleEventsChange = () => {
    this.#renderHeaderList();
  };

  #renderHeaderList() {
    if (this.#headerComponent) {
      remove(this.#headerComponent);
    }
    if (this.events.length === 0) {
      return;
    }
    this.#headerComponent = new HeaderView({
      points: sort[SortTypes.DAY](this.events),
      destinations: this.destinations
    });
    render(this.#headerComponent, this.#container, RenderPosition.AFTERBEGIN);
  }
}

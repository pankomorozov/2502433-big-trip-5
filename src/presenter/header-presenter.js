import { RenderPosition, render } from '../framework/render';
import { sort } from '../utils.js';
import { SortTypes } from '../const.js';
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

    render(new HeaderView({points: sort[SortTypes.DAY](this.eventsList), destinations: this.destinationsList}), this.#container, RenderPosition.AFTERBEGIN);
  }
}

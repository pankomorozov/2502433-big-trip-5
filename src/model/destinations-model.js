import Observable from '../framework/observable.js';

export default class DestinationsModel extends Observable {
  #eventsApiService = null;
  #destinations = [];

  constructor({eventsApiService}) {
    super();
    this.#eventsApiService = eventsApiService;
  }

  init() {
    this.#eventsApiService.destinations.then((destinations) => {
      this.#destinations = destinations;
    });
  }

  get destinations() {
    return this.#destinations;
  }
}

import Observable from '../framework/observable.js';
import { getMockDestinations } from '../mock/destination.js';

export default class DestinationsModel extends Observable {
  #destinations = getMockDestinations();

  get destinations() {
    return this.#destinations;
  }
}

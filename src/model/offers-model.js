import Observable from '../framework/observable.js';
import { generateOffers } from '../mock/offer.js';

export default class OffersModel extends Observable {
  #offers = generateOffers();

  get offers() {
    return this.#offers;
  }
}

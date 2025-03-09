import { getMockDestinations } from '../mock/destination.js';
import { getRandomEvent } from '../mock/event.js';
import { generateOffers } from '../mock/offer.js';

const EVENTS_COUNT = 4;

export default class EventsModel {
  #offers = generateOffers();
  #events = Array.from({length: EVENTS_COUNT}, getRandomEvent);
  #destinations = getMockDestinations();

  get events() {
    return this.#events;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }
}

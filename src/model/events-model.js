import { getRandomEvent } from '../mock/event.js';
import { generateOffers } from '../mock/offer.js';

const EVENTS_COUNT = 4;

export default class EventsModel {
  offers = generateOffers();
  events = Array.from({length: EVENTS_COUNT}, getRandomEvent);

  getEvents() {
    return this.events;
  }

  getOffers() {
    return this.offers;
  }
}

import { getRandomEvent } from '../mock/event.js';
import Observable from '../framework/observable.js';

const EVENTS_COUNT = 4;

export default class EventsModel extends Observable {
  #events = Array.from({length: EVENTS_COUNT}, getRandomEvent);

  get events() {
    return this.#events;
  }

  updateEvent(updateType, updateItem) {
    const index = this.#events.findIndex((event) => event.id === updateItem.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting event');
    }

    this.#events = [
      ...this.#events.slice(0, index),
      updateItem,
      ...this.#events.slice(index + 1),
    ];

    this._notify(updateType, updateItem);
  }

  addEvent(updateType, newItem) {
    this.#events = [
      newItem,
      ...this.#events
    ];

    this._notify(updateType, newItem);
  }

  deleteEvent(updateType, item) {
    const index = this.#events.findIndex((event) => event.id === item.id);

    if (index === -1) {
      throw new Error('Can\'t delete unexisting event');
    }

    this.#events = [
      ...this.#events.slice(0, index),
      ...this.#events.slice(index + 1),
    ];

    this._notify(updateType);
  }
}

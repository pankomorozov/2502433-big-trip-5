import { UpdateType } from '../const.js';
import Observable from '../framework/observable.js';

export default class EventsModel extends Observable {
  #eventsApiService = null;
  #offersModel = null;
  #destinationsModel = null;
  #events = [];

  constructor({eventsApiService, offersModel, destinationsModel}) {
    super();
    this.#eventsApiService = eventsApiService;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
  }

  get events() {
    return this.#events;
  }

  async init() {
    try {
      await Promise.all([
        this.#offersModel.init(),
        this.#destinationsModel.init()
      ]);
      const events = await this.#eventsApiService.events;
      this.#events = events.map(this.#adaptToClient);
      this._notify(UpdateType.INIT);
    } catch(error) {
      this.#events = [];
      this._notify(UpdateType.ERROR);
    }
  }

  async updateEvent(updateType, updateItem) {
    const index = this.#events.findIndex((event) => event.id === updateItem.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting event');
    }

    try {
      const response = await this.#eventsApiService.updateEvent(updateItem);
      const updatedEvent = this.#adaptToClient(response);
      this.#events = [
        ...this.#events.slice(0, index),
        updatedEvent,
        ...this.#events.slice(index + 1),
      ];
      this._notify(updateType, updatedEvent);
    } catch(error) {
      throw new Error('Can\'t update event');
    }
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

  #adaptToClient(point) {
    const adaptedPoint = {...point,
      price: point['base_price'],
      dateFrom: point['date_from'],
      dateTo: point['date_to'],
      isFavorite: point['is_favorite']
    };

    delete adaptedPoint['base_price'];
    delete adaptedPoint['date_from'];
    delete adaptedPoint['date_to'];
    delete adaptedPoint['is_favorite'];

    return adaptedPoint;
  }
}

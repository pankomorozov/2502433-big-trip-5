import AbstractView from '../framework/view/abstract-view';

function createHeaderTemplate({totalPrice, destinationNames}) {
  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${destinationNames}</h1>
        <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>
      </div>
      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
      </p>
    </section>`
  );
}

export default class HeaderView extends AbstractView {
  #points = null;
  #destinations = null;

  constructor({points, destinations}) {
    super();
    this.#points = points;
    this.#destinations = destinations;
  }

  get template() {
    return createHeaderTemplate({totalPrice: this.#calculateTotalPrice(), destinationNames: this.#getDestinationNames()});
  }

  #calculateTotalPrice() {
    return this.#points.reduce((total, point) => total + point.price, 0);
  }

  #getDestinationNames() {
    return this.#destinations.map((item) => item.name).join(' &mdash; ');
  }
}

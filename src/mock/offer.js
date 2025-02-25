import { EVENT_TYPES } from '../const.js';
import { getRandomNumber } from '../utils.js';

const MAX_OFFERS = 4;

const mockOffers = [];

function generateOffer(id) {
  return ({
    id,
    title: 'Upgrade',
    price: getRandomNumber(0, 1000)
  });
}

function generateOffers() {
  for (let i = 0; i < EVENT_TYPES.length; i++) {
    const offerObj = {};
    offerObj.type = EVENT_TYPES[i];
    const offers = [];
    for (let j = 1; j <= MAX_OFFERS; j++) {
      offers.push(generateOffer(j));
    }
    offerObj.offers = offers;
    mockOffers.push(offerObj);
  }
  return mockOffers;
}

export {generateOffers};

import MainPresenter from './presenter/main-presenter.js';
import EventsModel from './model/events-model.js';
import HeaderPresenter from './presenter/header-presenter.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destinations-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';

const contentContainer = document.querySelector('.trip-events');
const filterContainer = document.querySelector('.trip-controls__filters');
const headerContainer = document.querySelector('.trip-main');

const eventsModel = new EventsModel();
const offersModel = new OffersModel();
const destinationsModel = new DestinationsModel();
const filterModel = new FilterModel();

const mainPresenter = new MainPresenter(contentContainer, headerContainer, eventsModel, offersModel, destinationsModel, filterModel);
const headerPresenter = new HeaderPresenter(headerContainer, eventsModel, destinationsModel);
const filterPresenter = new FilterPresenter(filterContainer, eventsModel, filterModel);

mainPresenter.init();
headerPresenter.init();
filterPresenter.init();

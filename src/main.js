import MainPresenter from './presenter/main-presenter.js';
import EventsModel from './model/events-model.js';
import HeaderPresenter from './presenter/header-presenter.js';

const contentContainer = document.querySelector('.trip-events');
const filterContainer = document.querySelector('.trip-controls__filters');
const headerContainer = document.querySelector('.trip-main');

const eventsModel = new EventsModel();
const mainPresenter = new MainPresenter(contentContainer, filterContainer, eventsModel);
const headerPresenter = new HeaderPresenter(headerContainer, eventsModel);

mainPresenter.init();
headerPresenter.init();


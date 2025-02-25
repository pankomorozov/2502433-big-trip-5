import MainPresenter from './presenter/main-presenter.js';
import EventsModel from './model/events-model.js';

const contentContainer = document.querySelector('.trip-events');
const filterContainer = document.querySelector('.trip-controls__filters');

const eventsModel = new EventsModel();
const mainPresenter = new MainPresenter(contentContainer, filterContainer, eventsModel);

mainPresenter.init();


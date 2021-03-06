import angular from 'angular';
import moment from 'moment';
// imports for this component
import template from './itinerary-card.html';
import './itinerary-card.css';

class ItineraryCardController {
  constructor() {
    this.planId = 'sample';
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleDemoteClick = this.handleDemoteClick.bind(this);
    this.moment = moment;
  }

  handleDeleteClick() {
    this.deleteEvent(this.event._id);
  }

  handleDemoteClick() {
    this.demoteEvent(this.event._id);
  }
}
ItineraryCardController.$inject = [];



const ItineraryCardComponent = {
  restrict: 'E',
  bindings: {
    event: '<',
    demoteEvent: '<',
    deleteEvent: '<'
  },
  template: template,
  controller: ItineraryCardController
};


export default ItineraryCardComponent;

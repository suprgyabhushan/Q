// import { Meteor } from 'meteor/meteor';
// import { Template } from 'meteor/templating';
import { Tasks } from '../imports/api/tasks.js';
// import './body.html';
// import './task.js';
// Template.body.helpers({
//   tasks() {
//     return Tasks.find({});
//   },
// });
import { ReactiveDict } from 'meteor/reactive-dict';

Template.home.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('tasksUser');
});
Template.home.helpers({
  tasksUser() {
    console.log(Tasks.find({}));
    return Tasks.find({});
  },
});

Template.home.events({
  'submit form' (e) {
      e.preventDefault();
      // alert("Hello");
      console.log("You pressed the button");
      const target = e.target;
      console.log(target);
      const slot = target.slot.value;
      const people = Number(target.people.value);
      const restaurant = target.restaurant.value;
      // Insert a task into the collection
      Meteor.call('tasks.insert', slot, people, restaurant);
      target.slot.value = '';
      target.people.value = '';
      target.restaurant.value = '';
      // Clear form
    },

});

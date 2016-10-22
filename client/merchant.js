// import'../imports/ui/task.js';
import { Tasks } from '../imports/api/tasks.js';
import { ReactiveDict } from 'meteor/reactive-dict';

Template.merchant.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('tasks');
});
Template.merchant.helpers({
  tasks() {
    console.log(Tasks.find({}));
    return Tasks.find({});
  },
});

Template.merchant.events({
  'submit form' (e) {
      e.preventDefault();
      // alert("Hello");
      console.log("You pressed the button");
      const target = e.target;
      console.log(target);
      const phone = target.phone.value;
      const people = Number(target.people.value);
      // Insert a task into the collection
      Meteor.call('tasks.merchantInsert', phone, people);
      target.slot.value = '';
      target.people.value = '';
      target.restaurant.value = '';
      // Clear form
    },
});

Template.task.events({
  'click .toggle-checked'() {
    Meteor.call('tasks.setChecked', this._id, ! this.checked);
    // Set the checked property to the opposite of its current value
  },
  'click .delete'() {
    if(confirm("delete this for sure?"))
      Meteor.call('tasks.remove', this._id);
    else {
      return;
    }
  },

});

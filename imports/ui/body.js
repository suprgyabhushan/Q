import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './body.html';
import './task.js';
Template.body.helpers({
  tasks() {
    return Tasks.find({});
  },
});

Template.myForm.events({
  'submit form' (e) {
    e.preventDefault();
      // alert("Hello");
      console.log("You pressed the button");
      const target = e.target;
      console.log(target);
      const text = target.text.value;
      const s = target.s.value;
      const text1 = target.text1.value;
      const text2 = target.text2.value;
      const text3 = target.text3.value;
      // Insert a task into the collection
      Tasks.insert({
        text: text,
        phone: text1,
        time: s,
        people: text2,
        restaurant: text3,
        createdAt: new Date(), // current time
        owner: Meteor.userId(),
        username: Meteor.user().username,
      });
      target.text.value = '';
      target.s.value = '';
      target.text2.value = '';
      // Clear form
    },

});

import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
export const Tasks = new Mongo.Collection('tasks');
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find();
  });
}
Meteor.methods({
  'tasks.insert'(slot,people,restaurant) {
    check(slot, String);
    check(people, Number);
    check(restaurant, String);
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Tasks.insert({
      phone: Meteor.user().profile.phoneNumber,
      time: slot,
      people: people,
      restaurant: restaurant,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),
      name: Meteor.user().profile.firstName+Meteor.user().profile.lastName,
    });
  },
  'tasks.merchantInsert'(phone,people) {
    check(phone, Number);
    check(people, Number);
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Tasks.insert({
      phone: Meteor.user().profile.phoneNumber,
      time: slot,
      people: people,
      restaurant: restaurant,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),
      name: Meteor.user().profile.firstName+Meteor.user().profile.lastName,
    });
  },
  'tasks.remove'(taskId) {
    check(taskId, String);

    Tasks.remove(taskId);
  },
  'tasks.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);

    Tasks.update(taskId, { $set: { checked: setChecked } });
  },
});

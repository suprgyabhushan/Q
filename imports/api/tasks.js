import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
export const Tasks = new Mongo.Collection('tasks');
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('tasksUser', function tasksPublication() {
    return Tasks.find({owner: this.userId, checked: false});
  });
  Meteor.publish('tasksMerchant', function tasksPublication(merchId) {
    return Tasks.find({restaurant: "Truffles", checked: false}, {sort: {createdAt: 1}});
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
      checked: false,
      name: Meteor.user().profile.firstName + Meteor.user().profile.lastName,
    });
  },
  'tasks.merchantInsert'(name,phone,people) {
    // check(phone, );
    // check(people, Number);
    // Make sure the user is logged in before inserting a task
    // if (! this.userId) {
    //   throw new Meteor.Error('not-authorized');
    // }
    var owner = "none";
    if(phone === "9916484397"){
      name="GauravKoley";
      owner="8KqDxtB7Bxg63nHMz";
    }

    Tasks.insert({
      phone: phone,
      time: "none",
      people: people,
      restaurant: "Truffles",
      createdAt: new Date(), // current time
      owner: owner,
      checked: false,
      name: name
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

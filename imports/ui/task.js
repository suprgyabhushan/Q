import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './task.html';
Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Tasks.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'() {
    if(confirm("delete this for sure?"))
      Tasks.remove(this._id);
    else {
      return;
    }
  },

});

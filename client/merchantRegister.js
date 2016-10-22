import '../imports/api/merchants'
import { Session } from 'meteor/session'
import { _ } from 'meteor/underscore'
import { Merchants } from '../imports/api/merchants.js';

Template.merchantRegister.events({
  'click #register-button' (e) {
    e.preventDefault();
    const target = e.target;
    const name = $('#name').val();
    var arr = [];
    _.each($('.answer'), function (item) {
        if ($(item).val() != '')
            arr.push({
                [$(item).attr("name")]: $(item).val(), //this you customize for your own purposes
            })
    });
    console.log(arr);
    Merchants.insert({
      Arr: arr,
      ename: name,
    });
    arr = [];
    target.name.value = '';

    }
});
Template.ask.created = function () {
    Session.set('action', 'ask');
    tablesArray = [ //adding at least two items but it could also be empty
        {
            name: 2, //using this to give an unique id to the control
            value: ''
        },
        {
            name: 4, //using this to give an unique id to the control
            value: ''
        }
    ];
    Session.set('tablesArr', tablesArray);
}
Template.ask.helpers({
tablesArray: function () {
    var tablesArray = Session.get("tablesArr")
    return tablesArray;
}
});
Template.ask.events = {
'submit #addItem': function (e) {
    e.preventDefault();
    var tablesArray = Session.get('tablesArr');
    tablesArray.push({
        name: e.target.name.value //just a placeholder, you could put any here
    });
    Session.set('tablesArr', tablesArray);
},
'click .delButton': function (e) {
    var thisId = $(e.target).attr("id");

    var tablesArray = Session.get('tablesArr');
    console.log("_"+thisId);
    var filteredArray = _.filter(tablesArray, function (item) {
        return item.name != thisId;
    });

    Session.set('tablesArr', filteredArray);
}
}

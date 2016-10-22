import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
export const Merchants = new Mongo.Collection('merchants');
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('merchant', function merchatsPublication(merchId) {
    return Merchants.findOne(new Meteor.Collection.ObjectID(merchId));
  });
}

import { Merchants } from '../imports/api/merchants'
FlowRouter.route('/', {
    name: 'login',
    action: function() {
        BlazeLayout.render("mainLayout", {
            content: "login"
        });
    }
});

FlowRouter.route('/home', {
    name: 'home',
    action: function() {
        BlazeLayout.render("mainLayout", {
            content: "home"
        });
    }
});

FlowRouter.route('/register', {
    name: 'register',
    action: function() {
        BlazeLayout.render("mainLayout", {
            content: "register"
        });
    }
});

/*FlowRouter.route('/merchant/:ename', {
    name: 'merchant',
    action: function(params) {
        console.log("h");
        console.log(params.ename);
        BlazeLayout.render("mainLayout", {
            content: "merchant"
        });
    }
});*/


FlowRouter.route('/merchant/register', {
    name: 'merchantRegister',
    action: function() {
        BlazeLayout.render("mainLayout", {
            content: "merchantRegister"
        });
    }
});

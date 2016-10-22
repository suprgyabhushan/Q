FlowRouter.route('/', {
    name: 'home',
    action: function() {
        BlazeLayout.render("mainLayout", {
            content: "home"
        });
    }
});
FlowRouter.route('/login', {
    name: 'login',
    action: function() {
        BlazeLayout.render("mainLayout", {
            content: "login"
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

FlowRouter.route('/merchant', {
    name: 'merchant',
    action: function() {
        BlazeLayout.render("mainLayout", {
            content: "merchant"
        });
    }
});


FlowRouter.route('/merchant/register', {
    name: 'merchantRegister',
    action: function() {
        BlazeLayout.render("mainLayout", {
            content: "merchantRegister"
        });
    }
});

Template.merchantlogin.events({
    'click #merchant-login-button': function(e, t) {
        e.preventDefault();
        //var email = $('#login-email').val(),
          //  password = $('#login-password').val();

            FlowRouter.go('/merchant-home');


        return false;
    }
});

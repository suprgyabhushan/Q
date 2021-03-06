Template.login.events({
    'click #login-button': function(e, t) {
        e.preventDefault();
        var email = $('#login-email').val(),
            password = $('#login-password').val();

        Meteor.loginWithPassword(email, password, function(error) {
            if (error) {
                return alert("Email or Password Incorrect");
                // return swal({
                //     title: "Email or password Incorect",
                //     text: "Please try again or create an account",
                //     timer: 1700,
                //     showConfirmButton: false,
                //     type: "error"
                // });
            } else {
                FlowRouter.go('/home');
            }
        });
        return false;
    }
});

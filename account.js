(function() {
    var page = $('.account.page'),
        logoutButton = page.find('.logout'),
        changePasswordForm = page.find('form.change-password'),
        oldPassword = changePasswordForm.find('input.old-password'),
        newPassword = changePasswordForm.find('input.password'),
        passwordConfirmation = changePasswordForm.find('input.password-confirmation'),
        success = changePasswordForm.find('span.success'),
        error = changePasswordForm.find('span.error'),
        loading = changePasswordForm.find('i.loading'),
        logout = function() {
            $('.page').hide();
            $('.nav.pages').hide();
            $('.login.page').show();

            $('span.username').text('');

            $('li.active').removeClass('active');
    }, changePassword = function(e) {
        e.preventDefault();

        success.text('');
        error.text('');
        loading.show();

        var data = {
            old_password: oldPassword.val(),
            password: newPassword.val(),
            password_confirmation: passwordConfirmation.val()
        };

        $.ajax({
            url: API_URL + '/change-password',
            type: 'post',
            data: data,
            headers: API_HEADERS
        }).success(function(response) {

            success.text(response.data.message);

            oldPassword.val('');
            newPassword.val('');
            passwordConfirmation.val('');

        }).error(function(response) {
            error.text(response.responseJSON.data.message);
        }).always(function(response) {
            loading.hide();
        });
    };

    logoutButton.click(logout);
    changePasswordForm.submit(changePassword);
})();


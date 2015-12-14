(function() {
    var page = $('.login.page'),
        form = page.find('form'),
        username = form.find('input.username'),
        password = form.find('input.password'),
        loading = form.find('.loading'),
        error = form.find('.error');

    form.submit(function(e) {
        e.preventDefault();

        error.text('');
        loading.show();

        var credentials = {
            username: username.val(),
            password: password.val()
        };

        $.post(API_URL + '/login', credentials).success(function(response) {
            $('.page').hide();
            $('.nav.pages').show();
            $('.nav.pages #tasks').addClass('active');
            $('.tasks.page').show();

            $('span.username').text(response.data.username);

            username.val('');
            password.val('');

            USER_LOGIN(response.data.api_key);
        }).error(function(response) {
            error.text(response.responseJSON.data.message);
        }).always(function(response) {
            loading.hide();
        });
    });
})();


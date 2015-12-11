(function() {
    var navPages = $('.nav.pages');

    navPages.find('a').click(function() {
        var prevActiveTab = navPages.find('li.active');
        var activeTab = $(this).closest('li');

        prevActiveTab.removeClass('active');
        activeTab.addClass('active');

        $('.'+prevActiveTab.attr('id') + '.page').hide();
        $('.'+activeTab.attr('id') + '.page').show();
    });
})();


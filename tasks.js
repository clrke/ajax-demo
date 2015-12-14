PAGES_INITIALIZERS.push(function() {
    API_CALL('get', 'tasks')
    .success(function(data) {
        console.log(data);
    })
    .error(function(data) {
        console.log(data);
    });
});

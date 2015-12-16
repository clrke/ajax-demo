PAGES_INITIALIZERS.push(function() {
    var page = $('.tasks.page'),
        tasksList = page.find('.tasks.list'),
        taskTemplate = tasksList.find('.task.template');

    API_CALL('get', 'tasks')
    .success(function(response) {
        var data = response.data;

        data.forEach(function(task) {
            var newTask = taskTemplate.clone();

            newTask.removeClass('template');

            newTask.find('.name').text(task.name);
            newTask.find('.description').text(task.description);
            newTask.find('.estimated-time').text(task.estimated_time);

            tasksList.append(newTask);
        });
    })
    .error(function(data) {
        console.log(data);
    });
});

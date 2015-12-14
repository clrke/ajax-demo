var API_KEY,
    API_HEADERS,
    DOMAIN_URL = "https://vast-crag-4022.herokuapp.com",
    API_VERSION = "v1",
    API_URL = DOMAIN_URL+"/api/"+API_VERSION,
    SET_API_KEY = function(key) {
        API_KEY = key;
        API_HEADERS = {
            'X-Authorization': API_KEY,
        };
    },
    API_CALL = function(type, url, data) {
        return $.ajax({
            url: API_URL + '/' + url,
            type: type,
            data: data,
            headers: API_HEADERS
        });
    };

(function() {
    $('.login.page').show();
})();


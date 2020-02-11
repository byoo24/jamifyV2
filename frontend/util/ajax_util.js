
const AJAX = {

    get(url) {
        return $.ajax({
            method: 'GET',
            url
        });
    },

    post(url, data) {
        return $.ajax({
            method: 'POST',
            url,
            data
        })
    },

    put(url, data) {
        return $.ajax({
            method: 'PUT',
            url,
            data
        })
    },

    delete(url) {
        return $.ajax({
            method: 'DELETE',
            url
        })
    }
}

export default AJAX;



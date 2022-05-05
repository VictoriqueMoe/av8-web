fetch('http://localhost:4444/api/bot/info')
    .then((response) => {
        return response.json();
    }).then((json) => {
        console.log(json);
    })
    .catch((error) => {
        console.error(error);
    })

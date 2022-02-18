export const userLogin = async (params) => {
    return fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify(params),
    }).then(response => response.json())
        .then(response => {
            if (response.token) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('authenticated', 'true');
                window.location.href = '/todos'
                console.log(response)
            }
        })
        .catch(err => {
        })
}
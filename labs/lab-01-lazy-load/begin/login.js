function login (email, password, callback) {
    // Call legacy-api to authenticate user
    const options = {
        method: "POST",
        url: `${configuration.LEGACY-AUTH-URL}/auth/email/login`,
        headers: { 
            "Content-Type": "application/json",
            Authorization: "bearer " // + M2M TOKEN
        },
        body: '{"email": "' + email + '","password": "' + password + '"}',
        timeout: Number(configuration.LEGACY-AUTH-TIMEOUT)
    };

    request(options, function(error, response, body) {
        if (error) return callback(error);

        if (response.statusCode === 200) {
            const authUserResponse = JSON.parse(body);

            let userObj = {};
            // populate userObj variable based on the response from the legacy-auth REST API call
            // your code goes here

            return callback(null, userObj);
        } else if (response.statusCode === 401) {
            return callback(new WrongUsernameOrPasswordError());
        } else if (response.statusCode === 403) {
            return callback(new Error(`Auth failure response from Legacy-api: ${response.statusCode} ${response.statusMessage}`));
        } else {
            return callback(new Error(`Unexpected response from Legacy-api: ${response.statusCode} ${response.statusMessage}`));
        }
    });
}

function getByUserName (email, callback) {
    // This script should retrieve a user profile from your existing database,
    // without authenticating the user.
    // It is used to check if a user exists before executing flows that do not
    // require authentication (signup and password reset).
  
    const username = email.trim();
    const options = {
        method: "GET",
        url: `${configuration.LEGACY-AUTH-URL}/users/email/${username}`,
        headers: {
            "content-type": "application/json",
            Authorization: + "bearer " // + M2M TOKEN
        },
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
        } else if (response.statusCode === 404) {
            return callback(null);
        } else {
            return callback(new Error(`Unexpected response from Legacy-api: ${response.statusCode} ${response.statusMessage}`));
        }
    });
}

# Automatic User Migration Lab (Lab 1)

## Purpose
Lab 1, Automatic Migration (lazy load) teaches students two things:
1. How to configure their Auth0 tenant to use a custom database connection so that it will attempt to migrate users from an external authentication system as they authenticate or reset their password
2. How to create two nodejs scripts:
   1. `login.js` - executes each time a user who is not found in the Auth0 database attempts to log in.  Verifies that the user exists in the legacy system without re-prompting the user for their password.
   2. `get_user.js` - executes following any of these user actions:
      1. a user attempts to sign up
      2. a user clicks on a valid password change confirmation link
      3. the Auth0 Management API receives a REST call to the [Update a User's Email or Username](https://auth0.com/docs/api/v2#!/Users/patch_users_by_id) resource
   
   If a user who has not been migrated initiates a password reset and confirms a password change, the user will be seamlessly migrated (their user profile will be created in Auth0 along with the new (reset) password).

## Infrastructure
In order to simulate a realistic scenario for accessing an existing, legacy authentication system, students will be supplied with a REST API that they can access via the action scripts that they create in this lab (see #2 above).  This REST API will provide an HTTP friendly method for accessing a supplied set of users and credentials in the 'legacy auth system'.  This API will support two resources (endpoints):
- `POST https://labs.auth0.com/user-migration/v1/email/login`
  - body: `{email: (email), password: (password)}`
  - headers:
    - `Content-Type` will require a value of `application/json`
    - `Authorization` will require a value consisting of a bearer token (machine-to-machine JWT - see below)
  - response: finish
- `GET https://labs.auth0.com/user-migration/v1/users/email/{email-address}`
  - headers:
    - `Content-Type` will require a value of `application/json`
    - `Authorization` will require a value consisting of a bearer token (machine-to-machine JWT - see below)
  - response: finish

### REST API security
To access the provided legacy authentication system's REST API, the student will be required to supply a bearer token because the two provided endpoints will both require a known user.  As part of the lab, each student will configure their Auth0 tenant with the following:
1. An API: using the Auth0 web console, the student will configure a new Auth0 API that represents the audience for the legacy-auth system REST API endpoints
2. An Application: using the Auth0 web console, the student will configure a new Auth0 application that will be configured to access the new Auth0 API.

Using the new Auth0 API & Application, the student will be instructed in how to acquire a machine-to-machine (M2M) JWT again using the Auth0 web console.  This M2M JWT will satisfy the authorization requirements of the two REST API endpoints.
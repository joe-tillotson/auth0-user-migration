# Lab 1 - Automatic Migration (Lazy Load)

## Intro
This lab will demonstrate two important concepts that are keys to correctly setting up Auth0 so that it automatically migrates users in a 'lazy load' fashion from an existing external (legacy) auth system:
1. How to configure Auth0 to use a custom database connection so that it will attempt to migrate users from an external authentication system as they authenticate or reset their password
2. How to write two nodejs scripts using JavaScript, that reach out to the external auth system by accessing two resources (endpoints) via its REST API
   1. Login - executes each time a user who is not found in the Auth0 database attempts to log in
   2. Get User - executes when any of these actions occur:
      1. user signup (checks if the user already exists in the external system)
      2. user password reset
      3. via automation, a call is made to the 'Auth0 Management API' to update a user's email address or username

### Auth0 Database Connection Configuration

### Action Scripts
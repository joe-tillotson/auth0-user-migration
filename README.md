# auth0-user-migration
This repo contains documented concepts, a lesson plan, and code in the form of labs that teach new adopters of Auth0 how to migrate their existing users from an existing authentication system and/or data store.  Another powerful concept that is covered is how to use Auth0 as a proxy to a legacy auth system / store.

## Introduction
When adopting Auth0 as an Identity Provider (IdP), it is common to consider how to best migrate existing users and their credentials.  Auth0 supports several mechanisms for migrating existing users' credentials and optionally user profiles.  In addition, Auth0 may act as a proxy in front of an existing authentication system or data store so that the users' credentials and other meta-data are maintained in this legacy system.

The various techniques supported by Auth0 to accomplish the above are listed below:

### Automatic or 'lazy' user migration
Automatic (often called 'lazy') user migration describes the technique whereby users are seamlessly migrated over time as they initially authenticate after this technique is implemented.  The rate at which users are migrated into Auth0 depends on the users' authentication behavior.

### Bulk user migration
Auth0 supports 2 primary methods for importing existing users in bulk:
1. using the [User Import/Export Extension](https://auth0.com/docs/extensions/user-import-export-extension)
2. using the [bulk import endpoint](https://auth0.com/docs/users/bulk-user-imports) provided by the Auth0 Management API V2

Both bulk methods support the import of user credentials, including user passwords, provided these passwords are hashed <URL goes here> using an algorithm supported by Auth0.  If passwords cannot be imported then the users will need to reset their password when logging in for the first time after the bulk import.

### Hybrid (using both lazy and bulk)
Both Automatic (lazy) and Bulk user migration techniques can be used simultaneously.  In other words, they are not not mutually exclusive.  One example is an organization that has multiple legacy systems and/or data stores whose users need to be migrated into Auth0.  One or more of these legacy systems may support bulk importing into Auth0, while other(s) may provide a more seamless user experience via lazy loading.

### Using Auth0 as a proxy
Another powerful concept supported by Auth0 is to use it as an authentication proxy in front of an existing authentication system and/or data store.  This allows the legacy sytem / store to continue to remain in place while allowing users to authenticate using the OAuth2 flows and features supported by Auth0.
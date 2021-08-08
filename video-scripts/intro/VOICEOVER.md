## Assumptions
At this point in the video-based training, the learner has already been exposed to the concept of Database Connections in Auth0.

## Voice over dialog
Adopting and implementing Auth0 as an Identity Provider (IdP) frequently involves moving away from and/or working with a pre-existing authentication system.  One option is to migrate existing users into Auth0 from a legacy system.  Another option is to configure Auth0 to act as a 'proxy' authentication API in front of a legacy system.  These two highest level options are not mutually exclusive.  In addition, there are more than one possible approaches to migrating existing users' auth meta-data into Auth0.

Picking the right approach(es), whether it be migrating existing users into Auth0 and/or configuring Auth0 to act as a proxy, is all about understanding the supported options and their tradeoffs:
- Automatic or 'lazy' user migration
- Bulk user migration
- A Hybrid of the two migration approaches
- Configuring Auth0 as a proxy

Here we see a decision diagram that can help us choose which choice or choices will likely prove to be the best approach.  We'll look at this diagram again as we dive into the various options:

### Insert here the first look at a 'Decision Tree Diagram'
This is a diagram that follows the yes/no questions which help to choose which user migration or proxy option(s) is or are recommended, based on an organization's existing user base and business and technical authentication needs.

Similar in concept to the diagram [located here](https://developer.okta.com/docs/concepts/oauth-openid/#what-kind-of-client-are-you-building) that helps to choose which OAuth2 grant type is best suited for a given application.

## Voice over dialog (continued)
First, let's look at how to migrate existing users into Auth0, and specifically the first 'sub-option', often referred to as Automatic or 'Lazy' user migration.

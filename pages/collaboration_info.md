# Collaboration

The collaboration features in Engine Yard AppCloud enable multiple members of a team to access multiple AppCloud environments. This is particularly useful for teams that need to maintain individual access to their AppCloud dashboard for each team member, and to enable and disable this access as required.

## New Concepts

The collaboration feature introduces 3 new concepts to Engine Yard AppCloud. These are:

  * Accounts
  * Users
  * Creator Users

### Accounts

An account is a container for a group of environments and users. If you are a current user of AppCloud and are not using the collaboration feature, your current set of environments is your account. Customers using the collaboration feature may be part of multiple accounts.

Your account now has a name that is unique across all of AppCloud. This allows you to clearly identify which account you would like to work with. You can edit the name of your account from your account settings page.

### Users

A user is a person with login credentials into Engine Yard AppCloud, and is currently identified by the login email address for that person. If you are a current user of Engine Yard AppCloud, your user entity already exists, and the identifier of that user is the email address.

Each user can be a part of multiple accounts, and can invite other users to an account. Similarly, each account contains multiple users, and each user has access to all the environments in that account.

### Creator User

The creator is the user who created the account by signing up with Engine Yard. This special user is responsible for billing for the account, has access to payment information.  Also, this is the only user who can cancel the account.

## Use Cases

The typical use cases for using the collaboration feature are:

### 1. Account Management

#### View Account Information

Click on the account link on the top bar to see the list of accounts the current user belongs to.

{{:appcloud:guides:environments:collaboration_1.jpg|}}

The accounts page lists each account, the creator for that account and some other summary information. You can manage each account by clicking on the account name to get to the account management screen.

{{:appcloud:guides:environments:appcloud-accounts-3.jpg?628|}}

On the account management screen for each account, you can edit the name of the account, change support level for the account, or add new users to this account.

### 2. User Management

#### Add New Users

Enter the email address of the new user you would like to add to the current account, and hit “Add User”. This will send an email invite to that account with a link to accept the invite. Once the recipient accepts the invite, they will show up on the list of members of this account, and their dashboard will show all the environments from this account.

#### Remove Users

You can remove a user from an account by going to the account management page (Dashboard > Accounts > Account Name) and clicking the “Remove” link next to the user in the Members area.

{{:appcloud:guides:environments:collaboration_2.jpg|}}

### 3. Working with Multiple Accounts

If a user is a part of multiple accounts, each environment from each account will be visible on their dashboard. Each environment will be grouped by the account name, and the user can deploy or modify any environment in any account they are a member of.

## Recommended Workflows

### Maintaining Multiple Customers

Many Engine Yard customers develop applications for multiple consumers simultaneously. These consumers might be external customers, or separate internal applications. In such situations, having common credentials that can be used across each account is useful for customers. The following is a recommended workflow for these use cases:

  - Create a new account for each customer. You can do so by [signing up](http://cloud.engineyard.com). This will create a new creator user, which is the administrator user for this account. **NOTE: If you already have existing accounts that you would like to collaborate with, skip this step.** 
  - In the new account, go to the accounts section and add developers to the account. If the developers already have Engine Yard credentials, they can accept the invitation under whatever account they’re signed in as. You can also add new users to each account.  Simply add their email information and they will receive an invitation to open a new account.
  - If you would like to hand off the project to your customer, give them credentials for the creator account, and remove any members that are no longer need access from the Accounts page.

The email invitation sent to a user can be accepted only once. However, we do not bind the invitation link to the email address it was originally sent to. This enables users who have existing AppCloud accounts to accept invitations sent to other email addresses that they own. Any member of an account can also rescind an invite by simply removing it on the Account Management page.

### Maintaining Multiple Developers

Each developer is tasked with managing their own ssh keys. They cannot see anyone else’s keys. When you add your keys to an environment, you will not affect anyone else on that environment.

Learn more about [managing your ssh keys](env_ssh_keys) on our docs site.

## Frequently Asked Questions

### Can we assign specific permissions to individual users in each account?

Currently there are no per-user permissions in Engine Yard AppCloud.  Each user for an account has access to all environments on that account. The only special permissions are the ability to change payment information and cancel the account, which is granted to the creator user.

### Can we change the creator user for an account?

At this point, we do not support reassigning the creator user for an account.

### Are there other caveats we should be aware of during the beta program?

The following are known issues that we will be fixing soon:
  * Certain pages have not been fully adapted to work for collaboration accounts. This only means some pages will only be accessible for the creator.
  * Your Dashboard may become a little cluttered. We’re working on ways to improve this, but we want users using the new collaboration features before we worry too much about looks.
  * The engineyard CLI gem needs to be upgraded to handle multiple accounts. Please get the newest version of the CLI. Using an old version of the CLI can cause errors if you have the same application or same environment name on two accounts to which you have access.  Run `sudo gem update engineyard` to install the latest gem.
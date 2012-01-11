# Collaboration features on Engine Yard Cloud

The collaboration features in Engine Yard Cloud enable multiple members of a team to access multiple environments. This is particularly useful for teams that need to maintain individual access to their Dashboard for each team member and to enable and disable this access as required.

## Concepts

The collaboration feature introduces three new concepts to Engine Yard Cloud. These are:

  * Accounts
  * Users
  * Creator Users

### Accounts

An account is a container for a group of environments and users. If you are a current user but are not using the collaboration feature, your current set of environments is your account. Customers using the collaboration feature may be part of multiple accounts.

Your account now has a name that is unique across all of Engine Yard Cloud. This allows you to clearly identify the account you want to work with. You can edit the name of your account from your account settings page.

### Users

A user is a person with login credentials into Engine Yard Cloud and is currently identified by the login email address for that person. If you are a current user, your user entity already exists and the identifier of that user is the email address.

Each user can be a part of multiple accounts and can invite other users to an account. Similarly, each account contains multiple users, and each user has access to all the environments in that account.

### Creator user

The creator is the user who created the account by signing up with Engine Yard. This special user is responsible for billing for the account, has access to payment information.  Also, this is the only user who can cancel the account.

## Use cases

The typical use cases for using the collaboration feature are:

### 1. Account management

#### View account information

Click on the account settings link on the top bar to see the list of accounts the current user belongs to.


<img src="/images/collaboration/collab-nav-link.jpg" alt="Account Settings Link" width="700" />

The accounts page lists each account, the creator for that account and some other summary information. You can manage each account by clicking on the account name to get to the account management screen.

<img src="/images/collaboration/collab-account-list.jpg" alt="Engine Yard Cloud List of Accounts" width="700" />

On the account management screen for each account, you can edit the name of the account, change support level for the account, or add new users to this account.

### 2. User management

#### Add new users

Enter the email address of the new user you want to add to the current account, and click Add User. This sends an email invitation to that account with a link to accept the invitation. After the recipient accepts the invitation, they appear on the list of members of this account and their Dashboard shows all the environments from this account.

<img src="/images/collaboration/collab-invite.jpg" alt="Invite Collaboration User" width="700" />


#### Remove users

You can remove a user from an account by going to the account management page (Account > Account Settings > Account Name) and clicking Remove next to the user in the Members area.

<img src="/images/collaboration/collab-delete.jpg" alt="Remove Collaboration User" width="700" />


### 3. Working with multiple accounts

If a user is a part of multiple accounts, each environment from each account will be visible on their Dashboard. Each environment is grouped by the account name, and the user can deploy or modify any environment in any account they are a member of.

## Recommended workflows

### Maintaining multiple customers

Many Engine Yard customers develop applications for multiple consumers simultaneously. These consumers might be external customers or separate internal applications. In such situations, having common credentials that can be used across each account is useful for customers. The following is a recommended workflow for these use cases:

  - Create a new account for each customer. You can do so by [[signing up|http://cloud.engineyard.com]]. This creates a new creator user, which is the administrator user for this account. **Note:** If you already have existing accounts that you would like to collaborate with, skip this step. 
  - In the new account, go to the accounts section and add developers to the account. If the developers already have Engine Yard credentials, they can accept the invitation under whatever account they are signed in as. You can also add new users to each account. Add their email information and they receive an invitation to open a new account.
  - If you want to hand off the project to your customer, give them credentials for the creator account and remove any members who no longer need access from the Accounts page.

The email invitation sent to a user can be accepted only once. However, we do not bind the invitation link to the email address it was originally sent to. This enables users who already have accounts to accept invitations sent to other email addresses that they own. Any member of an account can also rescind an invitation by removing it on the Account Management page.

### Maintaining multiple developers

Each developer is tasked with managing their own ssh keys. They cannot see anyone else's keys. When you add your keys to an environment, you do not affect anyone else on that environment.

Learn more about [[managing your ssh keys|env_ssh_keys]] on our docs site.

## Frequently asked questions

### Can we assign specific permissions to individual users in each account?

Currently there are no per-user permissions in Engine Yard Cloud.  Each user for an account has access to all environments on that account. The only special permissions are the ability to change payment information and cancel the account, which is granted to the creator user.

### Can we change the creator user for an account?

At this point, we do not support reassigning the creator user for an account.
# Set the time zone for an instance

## Steps to change the time zone:

1.  Identify the desired time zone inside `/usr/share/zoneinfo`. <br />
    It may be common name like `EST5EDT` or identified by a popular city 
    belonging to the time zone (e.g., `Australia/Sydney`).

2.  Create or overwrite the symbolic link `/etc/localtime` pointing to the 
    one identified above: `ln -sf /usr/share/zoneinfo/Australia/Sydney /etc/localtime`

Newly created processes will now respect the new time zone. It is also a 
good idea to "Update instances" in your Dashboard.

To make this change persist when a new instance is created, we suggest 
putting the command to create a symbolic link in Step 2 above in a deploy 
hook (anything **except for** ''after_restart'' hook will do). 
See [[How To Use Deploy Hooks|use-deploy-hooks-with-engine-yard-cloud]] for 
help with deploy hooks.

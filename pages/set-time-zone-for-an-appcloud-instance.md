# HOWTO Set time zone for an AppCloud instance

To change the time zone for an AppCloud instance, first identify the desired time zone inside `/usr/share/zoneinfo`. It may be common name like `EST5EDT` or identified by a popular city belonging to the time zone (e.g., `Australia/Sydney`).

Then, create or overwrite the symbolic link `/usr/share/zoneinfo/localtime` pointing to the one identified above:

    ln -sf /usr/share/zoneinfo/Australia/Sydney /usr/share/zoneinfo/localtime

Newly created process will respect the new time zone. It is a good idea to "Update instances".

To make this change persist when a new instance is created, we suggest putting the `ln` command in a deploy hook (anything **except for** ''after_restart'' hook will do). (See [HOWTO Use Deploy Hooks with Engine Yard AppCloud](use-deploy-hooks-with-engine-yard-appcloud).
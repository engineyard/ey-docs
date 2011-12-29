# Set the time zone for an instance
Our instances are set up in the "PST8PDT" timezone by default. Based on your
location, you may want to change this so timestamps in your logs match your timezone.

## Steps to change the time zone:

1.  Identify the desired time zone inside `/usr/share/zoneinfo`. <br />
    It may be common name like `EST5EDT` or identified by a popular city belonging to the time zone (e.g., `Australia/Sydney`).

2.  Add this cookbook to your custom recipes: [[https://github.com/engineyard/ey-cloud-recipes/tree/master/cookbooks/timezone]] and modify it with the correct timezone that you wish to use, as per the README instruction.


See [[Custom Chef Recipes]] for further instructions on using custom recipes.

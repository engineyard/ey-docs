# Application Maintenance Pages

Engine Yard provides a default maintenance page, but you are encouraged 
to customize them to suit your application. Further, you could even change 
your maintenance page on every deploy to give deploy-specific feedback 
(e.g. "we are doing a database upgrade, please sit tight"). 

When a rollback is performed the maintenance page used will be the one 
contained in the latest deploy.  This prevents showing users a message from 
an old deploy.

## Priority
When a maintenance page is requested to be displayed, AppCloud will look for
html files and display them in the following priority:

1. `public/maintenance.html.custom`
2. `public/maintenance.html.tmp`
3. `public/maintenance.html`
4. `public/system/maintenance.html.default`

## Commands
To enable or disable your maintenance pages, you will need to use the [[Engine Yard CLI|ey_cli_user_guide]]
and run the following commands:

- ### Enable your maintenance page      
      ey web enable
- ### Disable your maintenance page
      ey web disable

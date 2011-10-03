# Application maintenance pages

Engine Yard provides a default maintenance page, but you are encouraged 
to customize them to suit your application. Further, you can even change 
your maintenance page on every deploy to give deploy-specific feedback 
(e.g. "we are doing a database upgrade, please sit tight"). 

When a rollback is performed, the maintenance page used is the one 
contained in the latest deploy.  This prevents showing users a message from 
an old deploy.

## Priority
When a maintenance page is requested to be displayed, Engine Yard Cloud looks for
HTML files and displays them in the following priority:

1. `public/maintenance.html.custom`
2. `public/maintenance.html.tmp`
3. `public/maintenance.html`
4. `public/system/maintenance.html.default`

## Commands
To enable or disable your maintenance pages, use the [[Engine Yard CLI|ey_cli_user_guide]]
and run the following commands.

- Enable your maintenance page:        
        `ey web enable`
- Disable your maintenance page:  
        `ey web disable`

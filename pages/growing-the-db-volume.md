# Growing the /db Volume

If your database outgrows the current available space on your `/db` volume you'll have to grow the volume. You can follow the same steps if you need to grow the `/data` volume on your application or utility instances as well.

## Step-by-Step Instructions

  - Terminate your currently running instance by clicking the **Terminate** button located at the top of the environment. When this is done we'll snapshot both your `/data` and `/db` volumes for you. 
  - Once the instances spin down click the **Boot** button from the top of the environment.
  - Choose the **Custom** radio button.
  - Choose the number of app instance, utility instances and database instances. Be sure to select the proper instance size for each.
  - Choose the most recent snapshots from the drop-downs. This will ensure you get your most recent data from when you terminated. If any snapshots are still pending we'll indicate so in the dropdown.
  - Resize any volume that you want to grow. When the environment boots back up this volume will be automatically resized for you.
  - Click the Boot This Configuration button from the bottom of the page.

When the environment is back up, you'll have your newly sized `/db` and/or `/data` volumes.

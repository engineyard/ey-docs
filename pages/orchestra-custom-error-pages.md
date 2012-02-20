# Custom Error Pages

As web-application development is rarely an exact science and errors often happen, users are likely to see a 404 error eventually. Orchestra allows you to define custom 404 pages and custom 50x pages.

# <a name="synopsis"></a>Synopsis

As custom error pages are a big part of most systems, developers do not always want to have the default Nginx plain white "404" page to be displayed to their users. In order to allow our users to have their own custom pages, a few steps have to be taken. Please move to <a href="#create-addon-repo">Create the Addon in your Repo</a>.

# <a name="create-addon-repo"></a>Create the Addon folder in your Repo

The custom error pages are based on filesnames. The system automatically identifies the files `404.php` and `50x.php` from the `addons/error/` directory and runs them if they exist.

To get the files added to your repository, please follow those steps:

  1. `cd app_repo`
  2. `mkdir -p addons/error`
  3. `touch addons/error/404.php` and `touch addons/error/50x.php`
  4. `echo '404 Help me...' > addons/error/404.php`
  
Once the file has been added to your directory, the system will automatically pick it up. Of course you need to make sure that you add this file to your repository and commit/push it.

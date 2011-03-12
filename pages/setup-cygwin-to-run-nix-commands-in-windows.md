# Setup Cygwin to Run *NIX Commands in Windows

## Why Use Cygwin?

If your primary operating system is Windows, you may find that sometimes running the native "Ruby 1 Click Installer" can lead to many frustrating searches in different mailing lists when you encounter problems.  So you can install [Cygwin](http://cygwin.com) and then running the *NIX based commands we describe in our articles will work for you.

So Cygwin isn't required to deploy to AppCloud, but we recommend it.

## Download Cygwin

Go to [[http://cygwin.com]] and download the **setup.exe** file.

![Figure 1](images/cywgin_download_normal.png)

Right click and save the **setup.exe** file.  You run the **setup.exe** every time you want to make changes to the packages installed in the Cygwin environment.

## Prepare to Install Cygwin

There are many steps you need to go through just to pick the packages you want in your Cygwin environment.

1. Double click on the setup.exe file and click **Next** past the initial screen.
2. Choose **Install from Internet**, click **Next**.
3. Leave the root directory as `C:\cygwin`, and leave the **Install For** and **Default Text File Type** options with the defaults and click **Next**.
4. Change the Local Package Directory to, `C:\cygwin\packages`, then click **Next**.
5. On the Select Your Internet Connection page, you may need to change this based on your connection, but for most users **Direct Connection** is fine, click **Next**.
6. You can select any of the Download Sites, but http links will generally be faster.  Choose a location and click **Next**.

Now you're to the Select Packages page.  From here we'll select some specific packages that will help you connect and deploy to your instances.

![Figure 2](images/cygwin_intitial_packages_normal.png)

By default they have organized all the packages by Category.  The options are Category, Full, Partial, Up To Date, Not Installed.  Here's the help text to explain what each of those views present:

![Figure 3](images/cygwin_view_button_help_normal.png)

## Choose Packages for Cygwin

The default options will include all you need to run a bash terminal.  But we'll want to get some great packages for you that will help you deploy from the Cygwin environment.

Under Devel, choose gcc-core. (This is used to help compile native extensions for certain rubygems.)  
Under Devel, choose make. (Also used to help you compile native extentions.)  
Under Devel, choose ruby. (The standard MRI for cygwin.)  
Under Devel, choose subversion. (Optional, use subversion if your repo is in SVN.)  
Under Devel, choose git. (Optional, use git if your repo is in git.)  
Under Editors, choose nano. (For quick text editing of files, vim and emacs also available.)  
Under Net, choose openssh. (We'll use this to make a secure shell aka "SSH" connection to your instance.)  
Under Web, choose wget. (For downloading files via command line.)  

Click **Next** to begin downloading packages for the installer to add to your Cygwin environment.

**Note:** Remember, you can always run **setup.exe** later to add/remove packages.

The final page called Create Icons will create Cygwin icons for your desktop or in your Start Menu.  Remember which choice you make, we'll need it in the next section.

## Run the Cygwin Shell

Use the Cygwin icon (on the Desktop or in your Start Menu) to start the Cygwin bash shell, and you'll get a beautiful green text on black background with a blinking prompt!

![Figure 4](images/cygwin_bash_shell_normal.png)
# Automated jobs

Orchestra allows you to define Automated Jobs better known as **Cronjobs**. In order to use Automated Jobs, please read the following points.

# <a name="enabling-the-addon"></a>Enabling the Addon

Before anything else, users need to enable the addons on their account. To do so, go to https://my.orchestra.io/addons and enable the **Automated Jobs** addon:

![addon-automated-jobs.png](/images/o-automated-jobs-1.png)


Once the addon is enabled, please read the <a href="#synopsis">synopsis</a> as it explains how we approached and enabled **Automated Jobs** with Orchestra.

# <a name="synopsis"></a>Synopsis

As automated jobs are a big part of most PHP systems, we had to come up with a solution on how to provide our users with **cronjobs**. Our approach is the one of using named-based automated jobs based on the files added to the custom `addons/orchestra/cron` directory in your repository. Please start reading how to <a href="#create-addon">create the addon in your repository</a> section and it should start making sense. Should you have any question, feel free to ask us and <a href="http://docs.orchestra.io/discussions/questions#new_topic_form">start a discussion</a>.
  

# <a name="create-addon"></a>Create the Addon in your Repo

The Automated Jobs system is based on filenames. If the system identifies the files `hourly.php`, `daily.php`, `weekly.php` and `custom.php` from the **addons/orchestra/cron** directory in your repository, it will run them. 

In order to have those files in your repository, follow these steps:

  1. `cd app_repo`
  2. `mkdir -p addons/orchestra/cron`
  3. `touch addons/orchestra/cron/hourly.php`
  
Once your `hourly.php` file has been added to your repository, you need to add the Orchestra structure:

<pre><code>&lt;?php
/**
 * The cron hourly script.
 */
class Cron_Hourly
{
    /**
     * The file to execute from your repository
     *
     * This is the file I want to execute in my
     * current git repository and I want to execute
     * this file every hour hence the Cron_Hourly
     */
    public $path = '/crons/hourly.php';

    /**
     * The arguments to pass
     *
     * This is a list of arguments to pass ot the
     * cronjob script I want to execute.
     *
     * This variable has two main formats. Either
     * you pass a simple list or you can pass an
     * associated array.
     *
     * Imagine you want to execute:
     * php crons/example.php -a A -b B
     *
     * Then the args will be:
     * $args = array('-a' => 'A', '-b' => 'B')
     *
     * If you want to execute
     * php crons/example.php one foo bar
     *
     * Then the $args will look like:
     * $args = array('one', 'foo', 'bar')
     */
    public $args = array();
}
</code></pre>

[see the gist of this code](https://github.com/davidcoallier/Sample-PHP/blob/master/addons/orchestra/cron/hourly.php)

To keep it simple, every file contains a class named after its type. The hourly automated job is called **hourly.php** and its class name is `Cron_Hourly`, the daily automated job is called **daily.php** and its class name is `Cron_Daily` and so on for the other types. 

Each class contain 2 properties. The first one is `$path`. As the name suggests, this is the path to a script to execute in your repository. The second is `$args`. It's an array of arguments to pass to the script to run that is located at the ***$path***. 

So if you have an executable script in your repository at the location **cronjobs/sendbatchemail.php** that requires no parameters but only requires being invoked every day, your **addons/orchestra/cron/daily.php** file would contain a class called `Cron_Daily` with the two variables ***$path*** and ***$args***. ***$path*** would be set to `cronjobs/sendbatchemail.php` because it is the script to run, and ***$args*** would be set to `array()` because no arguments are required by the script.

Another use-case would be having a script located in **scripts/email.php** that requires the parameter **--types** with the value **User** and that has to be ran every 15 minutes. You would then add the **addons/orchestra/cron/custom.php** file to your repository with the following content:

<pre><code>&lt;?php
class Cron_Custom
{
    public $path = '/scripts/email.php';
    public $args = array('--types' => 'User');
}
</code></pre>

This Automated Job system would identify your **addons/orchestra/cron/custom.php**, invoke its ***Cron_Custom*** class and then would run the **script/email.php** with the `--types User` argument every fifteen minutes. This would be the equivalent of running:

>
> php path/to/repo/script/email.php --types User
>


***Make sure to add and commit/push the newly created addon files to your repository otherwise the system will not be able to pick them up***

# <a name="hourly"></a>Hourly Jobs

Located in **addons/orchestra/cron/hourly.php** containing a class named ***Cron_Hourly*** this Automated Job is ran every hour.

# <a name="daily"></a>Daily Jobs

Located in **addons/orchestra/cron/daily.php** containing a class named ***Cron_Daily*** this Automated Job is ran every day.

# <a name="weekly"></a>Weekly Jobs

Located in **addons/orchestra/cron/weekly.php** containing a class named ***Cron_Weekly*** this Automated Job is ran every week.

# <a name="custom"></a>Custom Jobs

The custom addons are the most interesting of the addons. They are ran every 15 minutes.

Located in **addons/orchestra/cron/custom.php** containing a class named ***Cron_Custom*** this Automated Job is ran every 15 minutes.

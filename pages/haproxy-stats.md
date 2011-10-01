# View your HAProxy stats

In order to gain a better picture of the current availability of your application, we generate a password so you can securely review your HAProxy stats for your application cluster.

**Note:** You must be running at least two application instances to view HAProxy stats.

Your password is generated for each environment you've got running.

## How to display HAProxy stats

  - Click on the **More Options** tab of the environment
  - You will see a link to **HAProxy Stats** listed here (unless you are not running multiple app instances in this environment)

Upon clicking the link, you'll be greeted with a page full of information recorded by HAProxy on the current connections.

![HAProxy Stats](images/haproxy_stats.jpg)

Just refresh the page to get the latest stats.

## Further reading

Go to [[HAProxy's documentation|http://haproxy.1wt.eu/#docs]] for more information how to interpret the stats.



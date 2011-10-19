# View your HAProxy stats

In order to gain a better picture of the current availability of your application, we generate a password so you can securely review your HAProxy stats for your application cluster.

**Note:** You must be running at least two application instances to view HAProxy stats.

Your password is generated for each environment you've got running.

## To display HAProxy stats

1. Navigate to the Environment page.  

2. Click the HAProxy Stats link.  
    The link only appears if you are running multiple application instances in this environment.  
    A page of information recorded by HAProxy on the current connections appears.

    ![HAProxy Stats](images/haproxy_stats.jpg)

3. Refresh the page to get the latest stats.

## Further reading

Go to [[HAProxy's documentation|http://haproxy.1wt.eu/#docs]] for more information how to interpret the stats.



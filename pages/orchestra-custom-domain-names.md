# Custom Domain Names

Orchestra Basic and Elastic applications allows developers and companies to have their own Domain name associated with the service. 

Two simple steps have to be taken in order to have your custom domains. First, set your <a href="#app-domain">application domain name</a> and then <a href="#dns-setup">configure your DNS with your provider</a>. 

# <a name="app-domain"></a>Application Domain Name
When deploying a Basic or Elastic application using Orchestra, you are asked for a **domain** name. You need to enter your **domain** name in this field. 

Once you've deployed your application with a custom domain name, you need to <a href="#dns-setup">add the DNS</a> information to your domain name provider.

# <a name="dns-setup"></a> DNS Setup
When you deploy an application, Orchestra generates a custom subdomain for you. This subdomain may look like **app_name.orchestra.io**. 

You can use this generated subdomain as your **entry point** to our system. In your DNS provider, add a new CNAME entry for the domain name you want and point it to your **app_name.orchestra.io**. 

Should you wish to use an A record for your top level domain name, you can point your A record to 

> 184.73.196.85

If you are running an Elastic application, we recommend you look at <a href="#elastic-dns">the following section</a>.

# <a name="elastic-dns"></a>Elastic DNS

When you launch an Elastic application, you are approvisioned with what is called a **dedicated load-balancer**. You do not need to know the ins-and-outs of how the **dedicated load-balancer** works but it is important for you to know that if our service, for some unforeseen reason, would have to go down and stop responding, you can point your DNS information to your dedicated load-balancer address. 

Whenever you launch an Elastic application, you will see the **Load Balancer** address in  your dashboard. Should anything happen with our service, you still have an independent, dedicated and completely redundant load-balancer that will continue to operate even though our service would be interrupted. We suggest you add an extra CNAME that points to the generated **dedicated load-balancer** when configuring your DNS information.  

This is only for precautionary purposes but we would rather have our users fully ready for any eventualities. If you have any question, feel free to ask us by starting a <a href="/discussion/new?discussion[title]=Elastic+DNS+Question">new discussion</a>.
# FRAPI

Running FRAPI on Orchestra

The Orchestra platform allows you to deploy your FRAPI, developer facing API to the public. 

As Orchestra does not yet support multiple-subdomains per application, it is not possible to run both the FRAPI administration interface *and* the developer facing API simultaneously. Moreover, on a regular basis and on production environments, we strongly discourage people from running the FRAPI administration interface as it gives access to very sensitive data. 

The FRAPI administration interface should only be used internally when developing your APIs. 

If you would like to deploy this application, please follow these steps:

  1. Go to your Orchestra dashboard and click on **Deploy new App**
  2. Copy `git://github.com/orchestra-io/sample-frapi.git` into your **Repo URL**
  3. Set your **Index File** to `frapi/src/frapi/public/index.php`
  4. Click on **Launch**

Once your application is deployed, go to your application URL and you will see a 404 error page telling you that this is an invalid action. This means that FRAPI is happily running. You can try accessing: http://yourapp.orchestra.io/testing/1.printr or 

> curl http://yourapp.orchestra.io/testing/1 -H 'Accept: application/json'

This will return the json content of the action **Testing1**.

# <a name="special-care"></a>Special Care
If you are running on a **Free App** the caching adapter is set to **dummy** in the FRAPI `custom/Allfiles.php`. When you run this on a **basic** or an **elastic** app, you should make sure to set the  **Cache Adapter** constant to **apc**

# <a name="leader-word"></a>A word from the Project Leader

FRAPI isn't your average web-applications framework and we are thrilled to be seeing it run on Orchestra. FRAPI is built with one thing and only one thing in mind. Allow developers to easily create Highly Performant RESTful APIs. It provides developers with the tools (Administration interface) required to give the developers a head start and also, deploying on Orchestra is <a href="https://orchestra.tenderapp.com/kb/frameworks/frapi">easy as pie</a>. Deploy this as an Elastic Application on Orchestra.io and you get a highly available, performant auto-scaling API at your fingertip.

We invite your to visit our [project page](http://getfrapi.com) and if you have any question about the framework and how to use it, you can always join us on [IRC](irc://frapi@freenode.org) for friendly discussions.


# <a name="framework-information"></a>Framework Information

  * **IRC**: [#frapi](http://webchat.freenode.net/?nick=frapi-orchid&channels=frapi&uio=d4)
  * **Website**: [Project Website](http://getfrapi.com) 

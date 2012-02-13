# How to obtain and installing SSL certificates for applications

This page describes how to obtain an SSL certificate from a third-party vendor and how to install the certificate on an Engine Yard Cloud environment. 

This page also describes how to use a self-signed SSL certificate. A self-signed certificate is a good choice for a staging or development environment where you want to test SSL features, but aren't ready to purchase an SSL certificate. 




*In order to install a SSL certificate on Engine Yard Cloud's platform you'll need to generate a request and key file.  You'll take that request and key file to your vendor who will give you the actual certificate file back, which you'll bring back to this document and we'll step you through how to install it on the system.*

**Question:** This original text (above) sounds like a procedure, but maybe it is a workflow. 

###To install an SSL certificate on Engine Yard Cloud

1. Choose a vendor.
2. Generate a request and key file.  
2. Take the request and key file to your vendor.  
3. Receive the actual certificate file back from vendor.  
    **Question:** Do I give the actual certificate file to the vendor? It says I get it *back* from the vendor which implies I must have given it to the vendor in order to get it back. Are there other certificate files that aren't actually certificate files?   
4. Install the actual certificate file on the system.  
    **Question:** What is the relationship between the "platform" and the "system" and "Engine Yard Cloud"? 
    
---               

<h2 id="topic3"> Types of certificates</h2>

**Question:** What is the purpose of telling me these types of certificates? Why do I need this information? How do I choose? If I expect to have only one application running on my domain, then I use a singe domain? and if I have more than one application, then I should use a wildcard domain.  

Engine Yard supports single domain and wildcard domain certificates.   
**Important!** Engine Yard **does not** support multiple domain certificates. 

<table>
	  <tr>
	    <th>Certificate type</th><th>Example</th>
	  </tr>
	  <tr>
	    <td>Single domain</td><td>https://www.mydomain.com</td>
	  </tr>
	  <tr>
	    <td>Wildcard domain<br>(single domain, with subdomains)</td><td>https://www.mydomain.com<br>https://mydomain.com<br>https://app.mydomain.com<br>https://help.mydomain.com</td>
	  </tr>
	  <tr>
	    <td>Multiple domain,<br>also called UCC (Unified Communications Certificate)</td><td>https://www.mydomain.com<br>https://www.myotherdomain.com<br>https://www.yourdomain.com</td>
	  </tr> 
</table>



---

## Prerequisite: A vendor

The workflow described on this page assumes that you have chosen a vendor to host your certificate. 
If you haven't yet chosen a vendor, consider reviewing this Wikipedia article [comparing SSL certificates](http://en.wikipedia.org/wiki/Comparison_of_SSL_certificates_for_web_servers). 

Here are some vendors who have hosted certificates deployed on Engine Yard Cloud:  
<div class="split">
  <div class="col col-first">
    <ul>
  	     <li>
		  <a href="http://www.comodo.com/">Comodo</a>
		 </li>
		 <li>
			<a href="http://www.entrust.com/">Entrust</a>
		 </li>
		 <li>
			<a href="http://www.godaddy.com/">Go Daddy</a>
		 </li>
		 <li>
			<a href="(http://www.thawte.com/">Thawte</a>
		 </li>								    	 
    </ul>   
  </div>  
  <div class="col col-last">
    <ul> 
       	<li>
	      <a href="http://www.digicert.com/">DigiCert</a>
	    </li>
	    <li>
	     <a href="http://www.geotrust.com/">GeoTrust</a>
	    </li>
	    <li>
		 <a href="http://www.rapidssl.com/">RapidSSL</a>
	    </li>  	  
	    <li>
         <a href="http://www.verisign.com/">VeriSign</a>
        </li> 
    </ul>
  </div>
</div>


---

## Prepare your files to take to your vendor

**Question:** What's the relationship between "a key and a signing request" and the "request and key file" mentioned above?

**Question:** How do you take your files to your vendor? Sounds like you have to physically show up at the vendor's place of business. Why don't you *send* files to your vendor? 

### To prepare files to take to your vendor  

1. Generate a private key file. 

### Generate your private key file

*Note: Certificates on Engine Yard Cloud cannot have a passphrase.  So we'll generate it without one.*

Run this command to generate a key file with no passphrase.

    $ openssl genrsa -out mydomain.com.key 2048

**Important!** If you have already generated a key file with a passphrase, see [Removing a passphrase from a key file][9] below to remove it.

### Generate your CSR (Certificate Signing Request) file

The certificate signing request file will contain the information that users will see when they click for more information about your SSL certificate. Here's the command you'd run to generate that file.

    $ openssl req -new -key mydomain.com.key -out mydomain.com.csr
 
When it asks your "Common Name" it's asking for your website's domain name, i.e. `www.mydomain.com` as you can see in the example below:

    You are about to be asked to enter information that will be incorporated into your
    certificate request.
    What you are about to enter is what is called a Distinguished Name or a DN.
    There are quite a few fields but you can leave some blank
    For some fields there will be a default value,
    If you enter '.', the field will be left blank.
    ------
    Country Name (2 letter code) [AU]:US
    State or Province Name (full name) [Some-State]:Washington
    Locality Name (eg, city) []:Seattle
    Organization Name (eg, company) [Internet Widgits Pty Ltd]:Your Company
    Organizational Unit Name (eg, section) []:
    Common Name (eg, YOUR name) []:mydomain.com
    Email Address []:your.email@address.com

### Wildcard example commands

If you were going to do a Wildcard domain instead of a Single Site domain, a convention Engine Yard has used to signify this has been to change the file name with a preceding underscore:

    $ openssl genrsa -out _.mydomain.com.key 2048
    $ openssl req -new -key _.mydomain.com.key -out _.mydomain.com.csr

### Files ready for vendor

Now you should have the following two files in the folder you ran the command in:

  * `mydomain.com.key` - the private key
  * `mydomain.com.csr` - the certificate signing request
  
Or for Wildcard domains:
  
  * `_.mydomain.com.key` - the private key
  * `_.mydomain.com.csr` - the certificate signing request

### Purchase a certificate

You have your two files, now you can purchase your certificate.  Here's some helpful advice when setting up your certificate with your vendor.
 
IMPORTANT: Always use a plain text editor like Notepad on Windows or equivalent on Mac or Linux, to copy and paste the contents of the `.key` and `.csr` files into the form fields.

Also some other tips:

  * When presented with server type: Choose Apache.
  * You will get at least `.crt` file back from the vendor.
  * You might also get a "certificate chain file".  Make sure to grab this.

---

#BEFORE

## Prepare your files to take to your vendor

In order to go to your vendor and get a Single Domain certificate or a Wildcard certificate, you'll need both a key and a signing request.

### Generate your private key file

*Note: Certificates on Engine Yard Cloud cannot have a passphrase.  So we'll generate it without one.*

Run this command to generate a key file with no passphrase.

    $ openssl genrsa -out mydomain.com.key 2048

### Generate your CSR (Certificate Signing Request) file

The certificate signing request file will contain the information that users will see when they click for more information about your SSL certificate. Here's the command you'd run to generate that file.

    $ openssl req -new -key mydomain.com.key -out mydomain.com.csr
 
When it asks your "Common Name" it's asking for your website's domain name, i.e. `www.mydomain.com` as you can see in the example below:

    You are about to be asked to enter information that will be incorporated into your
    certificate request.
    What you are about to enter is what is called a Distinguished Name or a DN.
    There are quite a few fields but you can leave some blank
    For some fields there will be a default value,
    If you enter '.', the field will be left blank.
    ------
    Country Name (2 letter code) [AU]:US
    State or Province Name (full name) [Some-State]:Washington
    Locality Name (eg, city) []:Seattle
    Organization Name (eg, company) [Internet Widgits Pty Ltd]:Your Company
    Organizational Unit Name (eg, section) []:
    Common Name (eg, YOUR name) []:mydomain.com
    Email Address []:your.email@address.com

### Wildcard example commands

If you were going to do a Wildcard domain instead of a Single Site domain, a convention Engine Yard has used to signify this has been to change the file name with a preceding underscore:

    $ openssl genrsa -out _.mydomain.com.key 2048
    $ openssl req -new -key _.mydomain.com.key -out _.mydomain.com.csr

### Files ready for vendor

Now you should have the following two files in the folder you ran the command in:

  * `mydomain.com.key` - the private key
  * `mydomain.com.csr` - the certificate signing request
  
Or for Wildcard domains:
  
  * `_.mydomain.com.key` - the private key
  * `_.mydomain.com.csr` - the certificate signing request

### Purchase a certificate

You have your two files, now you can purchase your certificate.  Here's some helpful advice when setting up your certificate with your vendor.
 
IMPORTANT: Always use a plain text editor like Notepad on Windows or equivalent on Mac or Linux, to copy and paste the contents of the `.key` and `.csr` files into the form fields.

Also some other tips:

  * When presented with server type: Choose Apache.
  * You will get at least `.crt` file back from the vendor.
  * You might also get a "certificate chain file".  Make sure to grab this.

---

## Adding certificates to an application

In general, you follow these three steps to add your certificate to any application:

  1. Add the certificate to Engine Yard Cloud.
  2. Choose which certificate to apply in a given application.
  3. Hit **Apply** to deploy your certificate to that application.

If your coming back to this doc because you've got your certificate file and ready to <a href="#SSL1">1a. Add a certificate</a> then get proceed there to get the certificate in the system.

Otherwise we also outline the steps below on how you can <a href="#SSL2">1b. Generate a self-signed certificate</a> to use on either staging or development applications.

<h3 id="SSL1">1a. Add a certificate</h3>

1\. Click on the **SSL Certificates** section under *Server Tools* on the left.

2\. Now click on the button **Add SSL Certificate** in the top right.

The Create New SSL Certificate page appears.

![SSL Cert](images/cloudsslcertificates.jpg)

3\. Give your SSL certificate a name.  Use the **SSL Certificate Name** field.

4\. Click on **Upload SSL Certificate** radio button.

5\. Paste in your certificate in the **SSL Certificate** text area.

6\. Paste in your key in the **SSL Certificate Key** text area.

7\. Optionally you may need to add a **SSL Certificate Chain**.

8\. Click **Add Certificates** button.

### Intermediate certificates

If you're using a company that provides an intermediate certificate, be aware that *Step 7* is where you'll insert your intermediate certificate in the **SSL Certificate Chain** field.

<h3 id="SSL2">1b. Generate a self-signed certificate</h3>

Skip down to <a href="#SSL3">2. Choose certificate in your application</a> section if you're adding a legitimate certificate.

What is a Self-Signed Certificate?  See what [WikiPedia](http://en.wikipedia.org/wiki/Self-signed_certificate) has to say about the topic.

Optionally, if you want to develop SSL features and don't want to or don't need to spend money on a staging SSL certificate, this can be a good option.  Follow these steps to generate a Self-Signed Certificate for your Engine Yard Cloud account.

![SSL Cert](images/sslselfsigned.jpg)

  1. Give your SSL certificate a name.  Use the **SSL Certificate Name** field.
  2. Click on **Generate Self-Signed SSL Certificate** radio button.
  3. Click **Add Certificates** button.

<h3 id="SSL3">2. Choose certificate in your application</h3>

After you've configured your SSL Certificate (either 1a. or 1b. above) you'll want to tell Engine Yard Cloud which application to use it in.

  1. Click on **Dashboard**.
  2. Click on the **Application** you'd like to deploy the certificate to.
  3. Then choose the **environment** this certificate will run on, i.e. production.
  4. Click on radio button **Assign SSL Certificate** for to *your app*.
  5. From the drop-down, choose correct certificate you want from the **SSL Certificate** list.
  6. Click on **Update SSL Settings** button to save changes.
  
<img src="images/choosesslcertificate.jpg" width="600" alt="Choose Certificate" />

The page will refresh and the message will appear:

"Environment Production: You or a collaborator changed SSL certificates. Apply changes."

Proceed to <a href="#SSL4">3. Deploying your SSL Certificates</a> to load the certificate to your application instances.

<h3 id="SSL4">3. Deploying your SSL Certificates</h3>

Now the certificate is installed on Engine Yard Cloud.  Each time you build an application instance for this environment, the certificate will be added.  So as you scale, you don't have to remember to deploy the certificate.

If for any reason, you had to tear down and rebuild the environment, once again the certificate is ready to go in the system and will be added as the system is rebuilt.

To deploy your new certificate right now all you need to do is this:

Click on the **Apply** button at the top.

<img src="images/applyssl.jpg" width="600" alt="Apply SSL Certificate" />

It will run the chef recipes for this environment and install the SSL certificate during this process.

## Verify your SSL certificate

You can verify your SSL certificate is to use a site like [SSL Shopper](http://www.sslshopper.com/ssl-checker.html).

###To verify your SSL certificate

1.  and it lets you put in your URL and will check your certificate and all chain files involved, to ensure that everything is passing.  We recommend after deploying you give this site a quick check and ensure that your site returns all green.


---

<h2 id="topic9">Removing a passphrase from a key file</h2>

Q: When and why do you need to do this?

Engine Yard Cloud 



###To remove a passphrase from a key file (?)

1. Confirm that your key file contains a passphrase.  
        cat mydomain.com.key  
    If the key file ...
    then it contains ????

2. 	Where do I type this? 

     Copy the key file into a temporary file. 
        $ cp mydomain.com.key temp.key

    What does this step do? 

        $ openssl rsa -in temp.key -out mydomain.com.key

	"You will be prompted for the password, remember it is "none"."
	
	Does this mean press enter when prompted for a passphrase? 
	
	Delete the temp.key file.

    	$ rm temp.key




[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4        "topic4"
[5]: #topic5        "topic5"
[6]: #topic6        "topic6"
[7]: #topic7        "topic7"
[8]: #topic8        "topic8"
[9]: #topic9        "topic9"

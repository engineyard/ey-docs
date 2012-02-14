# How to obtain and installing SSL certificates for applications

This page describes how to obtain an SSL certificate from a third-party vendor and how to install the certificate on an Engine Yard Cloud environment. The workflow is:

* [Prerequisite: You have chosen an SSL-certificate vendor][3]
* [Create the key file and the signing request file needed by the vendor][4]
* [Purchase the SSL certificate from chosen vendor][7]

This page also describes how to use a self-signed SSL certificate. A self-signed certificate is a good choice for a staging or development environment where you want to test SSL features, but aren't ready to purchase an SSL certificate. See [Install a self-signed certificate][8].

    
---               

<h2 id="topic2"> Types of certificates</h2>  

Engine Yard supports single domain and wildcard domain certificates. Get a single domain certificate if you anticipate having one application running on one domain address. If you use subdomains, then you'll need a wildcard domain certificate. 
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

<h2 id="topic3"> Prerequisite: You have chosen an SSL-certificate vendor</h2>

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

<h2 id="topic4"> Create the key file and the signing request file needed by the vendor</h2>

<!-- here are some terms that could be added as metadata 

* a key and a signing request 
* request and key file  
* certificate signing request file  
* certificate signing request  
* CSR file  
* key  
* key file 
* private key 
* private key file
* CTR
* certificate file 
* intermediate key
* intermediate certificate
* chain certificate

key file
certificate signing request file
certificate file (CTR)-->



<!--**Question:** How do you take your files to your vendor? Sounds like you have to physically show up at the vendor's place of business. Why don't you *send* files to your vendor? -->

**Important!** The key file cannot have a passphrase associated with it. If you have already generated a key file with a passphrase, see [Removing a passphrase from a key file][9] below.

To create the key file and signing request file, follow one of these procedures:  

* [For a single domain certificate: To generate the key file and the signing request file needed by the vendor][5]  
* [For a wildcard domain certificate: To generate the key file and the signing request file needed by the vendor][6]



<h3 id="topic5"> For a single domain certificate: To generate the key file and the signing request file needed by the vendor</h3>  

1. Generate a private key file. Type:  (*Q*: See above wrt to terminology.) *Q*: Where do I do this?  

        openssl genrsa -out mydomain.com.key 2048  
       You get a response like this:  
        Generating RSA private key, 2048 bit long modulus
		...+++
		...........................................................................................................+++
		e is 65537 (0x10001)

    This creates a request key file (mydomain.com.key) without a passphrase.  

2. 	Generate a signing request file. 

    a. Type:  

        	openssl req -new -key mydomain.com.key -out mydomain.com.csr

    b. **Important!** Make sure to enter your domain name for the Common Name.  For example, `mydomain.com`.
Ask Kevin to confirm. 


3. Confirm that you have two files in the current directory:  
	    * `mydomain.com.key` - the key file
	    * `mydomain.com.csr` - the certificate signing request    


<h3 id="topic6">  For a wildcard domain certificate: To generate the key file and the signing request file needed by the vendor </h3> 

Engine Yard convention for wildcard domains is to prefix the key file name with an underscore.

1. Generate a private key file. Type:  (*Q*: See above wrt to terminology.) *Q*: Where do I do this?  

        openssl genrsa -out _.mydomain.com.key 2048  
       You get a response like this:  
        Generating RSA private key, 2048 bit long modulus
		...+++
		...........................................................................................................+++
		e is 65537 (0x10001)

    This creates a request key file (????mydomain.com.key) without a passphrase.  

2. 	Generate a signing request file. 

    a. Type:  

        	openssl req -new -key _.mydomain.com.key -out _.mydomain.com.csr

    b. Make sure to enter your domain name for the Common Name.  
    *Q*: What is this for a wildcard domain?

3. Confirm that you have two files in the current directory:  
    * `_.mydomain.com.key` - the key file
    * `_.mydomain.com.csr` - the certificate signing request
    

<h2 id="topic7"> Purchase the SSL certificate from chosen vendor</h2>

Now that you have the KEY and CSR two files, you can purchase your SSL certificate.  
 

###To purchase an SSL certificate

1. Follow the instructions provided by your chosen vendor. (See [Prerequisite][3] above for a list of vendors.)

2. Consider these tips:  
    * Always use a plain text editor like Notepad on Windows or equivalent on Mac or Linux to copy and paste the contents of the KEY and CSR files into the form fields.
    * Choose Apache as the server type.   *Q* When I did the [SSL Shopper](http://www.sslshopper.com/ssl-checker.html) thing, the server type appeared as nginx.  Can you confirm that Apache is the right server type? 
    * Make sure to get a CRT file from the vendor.
    * If you are offered "certificate chain file", make sure to get that too. (The certificate chain file is sometimes referred to as an *intermediate* certificate or key.)


---

## Apply the certificate to your application on Engine Yard Cloud

###To install a self-signed certificate

1. In your Dashboard, select SSL Certificates from the Tools menu.  
    The SSL Certificates page appears.

3. Click Add SSL Certificate.  
    The Create New SSL Certificate page appears.

2. If you have access to more than one Engine Yard account, select an account.

3. Enter a name in the SSL Certificate Name field.  
    **Q**: What should I choose for the name? 

4. Click Upload SSL Certificate.

5. **Q** What do I paste where? I have four things: the KEY file, the CSR file, the CRT file, and the certificate chain file. But I have only three text boxes. My guess is that I paste the CRT in the first box, the KEY in the second box and the certificate chain file in the third box and I discard the CSR file. Is that right? 

<!--  5. In the SSL Certificate text box, paste the contents of the CTR file. 6. In the SSL Certificate Key text box, paste the SSL Certificate Key 7. If you have a certificate chain file, paste it into the SSL Certificate Chain field. -->

6. Click Add Certificates.


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

---
## Verify your SSL certificate

You can verify your SSL certificate is to use a site like [SSL Shopper](http://www.sslshopper.com/ssl-checker.html).

###To verify your SSL certificate

1.  and it lets you put in your URL and will check your certificate and all chain files involved, to ensure that everything is passing.  We recommend after deploying you give this site a quick check and ensure that your site returns all green.

---

<h2 id="topic8">Install a self-signed certificate</h2>

For general information about self-signed certificates, see [[this article about self-signed certificates in Wikipedia|http://en.wikipedia.org/wiki/Self-signed_certificate]].

###To install a self-signed certificate  

1. In your Dashboard, select SSL Certificates from the Tools menu.  
    The SSL Certificates page appears.

3. Click Add SSL Certificate.  
    The Create New SSL Certificate page appears.

2. If you have access to more than one Engine Yard account, select an account.

3. Enter a name in the SSL Certificate Name field.  

    *Q:* What does it mean "This will be used as the hostname for self-signed certificates" Sounds important but I don't understand. If my application is at http://ec2-50-18-232-212.us-west-1.compute.amazonaws.com/ , what do I put? If my application is at tonyandjane.net/fun what do I put here? 

4. Click Generate Self-Signed SSL Certificate.

5. Click Add Certificates.

6. Follow the steps in XX above to add the certificate to an environment. 

---

<h2 id="topic9">Remove a passphrase from a key file</h2>

**Q:** When and why do you need to do this?  Can I still use the original CTR file that I got from my vendor using the key file that contained a passphrase? 

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

---

<h2 id="topic10"> Troubleshooting </h2>

This table contains troubleshooting tips.

<table>
  <tr>
    <th>Symptom</th><th>Solution</th>
  </tr>
   
   <tr>
    <td>I applied an SSL certificate. The "Apply" works, throws no errors, but the old cert is what's installed (and still failing). Any idea how to flush that old one and get the new one to actually be loaded? We can't sell at present so I guess this is "Urgent". </td><td>Make sure that your key file does not use a passphrase. If it does, remove it and paste the new key file into the  </td>
   </tr>
</td>

<tr>
	<td> Other problems? <td>Post to the [[Beta Conversations Google group|http://groups.google.com/group/ey-beta-talk]]. To subscribe to the group, see [[Beta Conversations|beta-intro]]. <br> <br>
   </tr>

  </tr>
</table>



[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4        "topic4"
[5]: #topic5        "topic5"
[6]: #topic6        "topic6"
[7]: #topic7        "topic7"
[8]: #topic8        "topic8"
[9]: #topic9        "topic9"


<!-- here are some terms that could be added as metadata 

* a key and a signing request 
* request and key file  
* certificate signing request file  
* certificate signing request  
* CSR file  
* key  
* key file 
* private key 
* private key file
* CTR
* certificate file 
* intermediate key
* intermediate certificate
* chain certificate

key file
certificate signing request file
certificate file (CTR)-->

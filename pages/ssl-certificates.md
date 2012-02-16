# How to obtain and install SSL certificates for applications

This page describes how to obtain an SSL certificate from a third-party vendor and how to install the SSL certificate on an Engine Yard Cloud environment. The process is:

* [Prerequisite: A chosen SSL-certificate vendor][3]
* [Create the key file and the signing request file needed by the vendor][4]
* [Purchase the SSL certificate from chosen vendor][7]
* [Install the SSL certificate to your application on Engine Yard Cloud][11]
* [Apply the SSL certificate to an environment][12]
* [Verify your SSL certificate][14]

This page also describes how to [install a self-signed certificate][8]. A self-signed certificate is a good choice for a staging or development environment where you want to test SSL features, but aren't ready to purchase an SSL certificate.

Additional topics on this page are:   

* [Remove a passphrase from a key file][13]
* [Troubleshooting][10]

    
<h3 id="topic2"> Types of SSL certificates</h3>  

Engine Yard supports single-domain and wildcard-domain certificates. Get a single-domain certificate if you anticipate having one application running on one domain address. If you use subdomains, then you'll need a wildcard-domain certificate.  

**Important!** Engine Yard **does not** support multiple-domain certificates. 

<table>
	  <tr>
	    <th>SSL certificate type</th><th>Example</th>
	  </tr>
	  <tr>
	    <td>Single domain</td><td>https://www.mydomain.com</td>
	  </tr>
	  <tr>
	    <td>Wildcard domain [*.mydomain.com] <br>(A single domain, with subdomains.)<br><b>Note:</b> Not all vendors include the root domain (e.g. mydomain.com) in the wildcard-domain certificate.</td><td>https://www.mydomain.com<br>https://mydomain.com<br>https://app.mydomain.com<br>https://help.mydomain.com</td>
	  </tr>
	  <tr>
	    <td>Multiple domain,<br>also called UCC (Unified Communications Certificate)</td><td>https://www.mydomain.com<br>https://www.myotherdomain.com<br>https://www.yourdomain.com<br>https://app.mydomain.com</td>
	  </tr> 
</table>



<h2 id="topic3"> Prerequisite: A chosen SSL-certificate vendor</h2>

The workflow described on this page assumes that you have chosen a vendor to host your SSL certificate. 
If you haven't yet chosen a vendor, consider reviewing this Wikipedia article [comparing SSL certificates](http://en.wikipedia.org/wiki/Comparison_of_SSL_certificates_for_web_servers). 

Here are some vendors who have hosted SSL certificates deployed on Engine Yard Cloud:  
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


<h2 id="topic4"> Create the key file and the signing request file needed by the vendor</h2>

To create the key file and signing request file, follow one of these procedures:  

* [For a single-domain certificate: To generate the key file and the signing request file needed by the vendor][5]  
* [For a wildcard-domain certificate: To generate the key file and the signing request file needed by the vendor][6]

**Important!** The key file cannot have a passphrase associated with it. If you have already generated a key file with a passphrase, see [Removing a passphrase from a key file][9] below.

<h3 id="topic5"> For a single-domain certificate: To generate the key file and the signing request file needed by the vendor</h3>  

1. Open a unix shell, for example, by SSHing into one of your Engine Yard Cloud instances.

2. Generate a key file.  Type:   

        openssl genrsa -out mydomain.com.key 2048  
       You get a response like this:  
        Generating RSA private key, 2048 bit long modulus
		...+++
		...........................................................................................................+++
		e is 65537 (0x10001)

    This creates a key file (mydomain.com.key) without a passphrase.  

2. 	Generate a signing request file. 

    a. Type:  

        	openssl req -new -key mydomain.com.key -out mydomain.com.csr

    b. **Important!** Make sure to enter your domain name for the Common Name.  For example, `mydomain.com`.


3. Confirm that you have two files in the current directory:  
	    * `mydomain.com.key` - the key file
	    * `mydomain.com.csr` - the certificate signing request    


<h3 id="topic6">  For a wildcard-domain certificate: To generate the key file and the signing request file needed by the vendor </h3> 

Engine Yard convention for wildcard domains is to prefix the key file name with an underscore.

1. Generate a key file. Type:    

        openssl genrsa -out _.mydomain.com.key 2048  
       You get a response like this:  
        Generating RSA private key, 2048 bit long modulus
		...+++
		...........................................................................................................+++
		e is 65537 (0x10001)

    This creates a key file (_.mydomain.com.key) without a passphrase.  

2. 	Generate a signing request file. 

    a. Type:  

        	openssl req -new -key _.mydomain.com.key -out _.mydomain.com.csr

    b. Make sure to enter your domain name (e.g. mydomain.com) for the Common Name.   

3. Confirm that you have two files in the current directory:  
    * `_.mydomain.com.key` - the key file
    * `_.mydomain.com.csr` - the certificate signing request
    

<h2 id="topic7"> Purchase the SSL certificate from chosen vendor</h2>

Now that you have the key file and the certificate signing request file, you can purchase your SSL certificate.  

###To purchase an SSL certificate

1. Follow the instructions provided by your chosen vendor. (See [Prerequisite][3] above for a list of vendors.)

2. Consider these tips:  
    * Always use a plain text editor like Notepad on Windows or equivalent on Mac or Linux to copy and paste the contents of the key file and the certificate signing request files into the form fields.
    * If Nginx is not available as a server type, choose Apache.
    * Make sure to get a CRT file from the vendor.
    * If you are offered "certificate chain file", make sure to get that too. (The certificate chain file is sometimes referred to as an *intermediate* certificate or key.)



<h2 id="topic11"> Install an SSL certificate in your Engine Yard account</h2>

To add an SSL certificate to your Engine Yard account, you need your key file; the CRT file from your vendor; and, if your vendor provided one, the certificate chain file. 

###To install an SSL certificate in your Engine Yard account

1. In your Dashboard, select SSL Certificates from the Tools menu.  
    The SSL Certificates page appears.

3. Click Add SSL Certificate.  
    The Create New SSL Certificate page appears.

    ![The create new SSL certificate page](images/create_new_ssl.png)

2. If you have access to more than one Engine Yard account, select an account.

3. Enter a name in the SSL Certificate Name field.  

4. Click Upload SSL Certificate.

5. In the SSL Certificate text box, paste the contents of the CTR file.  

6. In the SSL Certificate Key text box, paste the SSL Certificate Key.   

7. If you have a certificate chain file, paste it into the SSL Certificate Chain field.  

6. Click Add Certificates.

<h2 id="topic12">Apply the certificate to an application in an environment</h2>

After you've configured your SSL Certificate, tell Engine Yard Cloud which environment to use it in.

###To apply an SSL certificate to an environment

1. In your Dashboard, click the application environment that you want to add the certificate to.

2. Click Assign SSL Certificate to *app_name*.

3. From the SSL Certificate drop-down, select the certificate.

    ![the SSL section on the Environment page](images/ssl-pane-on-environment-page.png)

4. Click Update SSL Settings.
  
    Each time you build an application instance for this environment, the certificate is added. 

5. Deploy the application with the SSL certificate: Click Apply.

<h2 id="topic14">Verify your SSL certificate</h2>

After deploying your application, Engine Yard recommends that you verify your SSL certificate using a site like [SSL Shopper](http://www.sslshopper.com/ssl-checker.html).

###To verify your SSL certificate

1. Navigate to an SSL certificate checking site such as [SSL Shopper](http://www.sslshopper.com/ssl-checker.html). 

2. Enter your application URL.  
    The site checks your certificate and all chain files involved.

<h2 id="topic8">Install a self-signed certificate</h2>

Use a self-signed certificate when you want to test out SSL features in a development or staging environment. 
 
For general information about self-signed certificates, see [[this article about self-signed certificates in Wikipedia|http://en.wikipedia.org/wiki/Self-signed_certificate]].

###To install a self-signed certificate  

1. In your Dashboard, select SSL Certificates from the Tools menu.  
    The SSL Certificates page appears.

3. Click Add SSL Certificate.  
    The Create New SSL Certificate page appears.

2. If you have access to more than one Engine Yard account, select an account.

3. Enter your domain name in the SSL Certificate Name field.  
    For example, staging.mydomain.com  

4. Click Generate Self-Signed SSL Certificate.

5. Click Add Certificates.

6. Follow the steps in [Apply the certificate to an application in an environment][12] above to add the certificate to an environment. 


<h2 id="topic13">Remove a passphrase from a key file</h2>

If your key file contains a passphrase, you need to remove it before entering the key file on the SSL Certificate page.   

###To remove a passphrase from a key file

1. Locate your key file and look at it to see if it contains a passphrase.  
        head mydomain.com.key  
    The key file contains a passphrase if it begins with text like this (with *Proc-Type:* and *DEK-Info:*):
        -----BEGIN RSA PRIVATE KEY-----
		Proc-Type: 4,ENCRYPTED
		DEK-Info: DES-EDE3-CBC,91B305001070B5FD

		4/3Oaf8n4XyhUG6Q07/HWuqEkCcXujrJ+dJXgzPAleuKKjxOtN7LHZTvGlXQge/V

2. If the key file contains a passphrase, remove it with these commands:  

        cp mydomain.com.key temp.key
        openssl rsa -in temp.key -out mydomain.com.key

3. Enter the original key's passphrase when prompted.
	

<h2 id="topic10"> Troubleshooting </h2>

This table contains troubleshooting tips.

<table>
  <tr>
    <th>Symptom</th><th>Solution</th>
  </tr>
   
   <tr>
    <td>I applied an SSL certificate and clicking Add Certificates throws no errors, *but* the certificate does not appear installed (or the old certificate is still in place) and Nginx is not restarting.</td><td>Make sure that your key file does not use a passphrase. If it does, <a href="#topic9">remove it</a> and paste the new key file into the SSL Certificate Key text box; see <a href="#topic11">Install certificate to your application on Engine Yard Cloud</a>. </td>
   </tr>
</td>
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
[10]: #topic10       "topic10"
[11]: #topic11       "topic11"
[12]: #topic12       "topic12"
[13]: #topic13       "topic13"
[14]: #topic14       "topic14"


<!-- here are some terms that could be added as metadata 

* a key and a signing request 
* request and key file  
* certificate signing request file  
* certificate signing request  
* CSR file  
* key  
* key file 
* private key 
* request key file
* private key file
* CTR
* certificate file 
* intermediate key
* intermediate certificate
* chain certificate

key file
certificate signing request file
certificate file (CTR)-->

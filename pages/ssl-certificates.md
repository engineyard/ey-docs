# SSL certificates

This section contains (almost) everything you need to get your SSL certificate.  First, it covers generating a key and signing request.  

But it doesn't show you how to purchase the certificate from [Godaddy](http://www.godaddy.com) or [Verisign](http://www.verisign.com), etc.  You'll need to assess your company's needs and make that decision on your own.

Then, we pick up after you've purchased you're certificate and are ready to install your SSL certificate to your application on Engine Yard Cloud.

Here's the information **you need** to get SSL working on Engine Yard Cloud.

## Generate your SSL certificate key and signing request

This process will help you to generate the two files you need to purchase a SSL certificate.

  * yourdomain.key - the private key
  * yourdomain.csr - the certificate signing request

### Generate your private key

<html><span style="color:red;">You cannot use a passphrase for your SSL certificate on Engine Yard Cloud.</span></html>

Generate a key file with no passphrase.

    openssl genrsa -out yourdomain.com.key 2048

### Generate your CSR


    $  openssl req -new -key yourdomain.com.key -out yourdomain.com.csr
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
    Organization Name (eg, company) [Internet Widgits Pty Ltd]:  Your Company
    Organizational Unit Name (eg, section) []:
    Common Name (eg, YOUR name) []:yourdomain.com
    Email Address []:your.email@address.com


This generates the `.csr` file you'll use to request your certificate.

**Note:** The "common name" (indicated as "yourdomain.com" above) is the Fully Qualified Domain Name (FQDN) for the certificate you're generating.  <nowiki>"www.yourdomain.com" is not the same as "yourdomain.com".</nowiki>

If you want to have unlimited subdomains covered by your SSL certificate, you'll need to purchase a "Wildcard" certificate.  When doing "Wildcard" certificates we recommend the file format _.yourdomain.key _.yourdomain.csr, etc.

### Purchase a certificate

You have your two files, now you can purchase your certificate.  This is there part you need to do on your own, outside of Engine Yard.  Here's some helpful advice when setting up your certificate with your provider:

  * When presented with server type: Choose Apache.
  * You will get at least .CRT file back.
  * You might also get a "certificate chain file".  Make sure to grab this.

## Add SSL to your application

You can either use an SSL certificate you've purchased or have us generate a Self-Signed certificate (for testing).

### Add a certificate

If you've already got your certificate and you're ready to install it log into Engine Yard Cloud. From the Dashboard under SERVER TOOLS on the left, click SSL Certificates button.  The page will list any certs you have stored.

If you don't haven any SSL certificates configured click the link in the top right: Add SSL Certificate

The Create New SSL Certificate page appears.

![SSL Cert](images/cloudsslcertificates.png)

  1. Give your SSL cert a name.  Use the SSL Certificate Name field.
  2. Click on Upload SSL Certificate radio button.
  3. Paste in your certificate in the SSL Certificate text area.
  4. Paste in your key in the SSL Certificate Key text area.
  5. Optionally you may need to add a SSL Certificated Chain.
  6. Click Add Certificate button.

### Intermediate certificates

If you're using a company that provides an intermediate certificate, be aware that Step #5. is where you'll insert your intermediate certificate in the SSL Certificate Chain field.

### Add a self-signed certificate

Optionally, if you don't have a certificate and you just want to test SSL features or you want to develop against our stack with our SSL, you can use a Self-Signed Certificate.  Use the steps below to generate a certificate.

<html><span style="color:red;">Skip down to "Link SSL Certificate" section if you're adding your PRODUCTION certificate.</span></html>

What is a Self-Signed Certificate?  See what [WikiPedia](http://en.wikipedia.org/wiki/Self-signed_certificate) has to say about the topic.

  - Give your SSL cert a name.  Use the SSL Certificate Name field.
  - Click on Generate Self-Signed SSL Certificate radio button.
  - Click Add Certificate button.

### Link SSL certificate to application

After you've configured your SSL Certificate (either a purchased SSL cert or a self-signed cert) you'll want to let Engine Yard Cloud know what application can use it.

Get back to your Dashboard, then click the SSL tab for your environment.

![SSL Tab](images/ssl_tab.jpg)

  - Click on Assign SSL Certificate to ...  for the application you want.
  - Choose the certificate you want from the SSL Certificate drop-down.
  - Click on Update SSL Settings button to save changes.

The page will refresh and the message will appear:

*SSL Certificate "rubyflow_cert" is assigned to application "rubyflow"*

### Deploying a SSL certificate

When you start an instance the SSL certificate will be automatically deployed and configured.

If you are currently running an instance and you've completed the steps to //Add A Certificate// and //Link SSL Certificate to Application// above, then you can follow these steps to deploy your certificate.

Click on the Update Instances button, and your environment will rebuild with your SSL certificate in place.

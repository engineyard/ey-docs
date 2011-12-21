# Set up your domain and DNS for Engine Yard Cloud

Anyone can access your web application on Engine Yard Cloud by the generic http://ec2-xxx-xx-xxx-xxx.compute-1.amazonaws.com/. However, most users would rather have www.myapp.com to be the point of access. How can we accomplish that with Engine Yard Cloud?

Domain Name System (DNS) services are not offered on Engine Yard Cloud. If you are currently using Engine Yard name servers, you need to register with a DNS service provider and update your registrar to use that provider's name servers. Check with your registrar; they may also offer control of your DNS zone records.

## Setup Engine Yard Cloud to work with a DNS provider

This procedure uses the specific example of [[DNSimple|http://www.dnsimple.com]] as the service provider. Other service providers require similar steps.

### Steps for setup:

1. Create an account with DNSimple if you haven't already. 

2. Log into DNSimple.

3. Click Domains.
	![DNSimple](images/dns1.png)

4. Click ADD A DOMAIN.

5. Add your domain if you have one already, if not, you can create one.   
The status changes to Active after your domain has been added.
	![Domains_Added](images/dns3.png)
	
6. Click MANAGE.

6. Click ADVANCED EDITOR.
	![Advanced_Editor](images/dns4.png)

7. Click ADD A RECORD.
	![A_Record](images/dns5.png)

8. Go to cloud.engineyard.com and log in. 

9. Under Server Tools, click IP Addresses.


10. Locate the IP address of the environment of the application that you want the domain name to point to.
	![IP_Address](images/dns10.png)

11. Insert the IP address from step 11 into Address* field, and click ADD RECORD.
	![ADD_A_Record](images/dns6.png)

12. Confirm that the record was added correctly.
	![Confirmation](images/dns7.png)

13. Verify your DNS settings work by accessing your page via your domain name.
	![Verification](images/dns8.png)




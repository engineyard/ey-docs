# Setup SSMTP for mail relay to AuthSMTP

We do not provide SMTP email services from Engine Yard Cloud because the entire EC2 IP space is black-listed by many spam services.

Our recommendation is to get an account with one of the following providers:

  * [[SendGrid|http://sendgrid.com]]
  * [[Google Apps|http://google.com/a]]  (for a small volume of emails)
  * [[AuthSMTP|http://www.authsmtp.com]]
  * [[SMTP.com|http://smtp.com]]

After you have your account set up, take note of your username/password and come back to this article.

**Note:** If using AuthSMTP, go into the control panel and enable SSL access to your mail relay.

## Steps to configure your instance

1. Edit `/etc/ssmtp/ssmtp.conf` (a config file for ssmtp sendmail) and make it look like the following:
        mailhub=mail.authsmtp.com:2525
        mailhub=smtp.gmail.com:587  -- used for google apps

2. Replace this with the hostname you want email to come from:
        rewriteDomain=example.com

3. Set `FromLineOverride` to make the the **From:** use the from line from the envelope.  The only exception is if no *from line* is given.
        FromLineOverride=YES

4. Use SSL/TLS to send secure messages to server:
        UseSTARTTLS=YES
  
5. Make sure that this isn't `UseTLS=YES`.
        
        SSL connection to host = Success, Cannot open mail.authsmtp.com:2525

     If you're getting errors like the one above then you have the wrong variable. `UseTLS` doesn't work with authsmtp, only `UseSTARTTLS` does.

6. Add your own user/pass here:

        AuthUser=username
        AuthPass=password
        AuthMethod=DIGEST-MD5 #Comment this out if you are using gmail or google apps

7. Set your action mailer setting in `RAILS_ROOT/config/environment.rb` (or an env specific env file if you prefer) 
        
        ActionMailer::Base.delivery_method = :sendmail

8. Or for newer versions of Rails

        config.action_mailer.delivery_method = :sendmail

9. Ensure permissions on the three files above `/etc/ssmtp/ssmtp.conf`, `/usr/sbin/ssmtp`, `/usr/bin/sendmail`  are properly set:

        $ sudo chmod +x /usr/sbin/ssmtp /usr/bin/sendmail
        $ sudo chown deploy:deploy /etc/ssmtp/ssmtp.conf

    Where `deploy` is the name of your SSH user you logged into your instance with.

10. That's it! You should now be able to send emails from your app via your SMTP relay.
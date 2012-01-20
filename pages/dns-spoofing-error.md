#Warning message DNS SPOOFING DETECTED when SSHing into instances



### Warning: Remote host identification has changed!

You might get this message when you SSH into your instance:

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
    @ WARNING: POSSIBLE DNS SPOOFING DETECTED! @ 
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
    The RSA host key for ec2-46-137-83-49.eu-west-1.compute.amazonaws.com has changed, 
    and the key for the corresponding IP address 10.56.63.182 
    is unknown. This could either mean that 
    DNS SPOOFING is happening or the IP address for the host 
    and its host key have changed at the same time. 
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
    @ WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED! @ 
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
    IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY! 
    Someone could be eavesdropping on you right now (man-in-the-middle attack)! 
    It is also possible that the RSA host key has just been changed. 
    The fingerprint for the RSA key sent by the remote host is 
    69:4e:bb:70:6a:64:e3:78:07:6f:b4:00:41:07:d8:9c. 
    Please contact your system administrator. 
    Add correct host key in /home/deploy/.ssh/known_hosts to get rid of this message. 
    Offending key in /home/deploy/.ssh/known_hosts:1 
    Keyboard-interactive authentication is disabled to avoid man-in-the-middle attacks.

This sequence of events that can cause this warning to appear:

1. Creation of an instance with an IP address.
2. SSHing into that instance, no warnings happen (as expected).
3. Shutdown of that instance.
4. Creation of a new instance, assigning it the previously used IP address.
5. SSHing into this new instance. This is when the warning appears.

### Why this message appears

When you create a new instance, it is a new virtualized computer.  So when you return to the same IP address, your computer recognizes that it's not the same computer as before.  While this can in some scenarios indicate malicious activity as the warning indicates, in this scenario it is expected and fine.

### Solution

The best solution is to remove the line from your 'known_hosts' file (`~/.ssh/known_hosts`) or delete the file altogether. You will then be re-prompted to save the secure keys the next time you SSH into the server.

(DUE TO SECURITY RISKS, THIS METHOD IS NO LONGER RECOMMENDED) Another solution is to add the following directive to your ''~/.ssh/config'':

`StrictHostKeyChecking no`
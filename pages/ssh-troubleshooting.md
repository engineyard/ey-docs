# Troubleshoot SSH on Engine Yard Cloud




## Warning: Remote host identification has changed!

You may find that you receive the following message when starting a new SSH 
session for an instance or inside of your deployment logs:

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

The sequence of events that cause this warning are:

  1. You create an instance with an IP address.
  2. You SSH into that instance, no warnings happen (as expected).
  3. You shutdown that instance.
  4. You create a new instance, assigning it the previously used IP address.
  5. You SSH into this new instance, and receive the warning.

### Don't panic

When you create a new instance, it is a new virtualized computer.  So when you return to the same IP address, your computer is smart enough to realize that it's not the same computer as before.  While this could in some scenarios indicate malicious activity as the warning indicates, in this scenario it is expected and fine.

### Resolve this issue

The best solution is to remove the line from your 'known_hosts' file `~/.ssh/known_hosts` or delete the file altogether. You will then be re-prompted to save the secure keys the next time you SSH into the server.
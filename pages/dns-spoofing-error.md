#Warning message DNS SPOOFING DETECTED when SSHing into instances

You might get this message when you SSH into your instance:

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
    @ WARNING: POSSIBLE DNS SPOOFING DETECTED! @ 
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
    The RSA host key for ec2-46-137-83-49.us-west-1.compute.amazonaws.com has changed, 
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

This sequence of events can cause the warning to appear:

1. Creation of an instance with an IP address.
2. SSHing into that instance, no warnings happen (as expected).
3. Shutdown of that instance.
4. Creation of a new instance, assigning it the previously used IP address.
5. SSHing into this new instance. This is when the warning appears.

## Why this message appears

When you create a new instance, it is a new virtualized computer.  So, when you return to the same IP address, your computer recognizes that it's not the same computer as before.  While this can, in some scenarios, indicate malicious activity as the warning indicates, in this scenario, it is expected and fine.

## Solutions

Try one of the following solutions:

* [Edit the .ssh/known_hosts file][6]  
* [Delete the known_hosts file][7]
* [Remove strict host key checking][5]  


<h3 id="topic6">Edit the .ssh/known_hosts file</h3>
You can edit the .ssh/known_hosts file and remove the line that contains the IP address shown in the warning message.

*To edit the .ssh/known_hosts file*  
  
1. On your local machine, open your `~/.ssh/known_hosts` file for editing.  
2. Delete the line that corresponds to the IP address in the warning, for example, the line 
        ec2-46-137-83-49.us-west-1.compute.amazonaws.com  
        ...
        jkEkIXAIRJQ==`

<h3 id="topic7">Delete the known_hosts file</h3>

An alternative to editing the known_hosts file is to delete it.

*To delete the known_hosts file*  
   
1. On your local machine, type `rm ~/.ssh/known_hosts`  
2. Type `ssh-add`  
    Deleting the file can leave the SSH binary in state where it no longer recognizes your SSH, and you see an error "Agent admitted failure to sign using the key." Running ssh-add solves this error. 

<h3 id="topic5"> Remove strict host key checking</h3>

By turning off StrictHostKeyChecking, you continue to see the "possible DNS spoofing" message but you are able to SSH into the instance. This is the least recommended solution.

**WARNING!** Turning off strict host checking affects all SSH connections. 

*To remove strict host key checking*  

1. On your local machine, open `~/.ssh/config` for editing.  
2. Add this directive:  
        StrictHostKeyChecking no

[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4        "topic4"
[5]: #topic5        "topic5"
[6]: #topic6        "topic6"
[7]: #topic7        "topic7"
    
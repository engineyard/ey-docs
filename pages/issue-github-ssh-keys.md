# Mass assignment weakness and GitHub security breach 

GitHub had a security breach that allowed an individual to gain super-user access to repositories that he was not explicitly permitted access to.  This hack involved leveraging a weakness in the mass-assignment method to upload his SSH key.  GitHub has posted additional details on their [[blog|https://github.com/blog/1068-public-key-security-vulnerability-and-mitigation]].


##Take action to protect your application

1. Review your SSH keys on [[GitHub|https://github.com/settings/ssh]] to make sure that there are no keys that you don't recognize.

2. Read this gist "[[How Homakov hacked GitHub and the line of code that could have prevented it|https://gist.github.com/1978249]]" to understand the breach and how to prevent it.
 
3. Audit your code to look for vulnerable areas.  
   **Tip:** Use this plugin  [[find_mass_assignment| https://gist.github.com/1978249]].

4. Review the plugins for Rails to make sure that your application is secure. See [[The Ruby Toolbox| https://www.ruby-toolbox.com/categories/security_tools]].

5. Whitelist your attributes that use the attr_accessible method.  
    (The root cause of this issue is the implicit way that Rails handles updates using the "update_attributes method".)



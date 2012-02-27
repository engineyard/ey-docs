# Customize Trinidad and JVM options

This page describes how to customize the Trinidad application server stack environment:  
 
* [Customizing process environment or JVM/JRuby startup parameters][2]  
* [Customizing the way Trinidad is launched][3]
* [Customizing Trinidad and JVM options in production environments][4]


Trinidad's environment and configuration are customized by two files; which file you edit depends on what you want to customize:  

* /data/app_name/shared/config/**env.custom**
* /data/app_name/shared/config/**trinidad.yml**


<h2 id="topic2">Customize process environment or JVM/JRuby startup parameters</h2>

If you want to customize the process environment or JVM/JRuby startup parameters, edit `env.custom`.

Environment variables commonly changed are:  

   * JAVA_OPTS -- command-line arguments passed to the Java process  
   * JRUBY_OPTS -- command-line arguments passed to JRuby  
   * CLASSPATH -- path containing any additional Java libraries to be made available to the application  

Helper functions are provided for adding JAVA_OPTS and RJUBY_OPTS. Use these helper functions to prevent existing variables (such as those in the env file) from being overwritten. 

###To customize process environment or JVM/JRuby startup parameters

1. Via SSH, connect to the application and database instance (for single server environment) or the application instance (for a clustered environment).  

2. Open `/data/app_name/shared/config/env.custom` for editing.  

3. To add JAVA_OPTS, use the add\_java\_option helper function described [below][A].

4. To add JRUBY_OPTS, use the add\jruby\_option helper function described [below][B].
	
5. To set the JVM maximum heap size, use the set\_jvm\_memory helper function described [below][C].

6. To add other environment variables, specify them directly and export.  
    For example, to set the CLASSPATH variable, add this to the env.custom file:  

        CLASSPATH=/data/app_name/current/lib/iText.jar
        export CLASSPATH

    **Note:** New environment variables must be exported so that the Trinidad process can access them. (JAVA\_OPTS and JRUBY\_OPTS are exported by default by the env file.)

8. Save the `/data/app_name/shared/config/env.custom` and deploy your application.


<h3 id="topicA">The add_java_option helper function</h3>

Add\_java\_option is a helper function for adding JAVA_OPTS environment variables. 

For example, to make the JVM use the G1 garbage collector, add this to the env.custom file:  

    add_java_option -XX:UnlockExperimentalVMOptions -XX:+UseG1GC

<h3 id="topicB">The add_jruby_option helper function</h3>
	
Add\_jruby\_option is a helper function for adding JRUBY_OPTS environment variables.
	
For example, to enable thread pooling, add this to the env.custom file:
	
	add_jruby_option -Xthread.pool.enabled=true	
	
<h3 id="topicC">The set_jvm_memory helper function</h3>

Use the set\_jvm\_memory helper function to set the JVM maximum heap size if the default value is not sufficient. The heap size is set dynamically depending on the size of your instance; find the default value in /data/app_name/shared/config/env.

For example, to set the JVM maximum memory argument to -Xmx2G, add this to the env.custom file:  
  
    set\_jvm\_memory 2G

<h2 id="topic3">Customize the way Trinidad is launched</h2>

If you want to customize the way Trinidad is launched, edit `trinidad.yml`.

###To customize how Trinidad is launched

1. Open `/data/app_name/shared/config/trinidad.yml` for editing.  
   
2. For documentation about options for this file, see [[Advanced configuration|https://github.com/trinidad/trinidad/wiki/advanced-configuration]].  
  
3. Save the `/data/app_name/shared/config/trinidad.yml` file and deploy your application.
 

<h2 id="topic4">About customizing Trinidad and JVM options in production environments</h2>

In a clustered environment, you need to make the same customizations on the application slave instances so that if your current application master fails, the takeover instance has the same customizations. 

You can do this two ways:  

* Edit the env.custom or trinidad.yml files on the application slaves to make the same customizations as on the master application instance, or 
* Create a custom Chef recipe to apply the customizations to each application instance in the cluster. For information about custom Chef recipes, see [[Custom Chef recipes|custom-chef-recipes]]. 

[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4        "topic4"
[5]: #topic5        "topic5"
[6]: #topic6        "topic6"
[7]: #topic7        "topic7"
[8]: #topic8        "topic8"
[9]: #topic9        "topic9"
[A]: #topicA        "topicA"
[B]: #topicB        "topicB"
[C]: #topicC        "topicC"
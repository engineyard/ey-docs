# Customize Trinidad and JVM options

Trinidad's environment and configuration are customized by two files:  

* [/data/app_name/shared/config/env.custom][2] 
* [/data/app_name/shared/config/trinidad.yml][3]  

Where app_name is the name of your application.

Which file you edit depends on what you want to customize.

<h2 id="topic2">Customize process environment or JVM/JRuby startup parameters</h2>

env.custom is where you change the process environment or JVM/JRuby startup parameters by adding or changing shell environment variables. 

Environment variables commonly changed:  

* JAVA_OPTS – command-line arguments to be passed to the java process  
* JRUBY_OPTS – command-line arguments to be passed to JRuby  
* CLASSPATH – path containing any additional java libraries to be made available to the application  

Be sure to export any new environment variables in env.custom so that the Trinidad process can access them. (JAVA_OPTS and JRUBY_OPTS are already exported for you.)


CLASSPATH=/data/app_name/current/lib/iText.jar
export CLASSPATH



Additionally, two shell functions are available: add_java_option and set_jvm_memory. add_java_option is simply a helper function for adding to the JAVA_OPTS environment variable. set_jvm_memory allows customization of the JVM maximum heap size if the default value is not sufficient. (The heap size is set dynamically depending on the size of your instance; find the default value inside /data/app_name/shared/config/env.)

# Makes the JVM use the G1 garbage collector
add_java_option -XX:UnlockExperimentalVMOptions -XX:+UseG1GC

# Sets the JVM maximum memory argument to -Xmx2G
set_jvm_memory 2G



<h2 id="topic3">trinidad.yml</h2>

If you wish to customize the way Trinidad is launched, modify trinidad.yml. If the file does not exist in /data/app_name/shared/config/trinidad.yml, create it and add your custom configuration. Read this page for details on what to put in trinidad.yml.

###To customize how Trinidad is launched
1. Open /data/app_name/shared/config/trinidad.yml for editing.  
    *Question* Do I do this in my development environment or on my instance? 
    If this file does not exist, create it and    

[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4        "topic4"
[5]: #topic5        "topic5"
[6]: #topic6        "topic6"
[7]: #topic7        "topic7"
[8]: #topic8        "topic8"
[9]: #topic9        "topic9"
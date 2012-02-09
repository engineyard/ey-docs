# Customize Trinidad and JVM options

Trinidad's environment and configuration are customized by two files:  

* [/data/app_name/shared/config/env.custom][2] 
* [/data/app_name/shared/config/trinidad.yml][3]  

Where app_name is the name of your application.

Which file you edit depends on what you want to customize.

<h2 id="topic2">Customize process environment or JVM/JRuby startup parameters</h2>

If you want to customize the process environment or JVM/JRuby startup parameters, `env.custom`.

###To customize process environment or JVM/JRuby startup parameters

1. Open `/data/app_name/shared/config/env.custom` for editing.  
    *Question* Do I do this in my development environment or on my instance?  

2. Add or change shell environment variables in this file. 

    Environment variables commonly changed:  

    * JAVA_OPTS – command-line arguments to be passed to the Java process  
    * JRUBY_OPTS – command-line arguments to be passed to JRuby  
    * CLASSPATH – path containing any additional Java libraries to be made available to the application  

*Question:* Ask Nick what this means. "Be sure to export any new environment variables in env.custom so that the Trinidad process can access them. (JAVA_OPTS and JRUBY_OPTS are already exported for you.)"  Where do I type the command below? 


    CLASSPATH=/data/app_name/current/lib/iText.jar
    export CLASSPATH


*Question:* Need to understand exactly how I use these. I assume that I uncomment the second line of each

Additionally, two shell functions are available: add_java_option and set_jvm_memory. add_java_option is simply a helper function for adding to the JAVA_OPTS environment variable. set_jvm_memory allows customization of the JVM maximum heap size if the default value is not sufficient. (The heap size is set dynamically depending on the size of your instance; find the default value inside /data/app_name/shared/config/env.)

### Makes the JVM use the G1 garbage collector
add_java_option -XX:UnlockExperimentalVMOptions -XX:+UseG1GC

### Sets the JVM maximum memory argument to -Xmx2G
set_jvm_memory 2G

<h2 id="topic3">Customize the way Trinidad is launched</h2>

If you want to customize the way Trinidad is launched, modify `trinidad.yml`.

###To customize how Trinidad is launched
1. Open `/data/app_name/shared/config/trinidad.yml` for editing.  
    *Question* Do I do this in my development environment or on my instance? 
2. For documentation about options you can add to this file, see [Advanced configuration|https://github.com/trinidad/trinidad/wiki/advanced-configuration].    
3. *Question* What do I do after I've modified the file? 


[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4        "topic4"
[5]: #topic5        "topic5"
[6]: #topic6        "topic6"
[7]: #topic7        "topic7"
[8]: #topic8        "topic8"
[9]: #topic9        "topic9"
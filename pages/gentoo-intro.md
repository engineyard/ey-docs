# Gentoo Introduction

For production quality control, Engine Yard Cloud uses a Gentoo package distribution system. This page includes an introduction to Gentoo, how you determine which packages are available, and how to enable them in your environments.

## What is Gentoo?

"Gentoo is a free operating system based on either Linux or FreeBSD that can be automatically optimized and customized for just about any application or need. Extreme configurability, performance and a top-notch user and developer community are all hallmarks of the Gentoo experience.

"Thanks to a technology called Portage, Gentoo can become an ideal secure server, development workstation, professional desktop, gaming system, embedded solution or something else -- whatever you need it to be. Because of its near-unlimited adaptability, we call Gentoo a metadistribution."

-- http://www.gentoo.org/main/en/about.xml

Engine Yard manages is own highly secure, highly optimized Gentoo Portage that is tuned for the specific purpose of running your web applications.

## Before proceeding

In order to follow the examples/instructions below, you will need an environment booted, to have SSH'd into it:

    cd /path/to/my/app
    ey ssh -e myenvironment
    
Please don't do destructive things to your production environment. Instead, use staging environments or new environments.

## What packages do I have installed?

To see what packages are installed on your system we turn to the helpful tool genlop.

    $ sudo emerge genlop
    $ sudo genlop -el
    ...
    Tue Dec 13 19:57:21 2011 >>> dev-perl/DateManip-5.54
    Tue Dec 13 19:57:24 2011 >>> dev-perl/HTML-Tree-3.23
    Tue Dec 13 19:57:26 2011 >>> dev-perl/Crypt-SSLeay-0.57
    Tue Dec 13 19:57:29 2011 >>> dev-perl/libwww-perl-5.805
    Tue Dec 13 19:57:31 2011 >>> app-portage/genlop-0.30.8-r1

## What packages can I use?

To search for a package, inside your environment use the "eix" command. For example, to search for available rubinius packages:

    # eix rubinius -l
    * dev-lang/rubinius
         Available versions:  
    	(0)
    		~	0.8_pre20080129 "~x86 ~amd64" [debug]
    		~	0.8_pre20080208 "~x86 ~amd64" [debug]
    		~	0.9.0 "~x86 ~amd64" [debug]
    	(1.1)
    			1.1.0-r1!p[1] "amd64 x86"
    			1.1.1!p[1] "amd64 x86"
    	(1.2)
    			1.2.0!p[1] "amd64 x86"
    			1.2.1!p[1] "amd64 x86"
    			1.2.2-r1!p[1] "amd64 x86"
    			1.2.3!p[1] "amd64 x86"
    			1.2.4!p[1] "amd64 x86"
    	(2.0)
    		~	2.0.0!p[1] "~amd64 ~x86"
    		~	2.0.0-r1!p[1] "~amd64 ~x86"
    		~	2.0.0-r2!p[1] "~amd64 ~x86"
         Homepage:            http://rubini.us/
         Description:         An environment for Ruby, the programming language that provides performance balanced with accessibility, focusing on improving programming productivity.

    * dev-lang/rubinius19 [1]
         Available versions:  
    	((get_version_component_range 1-2))
    		[M]~	2.0.0!p "~amd64 ~x86"
         Homepage:            http://rubini.us/
         Description:         An environment for Ruby, the programming language that provides performance balanced with accessibility, focusing on improving programming productivity.

    [1] "engineyard" /engineyard/portage/engineyard
    
On this system ("on this portage") there are two rubinius packages - dev-lang/rubinius and dev-lang/rubinius19. The latter is pre-wired into ruby 19 mode. The former is in ruby 18 mode.

## I cannot see a package that should be there

If you run "emerge rubinius" and do not see a release that should exist, then you may need to update the eix database of packages on the system. You can do that by:

* Pressing "Apply" or "Upgrade" on the dashboard for this environment
* Running "update-eix" on the system.

## How do I install a package into my environment?

To install the latest available rubinius version:

    # sudo emerge dev-lang/rubinius
    ...
    >>> Extracting dev-lang/rubinius-1.2.4
    >>> Installing dev-lang/rubinius-1.2.4

What?! Why did you get 1.2.4 instead of 2.0? The versions with the tilde (~), such as 2.0.0 above, are "masked" which broadly means "not fully supported by Engine Yard". Specifically it means you do not get them by default and require extra effort to install this package.

To install the masked 2.0.0 version on an x86 instance (assumes running as root), first unmask it via package keywords:

    $ sudo sh -lc 'echo "=dev-lang/rubinius-2.0*" >> /etc/portage/package.keywords/rubinus'
    $ sudo emerge =rubinius-2.0.0-r2

But you should do this only for testing a package. Please remember that in the Cloud, instances come and go, and the best way to be able to build new instances into an environment in a repeatable way is with custom recipes.

## How do I install a package using custom recipes?

The only way we recommend installing packages (and customizing your cloud environments) is via custom recipes.

For this job there is a useful tool "ey-recipes":

    gem install engineyard-recipes
    cd /to/your/app/or/cookbook/project
    ey-recipes recipe rubinius -p dev-lang/rubinius -v 2.0.0-r2 --unmasked

Then upload and apply your recipes normally:

    ey recipes upload --apply

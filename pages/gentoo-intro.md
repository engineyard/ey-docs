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

<!-- Why not ssh into instance like in other procedures in the doc. Presumably this is SSHing into the application master?  -->

    
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

<!-- After the first command, I get 
 sudo emerge genlop
Calculating dependencies... done!

>>> Starting parallel fetch

>>> Emerging binary (1 of 5) dev-perl/DateManip-5.54
--2012-01-13 22:16:10--  http://cloud.portage.eydistro.engineyard.com/2009a/x86/dev-perl/DateManip-5.54.tbz2
Resolving cloud.replicator.eydistro.engineyard.com... 174.129.241.164
Connecting to cloud.replicator.eydistro.engineyard.com|174.129.241.164|:5254... connected.
Proxy request sent, awaiting response... 200 OK
Length: 171858 (168K)
Saving to: `/engineyard/portage/packages/dev-perl/DateManip-5.54.tbz2'

     0K .......... .......... .......... .......... .......... 29% 8.47M 0s
    50K .......... .......... .......... .......... .......... 59% 22.4M 0s
   100K .......... .......... .......... .......... .......... 89% 28.9M 0s
   150K .......... .......                                    100% 52.9M=0.01s

2012-01-13 22:16:10 (16.5 MB/s) - `/engineyard/portage/packages/dev-perl/DateManip-5.54.tbz2' saved [171858/171858]

 * DateManip-5.54.tbz2 size ;-) ...                                      [ ok ]
>>> Extracting info
>>> Extracting dev-perl/DateManip-5.54

>>> Installing dev-perl/DateManip-5.54
 * Man pages are not installed for most modules now.
 * Please use perldoc instead.

>>> Emerging binary (2 of 5) dev-perl/HTML-Tree-3.23
 * HTML-Tree-3.23.tbz2 MD5 SHA1 size ;-) ...                                          [ ok ]
>>> Extracting info
>>> Extracting dev-perl/HTML-Tree-3.23

>>> Installing dev-perl/HTML-Tree-3.23
 * Man pages are not installed for most modules now.
 * Please use perldoc instead.

>>> Emerging binary (3 of 5) dev-perl/Crypt-SSLeay-0.57
 * Crypt-SSLeay-0.57.tbz2 MD5 SHA1 size ;-) ...                                                                   [ ok ]
>>> Extracting info
>>> Extracting dev-perl/Crypt-SSLeay-0.57

>>> Installing dev-perl/Crypt-SSLeay-0.57
 * Man pages are not installed for most modules now.
 * Please use perldoc instead.

>>> Emerging binary (4 of 5) dev-perl/libwww-perl-5.805
 * libwww-perl-5.805.tbz2 MD5 SHA1 size ;-) ...                                                                   [ ok ]
>>> Extracting info
>>> Extracting dev-perl/libwww-perl-5.805

>>> Installing dev-perl/libwww-perl-5.805
 * Man pages are not installed for most modules now.
 * Please use perldoc instead.

>>> Emerging binary (5 of 5) app-portage/genlop-0.30.8-r1
 * genlop-0.30.8-r1.tbz2 MD5 SHA1 size ;-) ...                                                                    [ ok ]
>>> Extracting info
>>> Extracting app-portage/genlop-0.30.8-r1

>>> Installing app-portage/genlop-0.30.8-r1

 * To enable command-line completion for genlop, run:
 * 
 *   eselect bashcomp enable genlop


>>> Recording app-portage/genlop in "world" favorites file...
>>> Auto-cleaning packages...

>>> No outdated packages were found on your system.

 * GNU info directory index is up-to-date.

 * IMPORTANT: 7 config files in '/etc' need updating.
 * See the CONFIGURATION FILES section of the emerge
 * man page to learn how to update config files.
deploy@ip-10-66-101-55 ~ $ Read from remote host ec2-174-129-17-196.compute-1.amazonaws.com: Operation timed out
Connection to ec2-174-129-17-196.compute-1.amazonaws.com closed.

[Process completed]
and then freeze.  -->

<!-- I try again and it just checks stuff and doesn't freeze, then I can run the next command. -->

<!-- sudo genlop -el
 * sys-apps/portage

     Mon Sep 21 12:11:08 2009 >>> sys-apps/portage-2.2_rc28
     Mon Sep 21 12:11:39 2009 >>> net-misc/rsync-3.0.5
     Mon Sep 21 12:11:42 2009 >>> app-admin/eselect-news-20080320
     Mon Sep 21 12:11:50 2009 >>> app-misc/pax-utils-0.1.19
     Mon Sep 21 12:12:24 2009 >>> sys-apps/busybox-1.12.2-r1
     Mon Sep 21 12:12:38 2009 >>> sys-apps/man-1.6f-r3
     Mon Sep 21 12:13:03 2009 >>> sys-libs/readline-5.2_p13
     Mon Sep 21 12:13:18 2009 >>> sys-apps/portage-2.2_rc28
     Mon Sep 21 12:13:57 2009 >>> media-libs/freetype-2.3.8
     Mon Sep 21 12:14:14 2009 >>> app-text/libpaper-1.1.23
     Mon Sep 21 12:14:22 2009 >>> app-portage/portage-utils-0.1.29
     Mon Sep 21 12:14:45 2009 >>> dev-db/sqlite-3.6.13
     Mon Sep 21 12:14:51 2009 >>> sys-process/cronbase-0.3.2-r1
     Mon Sep 21 12:14:54 2009 >>> dev-db/mysql-init-scripts-1.2-r1
     Mon Sep 21 12:15:17 2009 >>> dev-libs/libevent-1.4.7
     Mon Sep 21 12:15:22 2009 >>> media-fonts/gnu-gs-fonts-std-8.11
     Mon Sep 21 12:15:34 2009 >>> app-arch/cabextract-1.2
     Mon Sep 21 12:15:41 2009 >>> app-arch/unzip-5.52-r2
     Mon Sep 21 12:15:44 2009 >>> sys-apps/ey-util-scripts-0.3
     Mon Sep 21 12:16:18 2009 >>> dev-lang/spidermonkey-1.7.0
     Mon Sep 21 12:19:59 2009 >>> dev-libs/icu-3.8.1-r1
     Mon Sep 21 12:20:02 2009 >>> app-misc/mime-types-7
     Mon Sep 21 12:20:09 2009 >>> net-misc/dhcpcd-4.0.2
     Mon Sep 21 12:20:13 2009 >>> sys-apps/ey-cluster-base-0.1.1
     Mon Sep 21 12:20:20 2009 >>> sys-fs/mdadm-2.6.4-r1
     Mon Sep 21 12:20:26 2009 >>> www-servers/mini_httpd-1.19
     Mon Sep 21 12:20:34 2009 >>> app-arch/zip-2.32-r1
     Mon Sep 21 12:20:43 2009 >>> sys-devel/automake-1.7.9-r1
     Mon Sep 21 12:20:54 2009 >>> sys-devel/automake-1.9.6-r2
     Mon Sep 21 12:21:08 2009 >>> media-libs/jpeg-6b-r8
     Mon Sep 21 12:21:25 2009 >>> media-libs/libpng-1.2.33
     Mon Sep 21 12:22:31 2009 >>> dev-libs/apr-1.3.3
     Mon Sep 21 12:23:27 2009 >>> net-misc/curl-7.19.4
     Mon Sep 21 12:23:40 2009 >>> mail-mta/ssmtp-2.62-r3
     Mon Sep 21 12:23:48 2009 >>> perl-core/Scalar-List-Utils-1.19
     Mon Sep 21 12:26:47 2009 >>> dev-libs/openssl-0.9.8k
     Mon Sep 21 12:31:20 2009 >>> dev-lang/erlang-12.2.5-r1
     Mon Sep 21 12:31:28 2009 >>> app-admin/sysklogd-1.4.2_pre20061230-r5
     Mon Sep 21 12:31:32 2009 >>> virtual/perl-MIME-Base64-3.07
     Mon Sep 21 12:36:34 2009 >>> sys-kernel/amazon-xen-sources-2.6.18
     Mon Sep 21 12:36:43 2009 >>> perl-core/Sys-Syslog-0.18
     Mon Sep 21 12:36:53 2009 >>> perl-core/Storable-2.18
     Mon Sep 21 12:36:57 2009 >>> dev-java/java-config-wrapper-0.15
     Mon Sep 21 12:37:06 2009 >>> dev-perl/Compress-Raw-Zlib-2.015
     Mon Sep 21 12:37:18 2009 >>> net-misc/memcached-1.2.6
     Mon Sep 21 12:37:56 2009 >>> net-misc/neon-0.28.3
     Mon Sep 21 12:38:00 2009 >>> app-admin/eselect-ruby-20081227
     Mon Sep 21 12:38:18 2009 >>> media-libs/libart_lgpl-2.3.20
     Mon Sep 21 12:38:33 2009 >>> dev-python/egenix-mx-base-2.0.5
     Mon Sep 21 12:38:38 2009 >>> app-admin/eselect-postgresql-0.3
     Mon Sep 21 12:39:11 2009 >>> dev-libs/geoip-1.4.5
     Mon Sep 21 12:39:17 2009 >>> sys-apps/ed-1.0
     Mon Sep 21 12:39:24 2009 >>> dev-perl/Net-Daemon-0.43
     Mon Sep 21 12:39:41 2009 >>> dev-libs/libgpg-error-1.6
     Mon Sep 21 12:39:48 2009 >>> dev-perl/HTML-Tagset-3.20
     Mon Sep 21 12:39:52 2009 >>> virtual/perl-Digest-MD5-2.36
     Mon Sep 21 12:40:04 2009 >>> dev-perl/Net-SSLeay-1.30
     Mon Sep 21 12:40:11 2009 >>> dev-perl/yaml-0.65
     Mon Sep 21 12:40:18 2009 >>> dev-perl/IO-String-1.08
     Mon Sep 21 12:40:24 2009 >>> perl-core/Package-Constants-0.01
     Mon Sep 21 12:40:32 2009 >>> dev-perl/Compress-Raw-Bzip2-2.015
     Mon Sep 21 12:40:47 2009 >>> net-libs/libpcap-0.9.8-r2
     Mon Sep 21 12:41:19 2009 >>> app-portage/eix-0.16.0
     Mon Sep 21 12:41:25 2009 >>> sys-apps/ey-monit-scripts-0.14
     Mon Sep 21 12:41:31 2009 >>> app-portage/gentoolkit-0.2.4.2
     Mon Sep 21 12:41:41 2009 >>> sys-apps/iproute2-2.6.22.20070710
     Mon Sep 21 12:41:49 2009 >>> app-admin/logrotate-3.7.2
     Mon Sep 21 12:41:58 2009 >>> sys-process/lsof-4.78-r2
     Mon Sep 21 12:42:20 2009 >>> app-admin/monit-4.10.1
     Mon Sep 21 12:42:38 2009 >>> app-misc/screen-4.0.3
     Mon Sep 21 12:44:01 2009 >>> dev-lang/ruby-1.8.6_p383
     Mon Sep 21 12:45:09 2009 >>> dev-db/postgresql-base-8.3.5
     Mon Sep 21 12:45:53 2009 >>> media-libs/tiff-3.8.2-r4
     Mon Sep 21 12:46:00 2009 >>> perl-core/digest-base-1.15
     Mon Sep 21 12:46:31 2009 >>> dev-libs/libgcrypt-1.4.0-r1
     Mon Sep 21 12:47:06 2009 >>> media-libs/jasper-1.900.1-r2
     Mon Sep 21 12:47:11 2009 >>> virtual/perl-Scalar-List-Utils-1.19
     Mon Sep 21 12:47:18 2009 >>> dev-perl/URI-1.35
     Mon Sep 21 12:47:38 2009 >>> sys-fs/fuse-2.7.0
     Mon Sep 21 12:47:42 2009 >>> virtual/perl-Sys-Syslog-0.18
     Mon Sep 21 12:47:47 2009 >>> virtual/perl-Storable-2.18
     Mon Sep 21 12:47:54 2009 >>> dev-java/java-config-2.1.6-r1
     Mon Sep 21 12:48:00 2009 >>> dev-java/java-config-1.3.7-r1
     Mon Sep 21 12:48:28 2009 >>> media-libs/gd-2.0.35
     Mon Sep 21 12:48:35 2009 >>> dev-perl/IO-Socket-SSL-1.13
     Mon Sep 21 12:48:45 2009 >>> sys-process/at-3.1.8-r11
     Mon Sep 21 12:48:50 2009 >>> net-misc/rabbitmq-server-1.5.4
     Mon Sep 21 12:49:16 2009 >>> dev-db/couchdb-0.9.0
     Mon Sep 21 12:49:25 2009 >>> dev-perl/HTML-Parser-3.56
     Mon Sep 21 12:49:49 2009 >>> net-firewall/iptables-1.4.0-r1
     Mon Sep 21 12:50:10 2009 >>> app-admin/sudo-1.7.0
     Mon Sep 21 12:50:18 2009 >>> sys-process/vixie-cron-4.1-r10
     Mon Sep 21 12:50:23 2009 >>> virtual/postgresql-base-8.3
     Mon Sep 21 12:50:29 2009 >>> dev-perl/IO-Compress-Base-2.015
     Mon Sep 21 12:50:33 2009 >>> virtual/perl-digest-base-1.15
     Mon Sep 21 12:51:21 2009 >>> dev-libs/libxslt-1.1.24-r1
     Mon Sep 21 12:52:05 2009 >>> net-analyzer/rrdtool-1.2.28
     Mon Sep 21 12:52:12 2009 >>> dev-ruby/rubygems-1.3.5
     Mon Sep 21 12:52:19 2009 >>> dev-perl/PlRPC-0.2020-r1
     Mon Sep 21 12:53:51 2009 >>> dev-java/sun-jdk-1.6.0.11
     Mon Sep 21 12:53:59 2009 >>> dev-ruby/ruby-shadow-1.4.1
     Mon Sep 21 12:54:06 2009 >>> sys-fs/s3fs-177
     Mon Sep 21 12:54:13 2009 >>> dev-ruby/ruby-postgres-0.7.1
     Mon Sep 21 12:54:28 2009 >>> dev-perl/DBI-1.601
     Mon Sep 21 12:54:36 2009 >>> dev-perl/Digest-SHA1-2.11
     Mon Sep 21 12:54:43 2009 >>> dev-perl/IO-Compress-Bzip2-2.015
     Mon Sep 21 12:54:50 2009 >>> dev-perl/IO-Compress-Zlib-2.015
     Mon Sep 21 12:54:55 2009 >>> virtual/jdk-1.6.0
     Mon Sep 21 12:55:42 2009 >>> www-servers/nginx-0.6.35-r19
     Mon Sep 21 12:59:34 2009 >>> dev-db/postgresql-server-8.3.5
     Mon Sep 21 12:59:42 2009 >>> dev-perl/Compress-Zlib-2.015
     Mon Sep 21 12:59:49 2009 >>> dev-perl/Digest-HMAC-1.01-r1
     Mon Sep 21 12:59:57 2009 >>> dev-perl/Authen-SASL-2.12
     Mon Sep 21 13:00:03 2009 >>> dev-perl/IO-Zlib-1.09
     Mon Sep 21 13:00:10 2009 >>> perl-core/libnet-1.22
     Mon Sep 21 13:00:17 2009 >>> dev-perl/Archive-Tar-1.40
     Mon Sep 21 13:00:22 2009 >>> virtual/perl-libnet-1.22
     Mon Sep 21 13:00:28 2009 >>> dev-perl/Net-SMTP-SSL-1.01
     Mon Sep 21 13:05:32 2009 >>> dev-db/mysql-community-5.0.51
     Mon Sep 21 13:05:37 2009 >>> virtual/mysql-5.0
     Mon Sep 21 13:05:55 2009 >>> dev-perl/DBD-mysql-4.00.5
     Mon Sep 21 13:06:14 2009 >>> dev-libs/apr-util-1.3.4
     Mon Sep 21 13:06:21 2009 >>> dev-ruby/mysql-ruby-2.7.5
     Mon Sep 21 13:07:42 2009 >>> dev-libs/cyrus-sasl-2.1.22-r2
     Mon Sep 21 13:08:17 2009 >>> app-misc/sphinx-0.9.8.1
     Mon Sep 21 13:09:22 2009 >>> sys-apps/collectd-4.5.2-r1
     Mon Sep 21 13:09:46 2009 >>> app-admin/apache-tools-2.2.9
     Mon Sep 21 13:09:52 2009 >>> dev-ruby/ruby-dbi-0.1.1
     Mon Sep 21 13:12:46 2009 >>> dev-util/subversion-1.5.7
     Mon Sep 21 13:14:23 2009 >>> www-servers/apache-2.2.9-r1
     Mon Sep 21 13:14:57 2009 >>> media-libs/fontconfig-2.6.0-r2
     Mon Sep 21 13:15:02 2009 >>> app-admin/eselect-fontconfig-1.0
     Mon Sep 21 13:15:12 2009 >>> media-fonts/corefonts-1-r4
     Mon Sep 21 13:16:00 2009 >>> app-text/poppler-0.8.7
     Mon Sep 21 13:16:10 2009 >>> dev-perl/module-build-0.28.08
     Mon Sep 21 13:16:17 2009 >>> dev-perl/ExtUtils-CBuilder-0.23
     Mon Sep 21 13:16:23 2009 >>> dev-perl/extutils-parsexs-2.19
     Mon Sep 21 13:16:30 2009 >>> dev-perl/Error-0.17.012
     Mon Sep 21 13:17:00 2009 >>> dev-util/git-1.6.0.6
     Mon Sep 21 13:17:56 2009 >>> net-print/cups-1.3.8-r2
     Mon Sep 21 13:23:30 2009 >>> app-text/ghostscript-gpl-8.64-r2
     Mon Sep 21 13:23:35 2009 >>> virtual/ghostscript-0
     Mon Sep 21 13:24:18 2009 >>> media-libs/libwmf-0.2.8.4
     Mon Sep 21 13:30:29 2009 >>> media-gfx/imagemagick-6.4.8.3
     Mon Nov 14 22:16:43 2011 >>> dev-util/git-1.7.3.5
     Mon Nov 14 22:25:00 2011 >>> dev-lang/ruby-1.9.2_p290
     Mon Nov 14 22:25:14 2011 >>> dev-lang/ruby-1.8.7_p352
     Mon Nov 14 22:25:25 2011 >>> app-admin/eselect-ruby-20110201
     Mon Nov 14 22:25:57 2011 >>> dev-java/jruby-bin-1.6.5
     Mon Nov 14 22:26:29 2011 >>> dev-lang/rubinius-1.2.4
     Mon Nov 14 22:26:38 2011 >>> sys-libs/libunwind-0.98.5
     Mon Nov 14 22:26:44 2011 >>> dev-util/google-perftools-1.4
     Mon Nov 14 22:26:51 2011 >>> dev-lang/ruby-enterprise-1.8.7.2011.03
     Mon Nov 14 22:27:07 2011 >>> dev-ruby/rubygems-ee-1.3.6
     Mon Nov 14 22:27:56 2011 >>> x11-proto/xproto-7.0.10
     Mon Nov 14 22:28:04 2011 >>> net-firewall/iptables-1.4.3.2
     Mon Nov 14 22:28:10 2011 >>> net-libs/liboping-1.3.2
     Mon Nov 14 22:28:15 2011 >>> x11-proto/inputproto-1.4.2.1
     Mon Nov 14 22:28:21 2011 >>> x11-proto/renderproto-0.9.2
     Mon Nov 14 22:28:27 2011 >>> x11-proto/kbproto-1.0.3
     Mon Nov 14 22:28:33 2011 >>> x11-libs/xtrans-1.0.3
     Mon Nov 14 22:28:39 2011 >>> x11-libs/pixman-0.14.0-r1
     Mon Nov 14 22:28:47 2011 >>> dev-libs/glib-2.18.4-r1
     Mon Nov 14 22:28:53 2011 >>> net-libs/libesmtp-1.0.4
     Mon Nov 14 22:28:58 2011 >>> x11-proto/xextproto-7.0.2
     Mon Nov 14 22:29:04 2011 >>> x11-libs/libXau-1.0.3
     Mon Nov 14 22:29:10 2011 >>> x11-libs/libXdmcp-1.0.2
     Mon Nov 14 22:29:16 2011 >>> dev-perl/TermReadKey-2.30
     Mon Nov 14 22:29:22 2011 >>> dev-python/setuptools-0.6_rc8-r1
     Mon Nov 14 22:29:29 2011 >>> x11-libs/libX11-1.1.4
     Mon Nov 14 22:29:37 2011 >>> net-analyzer/net-snmp-5.4.1.1
     Mon Nov 14 22:29:42 2011 >>> x11-libs/libXrender-0.9.2
     Mon Nov 14 22:29:48 2011 >>> x11-libs/libXext-1.0.3
     Mon Nov 14 22:29:53 2011 >>> x11-libs/libXft-2.1.12
     Mon Nov 14 22:29:59 2011 >>> x11-libs/cairo-1.8.6-r1
     Mon Nov 14 22:30:05 2011 >>> x11-libs/pango-1.24.2
     Mon Nov 14 22:30:14 2011 >>> net-analyzer/rrdtool-1.4.5
     Mon Nov 14 22:30:23 2011 >>> sys-apps/collectd-4.10.2-r2
     Mon Nov 14 22:30:33 2011 >>> dev-perl/config-general-2.33
     Mon Nov 14 22:30:42 2011 >>> dev-perl/JSON-2.12
     Mon Nov 14 22:30:51 2011 >>> dev-perl/regexp-common-2.120
     Mon Nov 14 22:31:12 2011 >>> dev-db/redis-2.2.11
     Mon Nov 14 22:31:29 2011 >>> net-proxy/haproxy-1.4.8
     Mon Nov 14 22:31:43 2011 >>> dev-db/postgresql-base-9.0.4-r2
     Mon Nov 14 22:32:05 2011 >>> dev-libs/ossp-uuid-1.6.1
     Mon Nov 14 22:32:14 2011 >>> dev-db/postgresql-server-9.0.4-r2
     Mon Nov 14 22:32:25 2011 >>> dev-db/postgresql-base-9.1.1
     Mon Nov 14 22:32:37 2011 >>> dev-db/postgresql-server-9.1.1
     Mon Nov 14 22:33:20 2011 >>> sys-kernel/amazon-xen-sources-2.6.18
     Mon Nov 14 22:33:37 2011 >>> sys-process/iotop-0.2.1
     Mon Nov 14 22:36:34 2011 >>> dev-lang/ruby-1.8.7_p352
     Mon Nov 14 22:37:01 2011 >>> dev-db/postgresql-base-9.0.4-r2
     Mon Nov 14 22:37:15 2011 >>> dev-db/postgresql-server-9.0.4-r2
     Mon Nov 14 22:37:39 2011 >>> net-misc/memcached-1.4.5
     Mon Nov 14 22:37:49 2011 >>> dev-util/strace-4.5.18
     Mon Nov 14 22:37:59 2011 >>> net-misc/ntp-4.2.4_p4-r1
     Mon Nov 14 22:38:20 2011 >>> app-admin/monit-5.0.3
     Mon Nov 14 22:38:58 2011 >>> www-servers/nginx-0.8.55-r1
     Mon Nov 14 22:40:13 2011 >>> sys-kernel/amazon-xen-sources-2.6.32-r2
     Mon Nov 14 22:40:24 2011 >>> app-admin/sysstat-8.0.4-r1
     Mon Nov 14 22:40:40 2011 >>> dev-libs/libxml2-2.7.3-r2
     Mon Nov 14 22:40:50 2011 >>> net-mail/mailbase-1
     Mon Nov 14 22:40:58 2011 >>> mail-mta/ssmtp-2.62-r7
     Mon Nov 14 22:41:08 2011 >>> perl-core/Time-HiRes-1.97.15
     Mon Nov 14 22:41:13 2011 >>> dev-perl/Term-ANSIColor-1.12
     Mon Nov 14 22:41:19 2011 >>> virtual/perl-PodParser-1.35
     Mon Nov 14 22:41:24 2011 >>> perl-core/Getopt-Long-2.36
     Mon Nov 14 22:41:29 2011 >>> virtual/perl-Time-HiRes-1.97.15
     Mon Nov 14 22:41:34 2011 >>> virtual/perl-Getopt-Long-2.36
     Mon Nov 14 22:41:40 2011 >>> dev-db/mytop-1.4
     Mon Nov 14 22:41:51 2011 >>> dev-util/lockrun-2
     Mon Nov 14 22:42:11 2011 >>> perl-core/Test-Simple-0.80
     Mon Nov 14 22:42:21 2011 >>> virtual/perl-Test-Harness-3.10
     Mon Nov 14 22:42:31 2011 >>> virtual/perl-Test-Simple-0.80
     Mon Nov 14 22:42:50 2011 >>> dev-perl/DBD-Pg-1.49
     Mon Nov 14 22:43:10 2011 >>> dev-perl/TimeDate-1.16
     Mon Nov 14 22:43:23 2011 >>> app-shells/zsh-4.3.12
     Mon Nov 14 22:44:03 2011 >>> net-misc/wget-1.12-r3
     Mon Nov 14 22:44:53 2011 >>> dev-lang/erlang-13.2.4
     Mon Nov 14 22:46:11 2011 >>> net-libs/libnet-1.1.2.1-r1
     Mon Nov 14 22:46:35 2011 >>> dev-libs/libmix-2.05
     Mon Nov 14 22:46:51 2011 >>> net-analyzer/netcat-110-r8
     Mon Nov 14 22:47:02 2011 >>> net-dns/bind-tools-9.4.2_p2
     Mon Nov 14 22:48:31 2011 >>> app-misc/tmux-1.5
     Mon Nov 14 22:48:45 2011 >>> sys-libs/timezone-data-2011n
     Mon Nov 14 22:49:17 2011 >>> net-analyzer/goaccess-0.4.2
     Mon Nov 14 22:50:51 2011 >>> dev-lang/ruby-1.8.7_p352
     Mon Nov 14 22:51:41 2011 >>> dev-db/postgresql-base-9.0.4-r2
     Mon Nov 14 22:52:01 2011 >>> dev-db/postgresql-server-9.0.4-r2
     Mon Nov 14 22:54:12 2011 >>> sys-process/htop-0.9
     Mon Nov 14 23:00:15 2011 >>> sys-fs/device-mapper-1.02.24-r1
     Mon Nov 14 23:01:06 2011 >>> sys-fs/lvm2-2.02.36
     Fri Jan 13 01:27:21 2012 >>> app-arch/tar-1.26
     Fri Jan 13 01:27:33 2012 >>> net-misc/rsync-3.0.9
     Fri Jan 13 01:28:28 2012 >>> dev-java/sun-jdk-1.6.0.30
     Fri Jan 13 01:28:38 2012 >>> sys-apps/ey-monit-scripts-0.19.11
     Fri Jan 13 01:29:26 2012 >>> dev-libs/libyaml-0.1.4
     Fri Jan 13 01:29:35 2012 >>> dev-lang/ruby-1.9.2_p290-r1
     Fri Jan 13 01:30:18 2012 >>> www-servers/nginx-1.0.10
     Fri Jan 13 01:30:59 2012 >>> dev-db/redis-2.4.4
     Fri Jan 13 22:16:14 2012 >>> dev-perl/DateManip-5.54
     Fri Jan 13 22:16:16 2012 >>> dev-perl/HTML-Tree-3.23
     Fri Jan 13 22:16:19 2012 >>> dev-perl/Crypt-SSLeay-0.57
     Fri Jan 13 22:16:22 2012 >>> dev-perl/libwww-perl-5.805
     Fri Jan 13 22:16:25 2012 >>> app-portage/genlop-0.30.8-r1
     Fri Jan 13 23:05:58 2012 >>> app-portage/genlop-0.30.8-r1
 -->

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

# Engine Yard AppCloud Technology Stack

### To ensure your satisfaction, we are continually working on the Engine Yard stack.

The Engine Yard Technology Stack is a fully-curated Ruby on Rails web application 
framework stack, designed and optimized for business-critical Ruby on Rails application 
development. 

Each component in the stack has been customized and optimized over 1,000s of developer 
hours by engineers at Engine Yard; our engineers include leading Ruby on Rails contributors, 
expert cluster engineers, and seasoned DBAs for web server performance, database efficiency, 
and long-term scalability. We meticulously test and fully integrate each new component and 
component update to provide reliability, security, and compatibility within the stack.

As a result of all the work we do, you can confidently deploy and manage your application with any Engine Yard cloud product. Read about the many [[benefits|http://www.engineyard.com/products/appcloud/benefits]] of using our Platform-as-a-Service.

<p class="note">
  <strong>This version is correct as of May 18, 2011.</strong>
</p>

<br /><br />

<table id="eystack">
  <col class="rowHeaders">
  <col>
  <col>
  <col>
  <col>
  <col>
  <thead>
    <tr>
      <th></th>
      <th>
        Engine Yard Recommends
      </th>
      <th>
        Engine Yard AppCloud Support
      </th>
      <th>
        xCloud Support
      </th>
      <th>
        Versions to avoid<br>
        and other comments
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="5">
        Ruby Interpreters
      </th>
    </tr>
    <tr>
      <td>
        MRI
      </td>
      <td>
        <ul>
          <li class="full">1.9.2.p180
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">1.9.2.p180
          </li>
        </ul>
        <ul>
          <li class="full">1.8.7.p352
          </li>
        </ul>
        <ul>
          <li class="experimental" title='Experimental'>1.8.6.p287 (patched) <sup>1</sup>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">1.9.2.p180
          </li>
        </ul>
        <ul>
          <li class="full">1.8.7.p352
          </li>
        </ul>
        <ul>
          <li class="full">1.8.6.p383
          </li>
        </ul>
      </td>
      <td>
        <p>
          1.8.5 and below, 1.8.6.p369 and below, 1.8.7.p171 and below, (multiple vulnerabilities)<br>
          <a href="http://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=ruby">http://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=ruby</a><br>
          1.9.1 is not supported
			<br>
		  1.8.6 is not available for new environments
        </p>
      </td>
    </tr>
    <tr>
      <td>
        JRuby/JVM
      </td>
      <td></td>
      <td></td>
      <td>
        <ul>
          <li class="full">JDK 1.6u16
          </li>
        </ul>
        <ul>
          <li class="beta" title='Beta'>1.5.6 <sup>3</sup>
          </li>
        </ul>
      </td>
      <td>
        <p>
          JRuby support is in beta3 status for Engine Yard AppCloud
        </p>
      </td>
    </tr>
    <tr>
      <td>
        REE
      </td>
      <td></td>
      <td>
        <ul>
          <li class="beta" title='Beta'>2010.02 <sup>3</sup>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="beta" title='Beta'>2010.02 <sup>3</sup>
          </li>
        </ul>
      </td>
      <td>
        <p>
          <span class="caps">REE</span> Support in beta3 status
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Rubinius
      </td>
      <td></td>
      <td>
        <ul>
          <li class="experimental" title='Experimental'>1.2.4 <sup>1</sup>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="experimental" title='Experimental'>1.2.4 <sup>1</sup>
          </li>
        </ul>
      </td>
      <td>
        <p>
          <span class="caps">Rubinius</span> support in Alpha1 status
        </p>
      </td>
    </tr>
	<tr>
      <th colspan="5">
        Frameworks
      </th>
    </tr>
    <tr>
      <td>
        Rails
      </td>
      <td>
        <ul>
          <li class="full">3.0.3
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">3.0.3
          </li>
        </ul>
        <ul>
          <li class="full">2.3.8
          </li>
        </ul>
        <ul>
          <li class="full">2.3.5
          </li>
        </ul>
        <ul>
          <li class="full">2.3.4
          </li>
        </ul>
        <ul>
          <li class="full">2.3.3
          </li>
        </ul>
        <ul>
          <li class="full">2.3.2
          </li>
        </ul>
        <ul>
          <li class="full">2.2.2
          </li>
        </ul>
        <ul>
          <li class="full">2.1.2
          </li>
        </ul>
        <ul>
          <li class="unsupported" title='Unsupported'>2.0.1→5 <sup>2</sup>
          </li>
        </ul>
        <ul>
          <li class="unsupported" title='Unsupported'>1.2.0→5 <sup>2</sup>
          </li>
        </ul>
        <ul>
          <li class="unsupported" title='Unsupported'>1.1.0→6 <sup>2</sup>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">3.0.3
          </li>
        </ul>
        <ul>
          <li class="full">2.3.8
          </li>
        </ul>
        <ul>
          <li class="full">2.3.5
          </li>
        </ul>
        <ul>
          <li class="full">2.3.4
          </li>
        </ul>
        <ul>
          <li class="full">2.3.3
          </li>
        </ul>
        <ul>
          <li class="full">2.3.2
          </li>
        </ul>
        <ul>
          <li class="full">2.2.2
          </li>
        </ul>
        <ul>
          <li class="full">2.1.2
          </li>
        </ul>
        <ul>
          <li class="unsupported" title='Unsupported'>2.0.1→5 <sup>2</sup>
          </li>
        </ul>
        <ul>
          <li class="unsupported" title='Unsupported'>1.2.0→5 <sup>2</sup>
          </li>
        </ul>
        <ul>
          <li class="unsupported" title='Unsupported'>1.1.0→6 <sup>2</sup>
          </li>
        </ul>
      </td>
      <td>
        <p>
          2.3.8 does not work with mongrel.<br>
          2.3.3 and below must apply a<br>
          <a href="http://www.engineyard.com/blog/2009/cross-site-scripting-vulnerability-in-rails-2-x-on-ruby-1-8-x/">patch for a cross-site scripting vulnerability</a><br>
          2.3.2 and below (multiple vulnerabilities)<br>
          <a href="http://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=rails">http://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=rails</a><br>
          <a href="http://groups.google.com/group/rubyonrails-security/browse_thread/thread/20e17a978d2ccbd3?hl=en&amp;nbsp">http://groups.google.com/group/rubyonrails-security/browse_thread/thread/20e17a978d2ccbd3?hl=en&amp;nbsp<br></a>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Merb
      </td>
      <td>
        <ul>
          <li class="full">1.1.3
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">1.1.3
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">1.1.3
          </li>
        </ul>
      </td>
      <td>
        <p>
          Avoid 1.0.11 and below (vulnerability in json_pure)<br>
          Engine Yard recommends latest release of 1.0 line with latest bug fixes
        </p>
      </td>
    </tr>
    <tr>
      <th colspan="5">
        Web/App
      </th>
    </tr>
    <tr>
      <td>
        nginx
      </td>
      <td>
        <ul>
          <li class="full">0.8.54
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">0.8.54
          </li>
        </ul>
        <ul>
          <li class="full">0.6.35-r25 (patched)
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">0.8.54
          </li>
        </ul>
        <ul>
          <li class="beta" title='Beta'>0.7.65-r23 <sup>3</sup>
          </li>
        </ul>
        <ul>
          <li class="full">0.6.35-r25 (patched)
          </li>
        </ul>
      </td>
      <td>
        <p>
          0.6.38 and below must apply several security patches<br>
          0.7.65-r2 support is in beta3 status for xCloud
        </p>
      </td>
    </tr>
    <tr>
      <td>
        mongrel
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        <p>
          1.1.3 and below (multiple vulnerabilities)<br>
          <a href="http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2007-6612">http://web.nvd.nist.gov/view/vuln/detail?vulnId=<span class="caps">CVE</span>-2007-6612</a>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        unicorn
      </td>
      <td>
        <ul>
          <li class="full">1.0.1
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">1.0.1
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">1.0.1
          </li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        haproxy
      </td>
      <td>
        <ul>
          <li class="full">1.4.2
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">1.4.2
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">1.4.2
          </li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        nginx/psgr
      </td>
      <td>
        <ul>
          <li class="full">0.6.35/2.2.8
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">0.6.35/2.2.8
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">0.6.35/2.2.8
          </li>
        </ul>
      </td>
      <td>
        <p>
          Passenger 2.2.3 (memory leak issues)<br>
          nginx must apply several security patches
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Rack
      </td>
      <td>
        <ul>
          <li class="full">1.0.1
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">1.0.1
          </li>
        </ul>
        <ul>
          <li class="unsupported" title='Unsupported'>0.9.1 <sup>2</sup>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">1.0.x
          </li>
        </ul>
      </td>
      <td>
        <p>
          All versions prior to 0.9.1 (vulnerability)<br>
          <a href="http://blade.nagaokaut.ac.jp/cgi-bin/scat.rb/ruby/ruby-talk/324389">http://blade.nagaokaut.ac.jp/cgi-bin/scat.rb/ruby/ruby-talk/324389</a>
        </p>
      </td>
    </tr>
    <tr>
      <th colspan="5">
        Databases
      </th>
    </tr>
    <tr>
      <td>
        MySQL
      </td>
      <td>
        <ul>
          <li class="full">5.1.53
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">5.0.51
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">5.1.53
          </li>
        </ul>
        <ul>
          <li class="full">5.1.45
          </li>
        </ul>
        <ul>
          <li class="full">5.0.77
          </li>
        </ul>
        <ul>
          <li class="full">5.0.51
          </li>
        </ul>
        <ul>
          <li class="full">5.0.45
          </li>
        </ul>
      </td>
      <td>
        <p>
          5.1 before 5.1.34 (multiple vulnerabilities)<br>
          5.0 before 5.0.45 (multiple vulnerabilities)<br>
          <a href="http://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=mysql">http://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=mysql</a>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Postgres
      </td>
      <td>
        <ul>
          <li class="full">9.0.2
          </li>
        </ul>
      </td>
      <td></td>
      <td>
        <ul>
          <li class="full">9.0.2
          </li>
        </ul>
        <ul>
          <li class="full">8.4.2
          </li>
        </ul>
        <ul>
          <li class="full">8.3.8
          </li>
        </ul>
        <ul>
          <li class="full">8.2.14
          </li>
        </ul>
      </td>
      <td>
        <p>
          All 8.2.x versions prior to 8.2.13, all 8.3.x versions prior to 8.3.7<br>
          <a href="http://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=postgresql">http://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=postgresql</a>
        </p>
      </td>
    </tr>
    <tr>
      <th colspan="5">
        Caches &amp; Stores
      </th>
    </tr>
    <tr>
      <td>
        memcached
      </td>
      <td>
        <ul>
          <li class="full">1.4.1
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">1.4.1
          </li>
        </ul>
        <ul>
          <li class="full">1.2.6
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">1.4.1
          </li>
        </ul>
        <ul>
          <li class="full">1.2.6
          </li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Redis
      </td>
      <td>
        <ul>
          <li class="beta" title='Beta'>1.2.6 <sup>3</sup>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="beta" title='Beta'>1.2.6 <sup>3</sup>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="beta" title='Beta'>1.2.6 <sup>3</sup>
          </li>
        </ul>
      </td>
      <td>
        <p>
          Recommend against the use of very large data sets with Redis 1.0
        </p>
      </td>
    </tr>
    <tr>
      <th colspan="5">
        OS
      </th>
    </tr>
    <tr>
      <td>
        Gentoo
      </td>
      <td>
        <ul>
          <li class="full">EY Portage
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">EY Portage
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">EY Portage
          </li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <th colspan="5">
        Background Job Processor
      </th>
    </tr>
    <tr>
      <td>
        delayed_job
      </td>
      <td>
        <ul>
          <li class="full">2.0.3
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">2.0.3
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">2.0.3
          </li>
        </ul>
      </td>
      <td>
        <p>
          We recommend use of the latest versions
        </p>
      </td>
    </tr>
    <tr>
      <td>
        BackgroundJob
      </td>
      <td>
        <ul>
          <li class="full">1.0.1
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">1.0.1
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">1.0.1
          </li>
        </ul>
      </td>
      <td>
        <p>
          We recommend <strong>against</strong> use of BackgroundRB
        </p>
      </td>
    </tr>
    <tr>
      <td>
        resque
      </td>
      <td></td>
      <td>
        <ul>
          <li class="experimental" title='Experimental'>1.5.0 <sup>1</sup>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="experimental" title='Experimental'>1.5.0 <sup>1</sup>
          </li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <th colspan="5">
        Search
      </th>
    </tr>
    <tr>
      <td>
        Sphinx (+Thinking Sphinx)
      </td>
      <td>
        <ul>
          <li class="full">0.9.9
          </li>
        </ul>
      </td>
      <td></td>
      <td>
        <ul>
          <li class="full">0.9.9
          </li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <th colspan="5">
        AVOID
      </th>
    </tr>
    <tr>
      <td>
        awstats
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        <p>
          Installing awstats is no longer supported within any Engine Yard environment. We recommend use of Google Analytics instead.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Ferret
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        <p>
          Engine Yard recommends against use of any version of Ferret on our platform.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        WordPress
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        <p>
          Engine Yard recommends use of a specialist WordPress hosting service for WordPress installations
        </p>
      </td>
    </tr>
  </tbody>
</table>

<div class="footnotes">

<p>
<sup>1</sup> These components are designated "experimental" for support purposes and are there for you to test 
and experiment with, but Engine Yard does not expect you to use these components in a production 
environment. If you encounter issues with an "experimental component", Engine Yard is interested 
in any feedback you are willing to share. Please submit a support request through the normal access 
methods. Engine Yard cannot, however, commit to troubleshoot, provide workarounds or provide fixes 
for these "experimental components", and there is no SLA offered when experimental components are 
used in production. Experimental components are listed for the purposes of displaying what components 
are in the pipeline toward fully supported status. But there is no guarantee that these components 
will, in fact, be supported at any future date—in many cases, our evaluation of experimental components 
result in a decision not to support the component.
</p>

<p>
<sup>2</sup> These version numbers are not covered by Engine Yard Support, although these versions 
may be installable from the user interface.
</p>

<p>
  <sup>3</sup> Engine Yard offers Beta support for components not currently covered under Engine 
  Yard's standard support services but included on a beta testing basis in the Engine Yard Technology 
  stack. Beta support enables customers to submit support requests on how to install and configure 
  the component according to its native documentation. For components covered under Beta support, 
  Engine Yard will also provide troubleshooting support on a 'best effort' basis. Because we don't 
  expect components covered by Beta support to be implemented in a production environment, our response 
  to support tickets may take longer than for components covered by our standard support services. Engine 
  Yard may forward any bug information to the developer community as appropriate. Depending on the 
  timing and severity of an issue, bugs may or may not be corrected before a later version of the component 
  is released and included in the Engine Yard Technology Stack.
</p>

<p>
  This listing is not exhaustive, but covers the essential components of the Engine Yard Stack. 
  We will install other commonly used components, such as solr, upon request but they will not be 
  covered by Engine Yard support plans, nor does the Engine Yard SLA apply when these components are used.
</p>


</div>


# Engine Yard Technology Stack

### To ensure your satisfaction, we are continually working on the Engine Yard stack.

The Engine Yard Technology Stack is a fully-curated Ruby on Rails web application 
framework stack, designed and optimized for business-critical Ruby on Rails application 
development. 

Each component in the stack has been customized and optimized over 1,000s of developer 
hours by engineers at Engine Yard; our engineers include leading Ruby on Rails contributors, 
expert cluster engineers, and seasoned DBAs for web server performance, database efficiency, 
and long-term scalability. We meticulously test and fully integrate each new component and 
component update to provide reliability, security, and compatibility within the stack.

As a result, you can confidently deploy and manage your application with any Engine Yard product. Read about the many [[benefits|http://www.engineyard.com/products/cloud/benefits]] of using our Platform-as-a-Service.

<p class="note">
  <strong>Note: </strong>This version is correct as of December 6, 2011.
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
      <th><li>Note:</li><li class="experimental" title='Experimental'>Alpha and Labs versions in red.</li><li class="beta" title='Beta'>Beta versions in yellow.</li></th>
      <th>
        We recommend
      </th>
      <th>
        Engine Yard Cloud support
      </th>
      <th>
        Engine Yard Managed support
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
        Interpreters
      </th>
    </tr>
    <tr>
      <td>
        Ruby
      </td>
      <td>
        <ul>
          <li class="full">1.9.2.p290
          </li>
        </ul>
      </td>
      <td>
		<ul>
          <li class="experimental" title='Experimental'>1.9.3.p0
          </li>        
        <ul>
          <li class="full">1.9.2.p290
          </li>
        </ul>
        <ul>
          <li class="full">1.8.7.p352
          </li>
        </ul>
        <ul>
          <li class="experimental" title='Experimental'>1.8.6.p420
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="experimental" title='Experimental'>1.9.3.p0
          </li>
        <ul>
          <li class="full">1.9.2.p290
          </li>
        </ul>
        <ul>
          <li class="full">1.8.7.p352
          </li>
        </ul>
        <ul>
          <li class="full">1.8.6.p420
          </li>
        </ul>
      </td>
      <td>
        <p>
          Avoid 1.8.5 and below, 1.8.6.p369 and below, 1.8.7.p171 and below, (multiple vulnerabilities)<br>
          <a href="http://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=ruby">http://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=ruby</a>.<br>
          1.9.1 is not supported.
			<br>
		  1.8.6 is not available for new environments.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        JRuby/JRE
      </td>
      <td></td>
      <td> 
	    <ul>
		  <li>1.6.5/1.6u26 
		  </li>
		</ul>
	  </td>
      <td>
        <ul>
          	<li>1.6.5/1.6u26 
			  </li>
        </ul>
      </td>
      <td>
        <p>
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
          <li class="full">2011.03
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">2011.03
          </li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        Rubinius
      </td>
      <td></td>
      <td>
        <ul>
          <li class="experimental" title='Experimental'>1.2.4
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="experimental" title='Experimental'>1.2.4
          </li>
        </ul>
      </td>
      <td>
        <p>
          <span class="caps">Rubinius</span> support is in Alpha status.
        </p>
      </td>
    </tr>
	<tr>
      <td>
        Node.js
      </td>
      <td>
        <ul>
          <li class="experimental">
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="experimental">0.6.1
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="experimental">0.6.1
          </li>
        </ul>
      </td>
      <td>
        <p>
          Node.js is a Labs feature.
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
          <li class="full">3.1.0
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">3.1.0
          </li>
        </ul>
		<ul>
          <li class="full">3.0.x
          </li>
        </ul>
        <ul>
          <li class="full">2.3.x
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
      </td>
      <td>
         <ul>
	      <li class="full">3.1.0
	      </li>
	        </ul>
	      <ul>
          <li class="full">3.0.x
          </li>
        </ul>
        <ul>
          <li class="full">2.3.x
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
      </td>
      <td>
        <p>
          2.3.8 does not work with Mongrel.<br>
          2.3.3 and below must apply a<br>
          <a href="http://www.engineyard.com/blog/2009/cross-site-scripting-vulnerability-in-rails-2-x-on-ruby-1-8-x/">patch for a cross-site scripting vulnerability</a>.<br>
          Avoid 2.3.2 and below (multiple vulnerabilities)<br>
          <a href="http://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=rails">http://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=rails</a> and <br>
          <a href="http://groups.google.com/group/rubyonrails-security/browse_thread/thread/20e17a978d2ccbd3?hl=en&amp;nbsp">http://groups.google.com/group/rubyonrails-security/browse_thread/thread/20e17a978d2ccbd3?hl=en&amp;nbsp.<br></a>
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
          Avoid 1.0.11 and below (vulnerability in json_pure).<br>
          We recommend latest release of 1.0 line with latest bug fixes.
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
          <li class="full">1.0.10
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">1.0.10
          </li>
        </ul>
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
          <li class="full">1.0.10
          </li>
        </ul>
        <ul>
          <li class="full">0.8.54
          </li>
        </ul>
        <ul>
          <li class="beta" title='Beta'>0.7.65-r23
          </li>
        </ul>
        <ul>
          <li class="full">0.6.35-r25 (patched)
          </li>
        </ul>
      </td>
      <td>
        <p>
          0.6.38 and below must apply several security patches.<br>
          0.7.65-r2 support is in Beta status for Engine Yard Managed.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Mongrel
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        <p>
          Avoid 1.1.3 and below (multiple vulnerabilities)<br>
          <a href="http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2007-6612">http://web.nvd.nist.gov/view/vuln/detail?vulnId=<span class="caps">CVE</span>-2007-6612</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Unicorn
      </td>
      <td>
        <ul>
          <li class="full">1.1.5
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">1.1.5
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">1.1.5
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
          <li class="full">1.0.10/3.0.11
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">1.0.10/3.0.11
          </li>
        </ul>
        <ul>
          <li class="full">0.8.54-r2/<br>3.0.7
          </li>
        </ul>
		<ul>
          <li class="full">0.7.65-r9/<br>2.2.10
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">1.0.10/3.0.11
          </li>
        </ul>
        <ul>
          <li class="full">0.8.54-r2/<br>3.0.7
          </li>
        </ul>
		<ul>
	       <li class="full">0.7.65-r9/<br>2.2.10
	       </li>
	    </ul>
      </td>
      <td>
        <p>
          Avoid Passenger 2.2.3 (memory leak issues).<br>
          nginx must apply several security patches.
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
      </td>
      <td>
        <ul>
          <li class="full">1.0.x
          </li>
        </ul>
      </td>
      <td>
        <p>
          Avoid all versions prior to 0.9.1 (vulnerability).<br>
          <a href="http://blade.nagaokaut.ac.jp/cgi-bin/scat.rb/ruby/ruby-talk/324389">http://blade.nagaokaut.ac.jp/cgi-bin/scat.rb/ruby/ruby-talk/324389</a>.
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
          <li class="full">5.1.55
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="beta">5.5.13
          </li>
		<li class="experimental">5.1.55
          </li>
		<li class="full">5.0.51
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full">5.1.55
          </li>
        </ul>
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
          <a href="http://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=mysql">http://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=mysql</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        PostgreSQL
      </td>
      <td>
      </td>
      <td>	
	    <ul>
		  <li class="experimental" title='Experimental'>9.0.4
          </li>
        </ul>
      </td>
      <td>
       	<ul>
		  <li class="experimental" title='Experimental'>9.0.4
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
          Avoid all 8.2.x versions prior to 8.2.13 and all 8.3.x versions prior to 8.3.7<br>
          <a href="http://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=postgresql">http://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=postgresql</a>.
        </p>
      </td>
    </tr>
 <tr>
      <td>
        MongoDB
      </td>
      <td>
      </td>
      <td>	
      </td>
      <td>
      </td>
      <td>
        <p>
         MonogoDB is currently being assessed for future support.
        </p>
      </td>
    </tr>
    <tr>
      <th colspan="5">
        Caches and stores
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
          <li class="beta" title='Beta'>2.4.2
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="beta" title='Beta'>2.4.2
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="beta" title='Beta'>2.4.2
          </li>
        </ul>
      </td>
      <td></td>
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
        Background job processor
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
          We recommend use of the latest versions.
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
          <li class="full" title='Full'>1.5.0
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li class="full" title='Full'>1.5.0 
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
          <li class="full">0.9.8.1
          </li>
        </ul>
      </td>
      <td></td>
      <td>
        <ul>
          <li class="full">0.9.8.1
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
          We recommend against use of any version of Ferret on our platform.
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
          We recommend use of a specialist WordPress hosting service for WordPress installations.
        </p>
      </td>
    </tr>
  </tbody>
</table>

<div class="footnotes">

<br> <br>
<strong>Beta components:</strong>
<ul>
		<li>
			Are available to all accounts (some restrictions may apply to trial accounts)
		</li>
		<li>
			Associated issues (bugs) may be forwarded to the developer community
		</li>
		<li>
			Installation and configuration support issues are addressed, but may be given low priority  
		</li>
		<li>
			Some issues may not be fixed before GA
		</li>
</ul>	
<br>
<strong>Alpha components and Engine Yard Labs components:</strong>
<ul>
	<li>
		Require signup
	</li>
	<li>
		Should not be used in a production environment
	</li>
	<li>
		Are not offered with an SLA
	</li>
	<li>
		Support issues are assigned low priority and might not be addressed
	</li>
</ul>	


<br>
  This listing is not exhaustive, but covers the essential components of the Engine Yard Stack. 
  We install other commonly used components, such as solr, upon request but these are not
  covered by Engine Yard support plans, nor does the Engine Yard SLA apply when these components are used.



</div>


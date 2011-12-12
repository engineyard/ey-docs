# Instance sizes

Below are the instance sizes that are available to boot on Engine Yard Cloud.  You have access to
seven different instance sizes broken down into three categories.

**Note:** Engine Yard recommends the High CPU Medium instances when your application starts
taking on heavier traffic or load.

This page describes:

* [[Normal instances|instance-sizes#normal]]
* [[High Memory instances|instance-sizes#memory]]
* [[High CPU instances|instance-sizes#cpu]]

  
<h2 id="normal">Normal instances</h2>
  
  * **Small** is 32-bit with 1.7 GB RAM, 1 ECU
      
    These instances are great for staging environments, development environments, and lower traffic production. 
    environments. With only a single ECU they're not ideal for production environments taking on larger 
    amounts of traffic. We have noticed these instances become CPU starved when serving higher amounts of traffic or load.
  
  * **Large** is 64-bit with 7.5 GB RAM, 4 ECU
    
    These instances are great when your application or database needs extra RAM but is not CPU starved.
    
  * **Extra Large** is 64-bit with 15 GB RAM, 8 ECU
    
    With extra RAM and CPU these instances are still affordable for those who need the extra horsepower.
    

<h2 id="memory">High memory instances</h2>
  
  * **High Memory Double Extra Large** is 64-bit with 34.2 GB RAM
    
    These instances are a perfect fit for databases with large datasets. You can relieve your database
    of disk reads by loading your data into RAM.
    
  * **High Memory Quadruple Extra Large** is 64-bit with 68.4 GB RAM, 26 ECU
    
    These are the largest instances you can boot on Engine Yard Cloud. With a massive amount of RAM, these are best used
    for your database tier or in-memory caches.

<h2 id="cpu">High CPU instances</h2>
  
  * **High CPU Medium** is 32-bit with 1.7 GB RAM, 5 ECU
  
    These are the most ideal instance size when your app is first starting to take on real production traffic. 
    They're also a great size for scaling out horizontally, allowing you to add or remove application instances 
    as need at an affordable rate. The 5 ECU's, equating to 2 VCPUs, is a wonderful balance of RAM to CPU.
    
  * **High CPU Extra Large** is 64-bit with 7 GB RAM, 20 ECU
  
    This instance size is great for those applications that are very CPU intensive.

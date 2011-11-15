# Configuring a custom cluster environment (database focus)

This page describes decisions you need to make when setting up database servers and database slaves for your application.

<!-- Use this page as an introduction. Make sure to address that we automatically create the database for you.
How to choose the size of the database instance
How to choose the size of the /db volume
When to choose a database slave (is there any point to having more than one slave?) -->

This is the process:

* [  ][1].  
* [  ][2].

For a small testing environment, a single server that contains both the application and the database is fine. 
For typical mid-scale applications using ... database ... 

However, for some applications, you want to create a custom cluster, containing:

* One application master
* One or more application application slaves
* One database master
* One or more database slaves
* One or more utility servers



##To set up a custom environment

1. Create the environment as described [[ Create an environment|environment-create]].
2. Choose Custom Environment.
3. 

       


<h2 id="topic5"> More information</h2>

<table>
  <tr>
    <th>For more information about...</th><th>See...</th>
  </tr>
  <tr>
    <td>Creating an environment</td><td>[[Create an environment|environment-create]]</td>
  </tr> 
</table>


[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"

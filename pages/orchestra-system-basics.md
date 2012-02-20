# System Basics

Orchestra is a PHP platform for deploying, scaling and managing your PHP applications. Built on Amazon Web Services, it integrates with your workflow, has the ability to autoscale up and down and gives you extra power with third-party addons.

# <a name="elastic-apps"></a>Elastic Applications

Elastic applications are the apps that allow you to sleep well at night. If your application usage increases and you have a sudden boost of users, your application will add computing units accordingly and remove computing units when they are no longer needed. You don't need to manually interact with the application settings or increase its resources. Elastic apps create dedicated load-balancing-mesh and dedicated computing units.

For managing the elasticity, or auto-scaling, we use a basic set of heuristics. Firstly we identify whether or not the CPU Usage of the computing unit is higher than a certain threshold. If the usage is higher than the Orchestra-defined threshold we raise a flag. If the usage stays above the threshold for over 4 checks (approximately 30 seconds), we add identical computing units to your load-balancing-mesh. Moroever, if the load is normal but your application stops responding to our ping, a flag is raised. We do 5 checks every 6 seconds and if the flag is still up after 5 checks, we add computing units to your load-balancing-mesh. The same happens on the downside when your usage goes down. We verify whether or not the original unit is sane and under the thresholds 5 times at 6 seconds interval and if it's in a sane and good position, we scale down automatically removing previously added computing units.

# <a name="basic-apps"></a>Basic Applications

Basic applications are the step between Free applications and Elastic Applications. They provide you with your dedicated resources and your own platform. Basic applications are eligible to any of the Orchestra Addons and can have custom domain names. 

Basic Applications are great for small websites and staging environments as they are identical to the Elastic applications only without the elasticity.

# <a name="free-apps"></a>Free Applications

Free applications are easy to launch and easy to stop. They allow you to test your application or even test the Orchestra deployment process at no cost. Just like Basic and Elastic Apps, Free apps allow you to attach Databases to your application and use them. Service-related addons as such as Automated Jobs and Simple Error Reporting are not eligible with free apps. Free apps also do not automatically scale and cannot have custom domain names associated.
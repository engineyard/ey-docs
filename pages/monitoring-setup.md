# Setup application monitoring on Engine Yard Cloud

With Instance Monitoring, Engine Yard keeps an eye on your instance, 
records the alerts, and (optionally) emails you. 

**Note:** Email alerts are disabled by default.  

The following steps will help you setup monitoring for your account:

* [[Enabling alerts for your environment|monitoring-setup#enable]]
* [[Viewing alerts in your environment|monitoring-setup#view]]

<h2 id="enable">Enable alerts</h2>

1. In Engine Yard Cloud, click Dashboard.
2. Select an environment by clicking the environment name.
3. On the Environment page, click Enable email alerts.
5. Specify an email address to receive alerts.
6. Click Update Alert Settings.

Follow the above steps for each environment that you would like to receive 
alerts.  For instance you may not need to receive alerts for your staging 
environment, but rather you would want alerts for your production environment.

<h2 id="view">View alerts</h2>

**Note:** You can view the alerts, even if you have not enabled email alerts.

1. In Engine Yard Cloud, click Dashboard.
2. Select an environment by clicking the environment name.
3. On the Environment page, click View All Alerts.
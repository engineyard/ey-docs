# Amazon Relational Database Service

Amazon Relational Database Service (Amazon RDS) is a web service that makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while managing time-consuming database administration tasks, freeing you up to focus on your applications and business.

Amazon RDS allows you to manage and scale your MySQL database needs with ease and at reasonable costs. 

In order for your Orchestra applications to be able to interact with your RDS setup, you will need to follow a few steps:

## <a name="zone"></a>Zone
Your RDS setup has to be in the us-east zone.

## <a name="allow-us"></a>Allow Orchestra 
From your Amazon RDS Console you should be able to create a new security group that you will then associate to your databases. 

You will need to add a new **EC2 Security Group** with the following settings:
  
  * **Security Group**: default 
  * **AWS Account ID**: 101208300087 

The end result should look like this:

![orchestra-addon-rds-security.png](/images/o-rds-1.png)


## <a name="connect-your-db"></a>Connecting to your databases
After you've allowed the Orchestra applications to interact with your RDS setup, you should simply be to set your application code to use the newly created database information and interact with it after your next commit/push. 

Should you run into issues, please <a href="https://support.orchestra.io/discussion/new?discussion[title]=Cannot+connect+to+RDS+Addon+Database&discussion[private]=1" target="_blank">let us know</a> and we'll be happy to assist you to resolve the issue.
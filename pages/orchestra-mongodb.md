# MongoDB

Orchestra allows you to easily create and manage MongoDB databases by transparently communicating with our MongoDB carefully selected third party provider [MongoLab](https://mongolab.com)

All the billing and the database management is done through Orchestra.io so you do not have to manage various accounts on various providers' website.

# <a name="enabling-the-addon"></a>Enabling the MongoDB Addon

Before anything else, users need to enable the addon on their account. To do so, go to https://my.orchestra.io/addons and enable the **MongoDB** addon:

![orchestra-addon-mongo.png](/images/o-mongo-db-1.png)


Once the addon is enabled, please read the <a href="#synopsis">synopsis</a> as it explains how we approached and enabled **MongoDB Databases** with Orchestra.

# <a name="synopsis"></a>Synopsis

MongoDB is a constantly growing database standard in the web world due to its simplicity and it's ability to scale. 

At Orchestra, we've made it extremely simple for you to use MongoDB with your applications. Keep in mind that if you want to try MongoDB without necessarily including it in your application, you can create the databases using the Orchestra MongoDB Addon and play around as you wish.

The first step after having enabled the addon, is <a href="#mongo-create">creating your first database</a>.

## <a name="mongo-create"></a>Creating your first database

Once you've enabled the addon, you should be able to access the [Orchestra.io MongoDB plan management page](https://my.orchestra.io/addons/mongo/manage/plans) either directly or via the **More Information** or **Manage Addon** link from the [addons](https://my.orchestra.io/addons) page. 

Select the *free* plan by clicking on **create**.

![orchestra-mongo-plan.png](/images/o-mongo-db-2.png)

After creating the database, you will be directed to your [MongoDB Addon Management Dashboard](https://my.orchestra.io/addons/mongo/manage). You will notice that the Addon management interface for **Mongo** is very similar to the **Application Dashboard**. 

![orchestra-mongo-dashboard.png](/images/o-mongo-db-3.png)


Like applications, you will get a list of your databases and you will be able to click on the arrow or the header to expand and retrieve their information. For your convenience, we've added a **connection string** which you can select and copy directly into your PHP code using the [MongoDB extension](http://php.net/mongo) which is enabled on all our servers by default.

Should you need any more information, feel free to contact us. We'd be happy to get your feedback on the extension and how it performs so do not hold back and let us know :)

If you'd like to get more information on our plans, please see <a href="#mongo-plans">this section which describes the plans</a> offered by our service.

## <a name="mongo-plans"></a>MongoDB Plans

**For the time being, we only offer free plans to our users.** More plans including *replication*, *automated backups*, *monitoring*, and larger storage sizes will be added shortly. If it's holding you back, please let us know and we'll accelerate the process for you.

The basic plan gives you access to a **FREE** and fully managed 240MB MongoDB database.

# Boot after an Amazon Out of Capacity Message

<html>
<iframe src="http://player.vimeo.com/video/16323186?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="690" height="375" frameborder="0"></iframe>
</html>

**Note:** Although we offer these instructions to help you quickly solve this issue manually, we are working on an automated solution.

When you are booting up your instance sometimes you run into this message: "Amazon is currently out of capacity".

* Wait for about a minute and then you see an Acknowledge link right next to the Custom log link appear. If you have an application master and master database running the link appears for each of them.

* After the links appear, click on them until you have no running instances in your environment.

* Under More Options, you see many options to choose from. For this particular case, click Edit Environment.

* You are then be presented with the Edit the Environment page that you had during the quick start process. Here click the (show advanced options) link.

* Now you are presented with a list of advanced option that includes changing the Runtime and the most important for this error, the Availability Zone. Change the availability zone from what it currently is to another area. After you have done this, make sure to click the Update Instances button.

* You are then be redirected to the Dashboard. Here you want to click the Boot Instance button. Then choose what type of configuration you want to have and boot up again.

When you boot up again the error should disappear and your application and master server are setup and ready to go.  Repeat (if at all necessary).
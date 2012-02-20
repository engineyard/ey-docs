# Symfony

Using Symfony with Orchestra is easy. For your convenience we've even created a public Assembla SVN repository that contains a custom <a href="http://www.assembla.com/code/sample-symfony/subversion/nodes">Symfony code example</a>.

If you would like to deploy this application:

  1. Go to your Orchestra dashboard and click on **Deploy new App**
  2. Copy `https://subversion.assembla.com/svn/sample-symfony/trunk/` into your **Repo URL**
  3. Set your **Index File** to `example/web/index.php`
  4. Click on **Launch**

Once your application is deployed, go to your application URL and you will see the Symfony greeting.

# <a name="special-care"></a>Special Care
As symfony heavily relies on a file caching mechanism, make sure that your `config/ProjectConfiguration.class.php` file looks like:

<pre>
<code>
&lt;?php

require_once dirname(__FILE__).'/../lib/vendor/symfony/lib/autoload/sfCoreAutoload.class.php';
sfCoreAutoload::register();

class ProjectConfiguration extends sfProjectConfiguration
{
  public function setup()
  {
    $this->enablePlugins('sfDoctrinePlugin');
    $this->setCacheDir(sys_get_temp_dir()); // <-- important
    $this->setLogDir(sys_get_temp_dir());     // <-- important
  }
}

</code>
</pre>
By doing this, your caching directories will be set to the folders you have access to on the computing unit. Moreover, by not having caching files already defined in the repository directly but instead only pointing to your temp folder allows us to easily scale your application without having to consider whether or not there are ties that may break. 
# Getting Started

Deploying apps with Orchestra is easy. Sometimes, due to our restrictions you may have to do a few changes and this page lists the few changes you may have to do for Symfony2 to run perfectly.

Firstly, in your Symfony2 structure you have an `app/AppKernel.php` file that you have to modify to override the `getCacheDir()` and `getLogDir()` methods. This can be done like such:

    public function getCacheDir()
    {
        if ($this->getEnvironment() == 'prod') {
            if (!is_dir(sys_get_temp_dir() . '/sf2standard/cache')) {
                mkdir(sys_get_temp_dir() . '/sf2standard/cache', 0777, true);
            }

            return sys_get_temp_dir() . '/sf2standard/cache';
        }

        return parent::getCacheDir();
    }

    public function getLogDir()
    {
        if ($this->getEnvironment() == 'prod') {
            if (!is_dir(sys_get_temp_dir() . '/sf2standard/logs')) {
                mkdir(sys_get_temp_dir() . '/sf2standard/logs', 0777, true);
            }


            return sys_get_temp_dir() . '/sf2standard/logs';
        }

        return parent::getLogDir();
    }
    

You will now have working logs and caching directories. The next step applies if you are using Symfony2/Doctrine2 *Hydrators* and *Proxies*.

Normal *Proxies* and *Hydrators* are generated into the **caching** directories but as it is not possible to invoke the Symfony2 *CLI* tool from the Orchestra server therefore, you will need to generate those proxies locally and store them in your repository. This shouldn't cause problems because in production they are only generated once. Please keep reading before you go ahead and generate those files.

Should you wish to keep your normal `app/cache/dev` environment when developing locally, you will have to add the following to your ***.gitignore***

    app/logs/*
    app/cache/*
    !app/cache/prod/doctrine
    web/bundles
    bin
    ._*
    .DS_Store 

The last step before generating the proxy files, we need to modify the `proxy_dir` settings in our `app/config_prod.yml`. It should contain the following:

    doctrine:
        orm:
            proxy_dir: %kernel.root_dir%/cache/%kernel.environment%/doctrine/orm/Proxies
            
You can see the full content of the `app/config_prod.yml` file [in our Symfony2 Repository](https://github.com/orchestra-io/sample-symfony2/blob/master/app/config/config_prod.yml).

We are now ready to generate our *proxies* and *hydrators* like this:

    $> php app/console --env=prod doctrine:generate:proxie
    
Once you've generated the files, make sure to **add** them to your repository and then:

    $> git push origin my-orchestra-app-branch
    

After you've pushed your changes, you are ready to create your Orchestra.io application. If it's already an application, wait a minute and the changes will appear magically.


# Cache

As described in the previous section, Symfony2 has its own caching mechanism for the code. As Orchestra.io doesn't allow users to execute ***CLI*** commands over SSH and for some reason you need to clear your generated cache, we've included a small script in the `web/clear.php` file. You can see it [here](https://github.com/orchestra-io/sample-symfony2/blob/master/web/clear.php). This is not a file we recommend leaving there because it implies that everyone could clear the cache at anytime thus slowing down your website for other users.


# Logging

Furthermore, we recommend that our Symfony2 users configure their logging settings to save to an S3 bucket. Symfony2 primarly uses Monolog for logging. Monolog has built-in support for streams which makes it quite easy to configure your application to write the logs to an **Amazon S3** bucket of your choice. Considering that the files hosted on the Orchestra.io platform are not guaranteed to be persistent — as described in the [File Uploads and Hosting of our System Constraints](https://orchestra.tenderapp.com/kb/system-constraints/system-constraints#file-uploads-hosting).

To configure Monolog to use an Amazon S3 wrapper, you will have to modify your `app/config_prod.yml` to contain the following:

    monolog:
        handlers:
            nested:
                type:  stream
                path:  s3://bucket-name/folder-name/%kernel.environment%.log
                level: debug
                
At this point, you will need to make sure that a stream wrapper has been registered with PHP. As [previously recommended](https://orchestra.tenderapp.com/kb/system-constraints/system-constraints#frameworks-s3-libraries) the [PEAR::Amazon_Services_S3](http://pear.php.net/Services_Amazon_S3) could be used for this. Fortunately, for the purpose
of this example, the required PEAR packages are included in the **vendor/pear** directory of this repository.

If you want to register an S3 Stream wrapper but you aren't sure how, we encourage you to look at our [Orchestra S3 Stream Bundle](https://github.com/orchestra-io/symfony2-s3streambundle) for Symfony2. It's free and it's on Github. If you follow the [README](https://github.com/orchestra-io/symfony2-s3streambundle/blob/master/README.md) you should be able to get running in no time. If you run into issues, feel free to contact us via [Github](https://github.com/orchestra-io), [Twitter](https://twitter.com/orchestra_io), [email](mailto://info@orchestra.io) or using our [support center](https://docs.orchestra.io/).



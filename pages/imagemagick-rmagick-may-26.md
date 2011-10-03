#Error message when deploying: Can't install RMagick 2.13.1. You must have ImageMagick 6.4.9 or later.

Engine Yard Cloud platform comes preinstalled with ImageMagick 6.4.8. The newest version of the RMagick gem, version 2.13.1, requires ImageMagick 6.4.9 or higher. Therefore, you receive an error message when attempting to install RMagick 2.13.1.

Here are some workarounds:

- Use RMagick 2.12.2. ImageMagick 6.4.8 is compatible with RMagick 2.12.2.

- If your application depends on RMagick 2.13.1, write a [[custom chef recipe|custom-chef-recipes]] to install a newer version of ImageMagick.
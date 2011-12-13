# About alerts for your environment

## Load Average

Load average represents the average system load an instance experiences over a period of time. 

###Current Thresholds:

  * Warn: 4 x vCPU
  * Fail: 10 x vCPU

For example: a 1 vCPU, the load would be 4.00 but a 5 vCPU, it would be 20.00.  

**Note:** A vCPU is the same as an ECU (an Amazon EC2 Compute Unit).

For general information about how load average is calculated, see [[Load (computing)|http://en.wikipedia.org/wiki/Load_%28computing%29]].

## IO-Wait

The instances cpu is waiting for disk writes to complete before it can move on to other operations.

###Current Thresholds:

  * Warn: 40% iowait
  * Fail: 80% iowait


## Swap Used

The amount of swap hard disk space used as virtual memory resources.  High swap is an 
indication that an instance needs more memory.

###Current Thresholds:

  * Warn: 128 MB Swap Used
  * Fail: 384 MB Swap Used

## Free Space

Free space is monitored on these mount points: `/`, `/data`, `/db`, and `/mnt`.

You might not realize the instance is almost out of disk space until you get this alert. The thresholds are calculated based on the space allocated to the mount point.

###Current Thresholds:

* Warn: If the disk space for a particular mount point is 10 GB or less, then the warning threshold is 70% full. If the disk space is greater than 10 GB, then the warning threshold is 80% full. 
* Fail: 90% of disk space is full.
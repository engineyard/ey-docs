# Understand alerts for your environment

## Load Average

Something is consuming system resources.  If this is sustained for a long period it can warrant getting on the instance and troubleshooting. 

Current Thresholds:

  * Warn: 4 x VCPU
  * Fail: 10 x VCPU

For example: a 1 VCPU, the load would be 4.00 but a 5 VCPU, it would be 20.00.  

## IO-Wait

The instance is waiting for disk writes to complete before it can move to other operations.

Current Thresholds:

  * Warn: 40% iowait
  * Fail: 80% iowait


## Swap Used

This alerts when the swap space is getting low.  

Current Thresholds:

  * Warn: 128 MB Swap Used
  * Fail: 384 MB Swap Used

## Free Space

Free space is monitored on these mount points: `/`, `/data`, `/db`, and `/mnt`.

You might not realize the instance is almost out of disk space until you get this alert. The thresholds are calculated based on the space allocated to the mount point.

Current Thresholds:

* Warn: If the disk space for a particular mount point is 10 GB or less, then the warning threshold is 70% full. If the disk space is greater than 10 GB, then the warning threshold is 80% full. 
* Fail: 90% of disk space is full.
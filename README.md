# OFAC checker app

Quite simple, but highly upgradable app for checking person on being in OFAC list.

App uses entered data about the person (full name, country, and date of birth) to provide a report about this person against the publicly available OFAC Specially Designated Nationals (SDN) list.

App contains next features:
	* Checking entered data to be correct
	* Autofilling values
	* Helpfull for people with disabilities
	* Highly upgradable
	* Theme-switcher, smooth animation for customer satisfaction
	* Privacy and Security information about the service
	* Adaptive desing for any kind of devices
	* Save settings for next sessions to be more comfort in use


Backend based on Amazon EC2 instance and provides a response for frontend about OFAC hit/clears with country list for autofilling
For scaling backend for this app some actions can be taken:
	* Add Auto Scaling Group for auto-creating new instances
	* Create instances in some Regions
	* Use Route53 and Auto Load Balancer to get the fastest Region
	* Use Image Builder to create EC2 faster
	* Due to the small size of OFAC list (less than 100Mb) use In-Memory database (Redis, ElastiCache, DynamoDB+DAX) in different regions
	* Use Lambda for daily update database from relevant sources


	

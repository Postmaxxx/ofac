# OFAC checker app

Quite simple yet highly upgradable, the app checks individuals against the OFAC list to determine if they are listed as Specially Designated Nationals (SDNs). The app utilizes entered data, including full name, country, and date of birth, to generate a report based on publicly available OFAC information.


## Key Features:
- Verification of entered data for accuracy
- Autofill functionality for user convenience
- Accessibility features for users with disabilities
- Highly upgradable
- Theme-switcher and smooth animations for enhanced customer satisfaction
- Privacy and security information provided
- Adaptive design for seamless use on various devices
- Save settings for next sessions to be more comfort in use
- Ci/CD pipeline


The backend, hosted on an Amazon EC2 instance, provides a response to the frontend with information on OFAC hits/clears for requested person, along with a country list for autofilling. To scale the backend, consider the following actions:

## Improvements:
- Add an Auto Scaling Group for automatic creation of new instances by load or assignment.
- Deploy instances in different regions.
- Use Route53 and an Auto Load Balancer to work with the fastest region.
- Use AMI for EC2 instance creation and backup.
- Due to the small size of the OFAC list (less than 100Mb), consider using an In-Memory databases (Redis, ElastiCache, DynamoDB+DAX) in different regions alongwith using primary SQL Database for storing data.
- Implement AWS Lambda or EC2 for daily databases updates from relevant sources.
- Use CDN for geo-caching frontend app.
- Storing sensitive data (i.e. names, IDs and so on) will require isolated segment of network with strong security policy and firewall.

These improvements will enhance the app's scalability, reliability, and efficiency.

**Link to app: https://postmaxxx.github.io/ofac**





### Start App
```bash
npm run server_be_dev
npm run server_fe_dev
```
**_Do not forget to add your apiKey in /backend/.env.development file_**

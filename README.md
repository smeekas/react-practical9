# react-practical-9

##### Hosted react-practical-8 on AWS with CI/CD integration with github workflow
##### here is the link: 
http://react-practical9.s3-website-us-west-2.amazonaws.com/

### Step by step guide

1. First of all create s3 bucket by clicking orange button
![screenshot](./public/createBucket.png)

2. Goto permission and  Untick Block all public access 
![screenshot](./public/blockPublicAccess.png)

3. Goto property and Enable Static website hosting
![screenshot](./public/enableStaticHosting.png)
 that's All you have to do  for AWS part

4.Now go to github repo setting->security->Secrets->Actions
![screenshot](./public/secretAction.png)
5. Create New repo secrets
   ![screenshot](./public/newRepoSecret.png)
6. Add your AWS credentials
   ![screenshot](./public/addSecrets.png)
7. Goto Actions tab
![screenshot](./public/gotoActionWorkflow.png)
8.Add your workflow accordingly and commit it.
![screenshot](./public/addWorkflowandCommit.png)
  That's it! Now whenever you push any code to master branch github will generate the build folder and upload it to S3 bucket.
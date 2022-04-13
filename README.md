# react-practical-9

##### Hosted react-practical-8 on AWS with CI/CD integration with github workflow
##### here is the link: 
http://react-practical9.s3-website-us-west-2.amazonaws.com/

### Step by step guide

1. First of all create s3 bucket by clicking orange button</br>
![screenshot](./public/createBucket.png)</br>

2. Goto permission and  Untick Block all public access </br>
![screenshot](./public/blockPublicAccess.png)</br>

3. Goto property and Enable Static website hosting</br>
![screenshot](./public/enableStaticHosting.png)</br>
 that's All you have to do  for AWS part</br>

4.Now go to github repo setting->security->Secrets->Actions</br>
![screenshot](./public/secretAction.png)</br>
5. Create New repo secrets</br>
   ![screenshot](./public/newRepoSecret.png)</br>
6. Add your AWS credentials</br>
   ![screenshot](./public/addSecrets.png)</br>
7. Goto Actions tab</br>
![screenshot](./public/gotoActionWorkflow.png)</br>
8.Add your workflow accordingly and commit it.</br>
![screenshot](./public/addWorkflowandCommit.png)</br>
  That's it! Now whenever you push any code to master branch github will generate the build folder and upload it to S3 bucket.
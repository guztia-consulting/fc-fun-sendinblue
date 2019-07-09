# Function Compute + Fun + SendinBlue

This example is been created to help you understand how to easily deal with emails when working on serverless
architectures on Alibaba Cloud Function Compute.

We make use of nodejs8 runtime and the official SendinBlue API wrapper `sendinblue-api`.

To orchestrate all, we leverage `fun`, an amazing tool made by Alibaba Cloud that helps you form serverless resources
by filling-out a `yml` config file.

## Requirements
- [nodejs](https://nodejs.org/en/)
- [aliyun fun](https://github.com/aliyun/fun)
- A [SendinBlue token](https://apidocs.sendinblue.com/account/)

## How to
1. Get your Alibaba Cloud credentials from the web console, you need your Account ID and a API/SECRET keypair.
1. Fill the `.env` file with said credentials.
1. Set your valid email address and SendinBlue token in the `template.yml` file under `EnvironmentVariables`.
1. Run `npm install` inside the `/code` folder.
1. Run `fun deploy` and wait for the script to finish.

### Testing code in Function Compute
Once everything is uploaded, go to your Alibaba Cloud console and navigate to the Function Compute Service you just
created, in this case `mailerfunctions` Service under Sydney Region, with the `mailer` function inside it.

Because we are testing the function, we will need to create an event with the following body:
```json
{
  "name": "John",
  "email": "test@example.org",
  "message": "Hello from Function Compute"
}
```

If everything went well, you should get a message in your email.

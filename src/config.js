// export default {
//     MAX_ATTACHMENT_SIZE: 5000000,
//     STRIPE_KEY: "pk_test_W677BZx5Uye0LeFn8XTeVwgL00uFK3N3y0",
//     s3: {
//       REGION: "us-east-2",
//       BUCKET: "jules-practise-bucket"
//     },
//     apiGateway: {
//       REGION: "us-east-2",
//       URL: "https://6q7ssfp9zd.execute-api.us-east-2.amazonaws.com/prod"
//     },
//     cognito: {
//       REGION: "us-east-2",
//       USER_POOL_ID: "us-east-2_S5Ar77Wh5",
//       APP_CLIENT_ID: "5r4baemmprg7fti3l3nmisdugo",
//       IDENTITY_POOL_ID: "us-east-2:3fcbff43-4b61-4995-b7f9-6a851d89c9db"
//     }
//   };

  const dev = {
    STRIPE_KEY: "pk_test_W677BZx5Uye0LeFn8XTeVwgL00uFK3N3y0",
    s3: {
      REGION: "us-east-2",
      BUCKET: "jules-practise-bucket"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://gg11gmqryg.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_E9IfyDkKI",
      APP_CLIENT_ID: "5m5jee1kcbiev4dlt5kt91ef4j",
      IDENTITY_POOL_ID: "YOUR_DEV_IDENTITY_POOL_ID"
    }
  };
  
  const prod = {
    STRIPE_KEY: "YOUR_STRIPE_PROD_PUBLIC_KEY",
    s3: {
      REGION: "YOUR_PROD_S3_UPLOADS_BUCKET_REGION",
      BUCKET: "YOUR_PROD_S3_UPLOADS_BUCKET_NAME"
    },
    apiGateway: {
      REGION: "YOUR_PROD_API_GATEWAY_REGION",
      URL: "YOUR_PROD_API_GATEWAY_URL"
    },
    cognito: {
      REGION: "YOUR_PROD_COGNITO_REGION",
      USER_POOL_ID: "YOUR_PROD_COGNITO_USER_POOL_ID",
      APP_CLIENT_ID: "YOUR_PROD_COGNITO_APP_CLIENT_ID",
      IDENTITY_POOL_ID: "YOUR_PROD_IDENTITY_POOL_ID"
    }
  };
  
  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;
  
  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };
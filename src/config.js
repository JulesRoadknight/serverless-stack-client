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
      IDENTITY_POOL_ID: "us-east-2:4ec9e707-4874-46d0-aa75-56b3f9aa6e55"
    }
  };
  
  const prod = {
    STRIPE_KEY: "pk_test_W677BZx5Uye0LeFn8XTeVwgL00uFK3N3y0",
    s3: {
      REGION: "us-east-2",
      BUCKET: "jules-practise-bucket"
    },
    apiGateway: {
      REGION: "us-east-2",
      // URL: "https://zv82kfjxp7.execute-api.us-east-2.amazonaws.com/prod"
      URL: "https://6q7ssfp9zd.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_hjbPVYhvv",
      APP_CLIENT_ID: "1uai97b4m2ee5mnq54rolptq56",
      IDENTITY_POOL_ID: "us-east-2:576b1aa2-afc5-4e2a-b453-11372783d818"
    }
    // cognito: {
    //   REGION: "us-east-2",
    //   USER_POOL_ID: "us-east-2_S5Ar77Wh5",
    //   APP_CLIENT_ID: "5r4baemmprg7fti3l3nmisdugo",
    //   IDENTITY_POOL_ID: "us-east-2:3fcbff43-4b61-4995-b7f9-6a851d89c9db"
    // }
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
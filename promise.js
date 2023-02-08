// function register() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Register end");
//       resolve();
//     }, 1000);
//   });
// }
function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Register end");
      resolve("success");
    }, 1000);
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject("error while sending email");
      console.log("Email end");
      resolve();
    }, 1000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login end");
      resolve();
    }, 1000);
  });
}

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Got user data");
      resolve();
    }, 1000);
  });
}

function displayUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User data display");
      resolve();
    }, 1000);
  });
}

// promise
// register().then(()=>{});
// register()
//   .then(sendEmail)
//   .then(login)
//   .then(getUserData)
//   .then(displayUserData)
//   .catch((err) => {
//     console.log("Error:", err);
//   });

// Async await
async function authenticate() {
  try {
    const message = await register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();
    console.log(message);
  } catch (err) {
    console.log(err);
    throw new Error();
  }
}

// async function authenticate() {
//   await register();
//   await sendEmail();
//   await login();
//   await getUserData();
//   await displayUserData();
// }

// //  error handling
authenticate()
  .then(() => {
    console.log("All set!");
  })
  .catch((err) => {
    console.log(err);
  });

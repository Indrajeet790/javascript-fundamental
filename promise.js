function register(callback) {
  setTimeout(() => {
    console.log("Register end");
    callback();
  }, 1000);
}
function sendEmail(callback) {
  setTimeout(() => {
    console.log("Email end");
    callback();
  }, 2000);
}

function login(callback) {
  setTimeout(() => {
    console.log("login end");
    callback();
  }, 3000);
}

function getUserData(callback) {
  setTimeout(() => {
    console.log("Got user data");
    callback();
  }, 1000);
}

function displayUserData() {
  setTimeout(() => {
    console.log("User data display");
  }, 1000);
}

importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyAM3NdadL7bRF2fDDTo1Afqg1RMZLfrFck",
  authDomain: "dev-meetups-54e45.firebaseapp.com",
  projectId: "dev-meetups-54e45",
  storageBucket: "dev-meetups-54e45.appspot.com",
  messagingSenderId: "446975227337",
  appId: "1:446975227337:web:13ea9b19cd795da88ca418",
  measurementId: "G-56GK3X0Q35"
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});
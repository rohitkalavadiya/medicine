// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
/* importScripts('/static/js/firebase-app.js');
importScripts('/static/js/firebase-messaging.js'); */
/* importScripts('/static/js/webPush.js'); */

/**
 * Here is is the code snippet to initialize Firebase Messaging in the Service
 * Worker when your app is not hosted on Firebase Hosting.

 // [START initialize_firebase_in_sw]
 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here, other Firebase libraries
 // are not available in the service worker.
 importScripts('https://www.gstatic.com/firebasejs/7.8.2/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/7.8.2/firebase-messaging.js');

 // Initialize the Firebase app in the service worker by passing in the
 // messagingSenderId.

 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.

 // [END initialize_firebase_in_sw]
 **/


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
/* var firebaseConfig = {
  apiKey: "AIzaSyBZ--mNtX8QA9sKzW4TQhHa8CFqGyHe5OE",
  authDomain: "medicine-ecommerce.firebaseapp.com",
  databaseURL: "https://medicine-ecommerce.firebaseio.com",
  projectId: "medicine-ecommerce",
  storageBucket: "medicine-ecommerce.appspot.com",
  messagingSenderId: "616483704026",
  appId: "1:616483704026:web:74b7f869f2bad9458129e3",
  measurementId: "G-KVH1MLDL5J"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(); */

/* messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'WebPush Title';
  const notificationOptions = {
    body: 'WebPush body.',
    icon: '/img/logo-symbol.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
}); */
// [END background_handler]
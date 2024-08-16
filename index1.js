// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";





// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAtyanlQ_aI05emt_iqJzb_s9ObGctWqQ8",
//     authDomain: "login-page-337d8.firebaseapp.com",
//     projectId: "login-page-337d8",
//     storageBucket: "login-page-337d8.appspot.com",
//      messagingSenderId: "795111048118",
//      appId: "1:795111048118:web:60fac57d72ed05f020b717",
//   };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const auth = getAuth();

// // Login event listener
// document.getElementById('login_btn').addEventListener('click', (e) => {
//     e.preventDefault();
//     const email = document.getElementById('login_email').value;
//     const password = document.getElementById('login_password').value;

//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             const dt = new Date();
//             update(ref(database, 'users/' + user.uid), {
//                 last_login: dt.toISOString()
//             });
//             alert('Logged in successfully');
//             window.location.href = 'home3.html'; // Redirect after successful login
//         })
//         .catch((error) => {
//             alert('Error: ' + error.message);
//         });
// });

// // Signup event listener
// document.getElementById('signup_btn').addEventListener('click', (e) => {
//     e.preventDefault();
//     const email = document.getElementById('signup_email').value;
//     const password = document.getElementById('signup_password').value;
//     const name = document.getElementById('signup_name').value;
//     const confirmPassword = document.getElementById('signup_confirm_password').value;

//     if (password !== confirmPassword) {
//         alert('Passwords do not match');
//         return;
//     }

//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             set(ref(database, 'users/' + user.uid), {
//                 name: name,
//                 email: email,
//                 password: password
//             });
//             alert('Signup successful');
//             // Optionally redirect after signup
//             // window.location.href = 'home3.html';
//         })
//         .catch((error) => {
//             alert('Error: ' + error.message);
//         });
// });

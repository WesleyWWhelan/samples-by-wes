const auth = firebase.auth();

const whenSignedOut = document.getElementById('whenSignedOut');
const whenSignedIn = document.getElementById('whenSignedIn');

const SignInBtn = document.getElementById('signInBtn');
const SignOutBtn = document.getElementById('signOutBtn');

const provider = new firebase.auth.GoogleAuthProvider();

SignInBtn.onClick = () => console.log('eh what')//auth.signInWithPopup(provider);

SignOutBtn.onClick = () => auth.signOut();
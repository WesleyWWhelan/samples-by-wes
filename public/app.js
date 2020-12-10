const auth = firebase.auth();

// const whenSignedOut = document.getElementById('whenSignedOut');
// const whenSignedIn = document.getElementById('whenSignedIn');

//const SignInBtn = document.getElementById('signInBtn');
//const SignOutBtn = document.getElementById('signOutBtn');

const provider = new firebase.auth.GoogleAuthProvider();


auth.onAuthStateChanged(user => {
    if (user){
        //signed in
        // whenSignedIn.hideElement = false;
        // whenSignedOut.hideElement = true;
    }else{
        //not signed in
        // whenSignedIn.hideElement = true;
        // whenSignedOut.hideElement = false;
    }
})




const db = firebase.firestore();

//SignInBtn.onClick = () => auth.signInWithPopup(provider);

//SignOutBtn.onClick = () => auth.signOut();

// const SignUpSubmitBtn = document.getElementById('signUpSubmitBtn');
// SignUpSubmitBtn.onClick = () => firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((user) => {
//     // Signed in 
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });

// const SignInEmailBtn = document.getElementById('signInEmailBtn');
// SignInEmail.onClickfirebase.auth().signInWithEmailAndPassword(email, password)
// .then((user) => {
// // Signed in 
// // ...
// })
// .catch((error) => {
// var errorCode = error.code;
// var errorMessage = error.message;
// });


class Sample{
    constructor( link, instrument, genre, produced = True, feelings = None, key=None, bpm=None) {
        this.link = link //link
        this.key = key //key
        this.instrument = instrument //instrument
        this.produced = produced //produced true or false
        this.feelings = feelings //list of how what kind of sound comes with the sample
        this.genre = genre //genre
        this.bpm = bpm //bpm

    }
}

let one = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Fingerpicking%20-%20Dry.wav?alt=media&token=e5d1a88b-ca2b-4010-883f-d381f87829bc',
                'Guitar','dance pop',False,['nostalgia','melancholy','sad'],'E Major','102')
let two = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Fingerpicking%20-%20Wet.wav?alt=media&token=7a53cfac-79dc-425c-a6d2-a02134e67327',
                'Guitar','dance pop',True,['nostalgia','melancholy','sad'],'E Major','102')
let three = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Strum%20(muted)%20-%20Dry.wav?alt=media&token=1128900a-8037-4815-a669-5b61da3ae230',
                'Guitar','dance pop',False,['nostalgia','melancholy','sad'],'E Major','102')
let four = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Strum%20(muted)%20-%20Wet.wav?alt=media&token=58154029-10d1-4bcc-a5ce-79c656d73b74',
                'Guitar','dance pop',True,['nostalgia','melancholy','sad'],'E Major','102')
let five = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Strum%20(unmute)%20-%20Dry.wav?alt=media&token=22cd5a30-ab5c-44df-a39f-fbbc572f0a95',
                'Guitar','dance pop',False,['nostalgia','melancholy','sad'],'E Major','102')
let six = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Strum%20(unmute)%20-%20Wet.wav?alt=media&token=923ca6b5-384d-452a-b487-571e775ac1f0',
                'Guitar','dance pop',True,['nostalgia','melancholy','sad'],'E Major','102')


let Demo_Samples = [
    one,
    two,
    three,
    four,
    five,
    six
]
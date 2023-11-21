
const displayLogin = (req, res) => {
    res.render('login.pug')
}

const login = async (req, res) => {
    const { email, password } = req.body;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    res.redirect('/dashboard');
}

const displaySingUp = (req, res) => {
    res.render('user_registro.pug')
}

const singUp = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error);
            });
        res.redirect('/');
    } catch (e) {
        res.redirect('register');
    }
}

const logout = (req, res) => {
    firebase.auth().signOut().then(() => {
        res.redirect('/login');
    }).catch((error) => {
        // An error happened.
    });
}

module.exports = {
    displayLogin,
    login,
    displaySingUp,
    singUp,
    logout
}
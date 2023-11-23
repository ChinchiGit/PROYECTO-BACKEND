

const displayLogin = (req, res) => {
    res.render('login.pug')
}

const login = async (req, res) => {   
    try {
        console.log('dentro try login');
        console.log(req.body);
        // When the user signs in with email and password.
        admin.auth().getUserByEmail()
        .then(user => {
            // Get the user's ID token as it is needed to exchange for a session cookie.
            console.log(user);
            // return user.getIdToken().then(idToken => {
            //   // Session login endpoint is queried and the session cookie is set.
            //   // CSRF protection should be taken into account.
            //   // ...
            //   const csrfToken = getCookie('csrfToken')
            //   return postIdTokenToSessionLogin('/sessionLogin', idToken, csrfToken);
            // });
        }).then(() => {
            // A page redirect would suffice as the persistence is set to NONE.
            //return firebase.auth().signOut();
        }).then(() => {
            //window.location.assign('/');
        });
        
    } catch (error) {
        console.log(error);
    }
}

const displaySignUp = (req, res) => {
    console.log('llega a display singUP');
    res.render('user_registro.pug')
}

const signUp = async (req, res) => {
    console.log('llega a display postSingup');
    try {
        console.log('try');
        console.log('email',req.body.email,'password',req.body.password);
        console.log('intento auth');
        admin.auth().createUser({
                email: req.body.email,
                password: req.body.password,
                emailVerified: false,
                disabled: false
            })
            .then((userRecord) => {
                // Signed in
                console.log("llega ?");
                //sacar id de aqui
                console.log(userRecord);
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(error);
            });
        console.log('redirecion a home');
        //crear user de sql
        //guardar el token de user y redirigir a dashboard
        res.redirect('/');
    } catch (e) {
        console.log(e);
        res.redirect('signup');
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
    displaySignUp,
    signUp,
    logout
}
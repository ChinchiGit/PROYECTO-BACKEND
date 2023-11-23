const adminAuth = require('../config/firebase')

  const signUp2 = async (email,pasword)=>{

    const userResponse = await adminAuth.auth().createUser({
        email: email,
        password: pasword,
        emailVerified: false,
        disabled: false
    });

    console.log(userResponse);

  }

  module.exports = {signUp2}
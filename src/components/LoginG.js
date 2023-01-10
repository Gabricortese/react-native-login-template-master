import React, { useEffect, useState } from 'react'
import { GoogleLogin } from 'react-google-login'

const clientID =
  '878268535004-5gqrhs9sgqna14ub3tr1qvooj468ge8a.apps.googleusercontent.com'

function Login() {
  const onFailure = (res) => {
    console.log('GOOGLE ERROR', res)
    alert('Errore in fase di login')
  }

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientID}
        buttonText="Login"
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        isSignedIn
      />
    </div>
  )
}

export default Login

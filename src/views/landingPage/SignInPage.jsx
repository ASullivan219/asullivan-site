import React from "react";
import { AmplifyAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react";

const SignInPage = () => {


    return (
        <AmplifyAuthenticator hideSignUp>
            <AmplifySignIn slot="sign-in" hideSignUp/>
        </AmplifyAuthenticator>
    )
}
export default SignInPage
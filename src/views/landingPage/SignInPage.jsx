import React from "react";
import { AmplifyAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react";

const SignInPage = () => {


    return (
        <AmplifyAuthenticator>
            <AmplifySignIn hideSignUp="true"/>
        </AmplifyAuthenticator>
    )
}
export default SignInPage
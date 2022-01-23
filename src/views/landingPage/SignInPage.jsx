import React from "react";
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Amplify, {Auth} from 'aws-amplify';
import awsconfig from '../../aws-exports';


import { ROUTE } from "../../utils/RouteUtils";
import { Link } from "react-router-dom";
Amplify.configure(awsconfig);


const SignInPage = () => {

    async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }


    return (
        <>
        <p>Hey youre signed int</p>
        <Link to="/">
        <button onClick={signOut}>Sign-out</button>
        </Link>
        </>
    )
}
export default withAuthenticator(SignInPage)
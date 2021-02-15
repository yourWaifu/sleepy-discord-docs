import React from "react";
import { Redirect } from 'react-router-dom';

function RedirectToDocs(): JSX.Element {
    return <Redirect to="docs/" />;
}

export default RedirectToDocs;
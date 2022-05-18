import './errorPage.scss'
import React from "react";
import { Link } from "react-router-dom";


export default function ErrorPage() {

    return (
        <>
            <div className="error-page">
                <div className='error-page-wrapper'>
                    <p>:(</p>
                    <h1>Error 404 - Page Not Found</h1>
                    <Link to='/'>Go to homepage</Link>
                </div>
            </div>
        </>
    )
}
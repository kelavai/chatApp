import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SignInForm } from "../components/SignInForm";
import { AppContext } from "../contexts/AppContext";
    
export function SignInPage() {
    const context = useContext(AppContext);
    const [data, setData] = useState(null)
    const [shouldFetch, setShouldFetch] = useState(true)
    
    function handleSubmit(formData) {
        context.setUsername(formData.username);
        context.setAvatarIndex(formData.avatarIndex)
    }

    function handleFetch() {
        setShouldFetch(true);
    }


    useEffect(() => {
    if (shouldFetch === true) { 
        fetch("/assets/data.json")
            .then(response => {
                return response.json();
            })
            .then(json => {
                setData(json);
                setShouldFetch(false);
            });
        }        
    }, [shouldFetch]);        
    

    console.log(data);

    if (context.isSignedIn) {
        return <Navigate to="/chat" replace />;
    }

    return (
        <div className="sign-in-page">
            <button type="button" onClick={handleFetch}>Fetch data</button>
            <div className="card">
                <SignInForm onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

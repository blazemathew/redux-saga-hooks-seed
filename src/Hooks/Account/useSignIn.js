import { useCallback, useRef, useState } from 'react';

export const useSignIn = () => {

    const [isSigningIn, setIsSigningIn] = useState(false);

    const formApiRef = useRef(null);
    const setFormApi = useCallback(api => (formApiRef.current = api), []);

    const handleSubmit = useCallback(
        async ({ email, password }) => {
            setIsSigningIn(true);
            try {

            } catch (error) {
                console.error(error);
                setIsSigningIn(false);
            }
        },
        [
            
        ]
    );



    return {
        // errors,
        handleSubmit,
        isBusy: isSigningIn,
        setFormApi
    };
};

import { useCallback, useRef, useState } from 'react';

export const useSignUp = () => {

    const [isSigningUp, setIsSigningUp] = useState(false);

    const formApiRef = useRef(null);
    const setFormApi = useCallback(api => (formApiRef.current = api), []);

    const handleSubmit = useCallback(
        async ({ email, password }) => {
            setIsSigningUp(true);
            try {

            } catch (error) {
                console.error(error);
                setIsSigningUp(false);
            }
        },
        [
            
        ]
    );



    return {
        // errors,
        handleSubmit,
        isBusy: isSigningUp,
        setFormApi
    };
};

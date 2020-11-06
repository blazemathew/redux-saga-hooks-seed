import { useCallback, useRef, useState } from 'react';

export const useForgotPassword = () => {

    const [isForgotPassword, setForgotPassword] = useState(false);

    const formApiRef = useRef(null);
    const setFormApi = useCallback(api => (formApiRef.current = api), []);

    const handleSubmit = useCallback(
        async ({ email, password }) => {
            setForgotPassword(true);
            try {

            } catch (error) {
                console.error(error);
                setForgotPassword(false);
            }
        },
        [
            
        ]
    );



    return {
        // errors,
        handleSubmit,
        isBusy: isForgotPassword,
        setFormApi
    };
};

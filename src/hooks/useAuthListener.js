import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth'; // Import the appropriate Firebase method

export const useAuthListener = (auth, handleCurrentUser) => {
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            if (user.metadata.creationTime === user.metadata.lastSignInTime) {
            console.log('User account was just created (registered).');
            } else {
            handleCurrentUser(user);
            console.log("a user has signed in", user);
            }
        } else {
            handleCurrentUser(null);
            console.log('User is logged out!');
        }
        });

    return () => unsubscribe();
  }, [auth, handleCurrentUser]); // Include all dependencies

  // You can return additional values or functions if needed
}


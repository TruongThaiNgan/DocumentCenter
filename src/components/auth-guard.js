import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const AuthGuard = (props) => {
  const { children } = props;
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.authReducer.user)
  const [checked, setChecked] = useState(false);

  useEffect(
    () => {
      if (!isAuthenticated) {
        console.log('Not authenticated, redirecting');
        router
          .replace({
            pathname: '/login',
            query: router.asPath !== '/' ? { continueUrl: router.asPath } : undefined
          })
          .catch(console.error);
      } else {
        setChecked(true);
      }
    },
    [isAuthenticated, router]
  );

  if (!checked) {
    return null;
  }

  // If got here, it means that the redirect did not occur, and that tells us that the user is
  // authenticated / authorized.

  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node
};

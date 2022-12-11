import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const LoginGuard = (props) => {
  const { children } = props;
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const isAuthenticated = useSelector((state) => state.authReducer.user)

  useEffect(
    () => {
      if (isAuthenticated) {
        router
          .replace({
            pathname: '/',
            query: router.asPath !== '/login' ? { continueUrl: router.asPath } : undefined
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

  return children;
};

LoginGuard.propTypes = {
  children: PropTypes.node
};

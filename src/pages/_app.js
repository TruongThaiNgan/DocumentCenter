import { Fragment, useEffect } from 'react';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AuthConsumer, AuthProvider } from '../contexts/auth-context';
import { createEmotionCache } from '../utils/create-emotion-cache';
import { registerChartJs } from '../utils/register-chart-js';
import { theme } from '../theme';
import { wrapper } from '../redux/index';
import { Provider, useDispatch } from 'react-redux';
import { sessionStorage } from '../redux/actions/authentications';

registerChartJs();

const clientSideEmotionCache = createEmotionCache();

const App = ({Component, ...rest}) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>
            DocCenter Pro
          </title>
          <meta
            name="viewport"
            content="initial-scale=1, width=device-width"
          />
        </Head>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
              <AuthSession>
                {getLayout(<Component {...pageProps} />)}
              </AuthSession>
          </ThemeProvider>
        </LocalizationProvider>
      </CacheProvider>
    </Provider>
  );
};

const AuthSession = props => {
  const dispatch = useDispatch();

  const initialize = async () => {
    var user = null;
    if (typeof window !== 'undefined') {
      user = JSON.parse(window.sessionStorage.getItem('user'));
    }

    dispatch(sessionStorage(user))

  };

  useEffect(() => {
    initialize();
  });

  return props.children;
};

export default App;

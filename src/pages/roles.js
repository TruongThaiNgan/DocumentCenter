import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/roles/roles-list-results';
import { CustomerListToolbar } from '../components/roles/roles-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRoles } from '../redux/actions/roles';

const Page = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const roles = useSelector((state) => state.rolesReducer.roles);

  useEffect(() => {
    if (user != null) {
      dispatch(getRoles(user.companyId))
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          Roles | DocCenter
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar />
          <Box sx={{ mt: 3 }}>
            <CustomerListResults roles={roles} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;

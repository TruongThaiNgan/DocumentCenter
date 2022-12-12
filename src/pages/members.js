import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMembersInCompany } from '../redux/actions/members';

const Page = () => {

  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReducer.user)

  const members = useSelector((state) => state.membersReducer.members)

  useEffect(() => {
    if (user) {
      dispatch(getMembersInCompany(user.companyId))
    }
  }, [])

  return (
    <>
      <Head>
        <title>
          Members | DocCenter
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
            <CustomerListResults members={members} />
          </Box>
        </Container>
      </Box>
    </>
  )
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;

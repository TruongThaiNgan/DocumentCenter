import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { products } from '../__mocks__/products';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
import { ProductCard } from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilesByUserId } from '../redux/actions/file';

const Page = () => {

  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReducer.user)

  const files = useSelector((state) => state.fileReducer.files)

  useEffect(() => {
    // if (user) {
      dispatch(getFilesByUserId(user.id))
    // }
  }, [dispatch, user])

  return (
    <>
      <Head>
        <title>
          Products | DocCenter
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
          <ProductListToolbar />
          <Box sx={{ pt: 3 }}>
            <Grid
              container
              spacing={3}
            >
              {files.map((file) => (
                <Grid
                  item
                  key={file.id}
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <ProductCard product={file} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 3
            }}
          >
            <Pagination
              color="primary"
              count={3}
              size="small"
            />
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

import Head from 'next/head';
import NextLink from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, TextField, Typography, Select, Chip, MenuItem, OutlinedInput, InputLabel, FormControl } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { login } from "../redux/actions/authentications";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import { getRoles } from '../redux/actions/roles';


const CreateDoc = () => {
  const theme = useTheme();

  const [files, setFiles] = useState([]);

  const dispatch = useDispatch();
  
  const user = useSelector((state) => state.authReducer.user);
  const roles = useSelector((state) => state.rolesReducer.roles);
  const [rolesSelected, setRolesSelected] =  useState([]);
  
  useEffect(() => {
    if (user != null) {
      dispatch(getRoles(user.companyId))
    }
  }, [dispatch, user]);


  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      name: Yup
        .string()
        .max(255)
        .required('Email is required'),
    }),
    onSubmit: async (values) => {
      dispatch(login(values.email, values.password));
    }
  });

  return (
    <>
      <Head>
        <title>Create document | DocCenter</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <NextLink
            href="/"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Dashboard
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Create role
              </Typography>
            </Box>
            
            <TextField
              error={Boolean(formik.touched.name && formik.errors.name)}
              fullWidth
              label="Name"
              margin="normal"
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.name}
              variant="outlined"
            />
          <FormControl fullWidth>
            <InputLabel id="roles-label">Roles</InputLabel>
            <Select
              labelId="roles-label"
              value = {rolesSelected}
              input={<OutlinedInput id="select-multiple-chip" label="Roles" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((e, i) => (
                    <Chip 
                      key={i}
                      label={e?.name ?? ''}
                    />
                  ))}
                </Box>
              )}
              onChange = {(event) => {
                var rolesSelectedCp = [...rolesSelected];
              if (rolesSelectedCp.map(e => e.id).includes(event.target.value)) {
                rolesSelectedCp = rolesSelectedCp.filter(e => e.id != event.target.value)
              } else {
                var role = roles.filter(e => e.id == event.target.value)
                if (role) {
                  rolesSelectedCp.push(roles[0])
                }
              }
              setRolesSelected(rolesSelectedCp)
              }}
              >
                {roles.map((e, index) => (
                  <MenuItem
                    key={index}
                    name={index}
                    value={e.id}
                    style={{fontWeight: !rolesSelected.map(el => el.id).includes(e.id) ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium}}
                  >
                    {e?.name ?? ''}
                  </MenuItem>
                ))}

              </Select>
            </FormControl>
              <Grid container
                alignItems={'center'}
              >
                <Grid
                  item
                  xs={8}
                >

                  <Select
                  fullWidth
                  value = {files}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((e, i) => (
                        <Chip 
                          key={i}
                          label={e?.data.name ?? ''}
                        />
                      ))}
                    </Box>
                  )}
                  multiple
                  >
                    {files.map((e, index) => (
                      <MenuItem
                        key={index}
                        name={index}
                        value={index}
                        style={{fontWeight: !e.value ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium}}
                      >
                        {e.data.name}
                      </MenuItem>
                    ))}

                  </Select>
                </Grid>
                <Grid
                  item
                  xs={4}
                >
                  <Button
                      fullWidth
                      variant="contained"
                      component="label"
                    >
                      Upload File
                      <input
                        type="file"
                        // accept="image/*"
                        hidden
                        onChange={
                          ({target}) => {
                            var filesCp = [...files];
                            for (let index = 0; index < target.files.length ; index++) {

                              const element = target.files[index];
                              filesCp.push({
                                data: element,
                                value: true
                              });
                            }

                            setFiles(filesCp)
                        }}
                      />
                    </Button>
                </Grid>
              </Grid>

            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Create
              </Button>
            </Box>

          </form>
        </Container>
      </Box>
    </>
  );
};

export default CreateDoc;

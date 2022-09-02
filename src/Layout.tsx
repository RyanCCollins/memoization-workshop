import React from 'react';
import { Container, AppBar, Typography, Box, FormGroup, FormControlLabel, Switch } from "@mui/material";
import { Outlet } from 'react-router-dom';

export function Layout(): JSX.Element {
  return (
      <>
      <AppBar
        sx={{ p: 3, backgroundColor: 'primary.light', display: 'flex', alignItems: 'space-between' }}
        position="fixed"
        color="default"
      >
        <Typography variant="h5">
          DoMemoize
        </Typography>
      </AppBar>
      <Container sx={{ py: 4, mt: 10 }} maxWidth='xl'>
        <Outlet />
      </Container>
    </>
  );
}

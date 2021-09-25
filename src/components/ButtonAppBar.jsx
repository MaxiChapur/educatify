import * as React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import './ButtonAppBar.css'

export default function ButtonAppBar({ name }) {
  return (
    <AppBar>
      <Toolbar className="appbar">
        <Button color="inherit" aria-label="menu">
          A
        </Button>
        <Typography align="justify">{name}</Typography>
      </Toolbar>
    </AppBar>
  )
}

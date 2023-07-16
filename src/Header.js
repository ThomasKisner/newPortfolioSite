import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import ToggleColorMode from "./ThemeModeToggle";
import ComputerIcon from "@mui/icons-material/Computer";
import CodeIcon from "@mui/icons-material/Code";
import { useTheme } from "@mui/material/styles";

import { Link } from "react-router-dom";
const pages = [
  { title: "Home", path: "/", ariaLabel: "Home navigation button" },
  { title: "About", path: "about", ariaLabel: "About navigation button" },
  {
    title: "Projects",
    path: "projects",
    ariaLabel: "Projects navigation button",
  },
  { title: "Contact", path: "contact", ariaLabel: "Contact navigation button" },
];

function getActiveTab() {
  return window.location.pathname.length > 1
    ? window.location.pathname.slice(1)
    : "/";
}

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState(getActiveTab());
  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ComputerIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Tom Kisner
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              role="menu"
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.path}
                  selected={activeTab === page.path}
                  sx={{
                    color: theme.palette.text.primary,
                  }}
                  component={Link}
                  href={page.path}
                  onClick={() => {
                    handleCloseNavMenu();
                    setActiveTab(page.path);
                  }}
                  aria-label={page.ariaLabel}
                  role="menuitem"
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CodeIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: { xs: ".9rem" },
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Tom Kisner
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              backgroundColor: theme.palette.primary,
            }}
          >
            {pages.map((page) => (
              <MenuItem
                href={page.path}
                key={page.path}
                onClick={() => {
                  handleCloseNavMenu();
                  setActiveTab(page.path);
                }}
                selected={activeTab === page.path}
                sx={{
                  color: theme.palette.common.white,
                }}
              >
                <Typography textAlign="center">{page.title}</Typography>
              </MenuItem>
            ))}
          </Box>
          <ToggleColorMode />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

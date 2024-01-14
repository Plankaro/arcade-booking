"use client";
import React, { useMemo } from "react";
import {
  Box,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
  Divider,
} from "@mui/material";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { TbCircleChevronLeft } from "react-icons/tb";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSignOutMutation } from "@/store/api/auth";
import ArticleIcon from '@mui/icons-material/Article';
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

interface Links {
  title: string;
  icon: React.ReactNode;
  url: string;
}

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [signOut, { isLoading }] = useSignOutMutation();

  const links: Links[] = useMemo(
    () => [
      {
        title: "Dashboard",
        icon: <DataSaverOffIcon />,
        url: "/admin",
      },
      {
        title: 'Property',
        icon: <ArticleIcon />,
        url: '/property',
      },
      {
        title: "Hostory",
        icon: <HistoryIcon />,
        url: "/history",
      },
      {
        title: 'My Profile',
        icon: <AccountCircleOutlinedIcon />,
        url: '/profile',
      },

      // {
      //   title: 'Interview',
      //   icon: <ContactsOutlinedIcon />,
      //   url: '/interview',
      // },
    ],
    []
  );

  const router = useRouter();
  // const [Logout, { isLoading, isError }] = useSignOutMutation();
  // const { data, isLoading: isSessionLoading, isError: isSessionError } = useGetSessionQuery();

  const handleLogout = async () => {
    await signOut()
      .unwrap()
      .then(() => {
        router.push("/auth/login");
      });
  };
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(isMediumScreen);
  const [showText, setShowText] = React.useState<boolean>(!isMediumScreen);
  const isMobile = useMediaQuery("(max-width:600px)");

  const closeSidebar = () => {
    setIsCollapsed(true);
  };
  const openSidebar = () => {
    setIsCollapsed(false);
  };

  React.useEffect(() => {
    if (isCollapsed) {
      setShowText(false);
    } else {
      setTimeout(() => {
        setShowText(true);
      }, 100);
    }
  }, [isCollapsed]);

  const route = usePathname();
  const isActive: (href: string) => boolean = (href) => {
    if (href === "/") {
      return route === href;
    } else {
      return route.includes(href);
    }
  };

  return (
    <>
      <Stack
        sx={{
          position: "fixed",
          // position: 'relative',
          top: 0,
          left: 0,
          height: "100vh",
          minWidth: isCollapsed ? "60px" : isMobile ? "100%" : "250px",
          maxWidth: isCollapsed ? "60px" : isMobile ? "100%" : "250px",
          backgroundColor: "primary.light",
          color: "primary.contrastText",
          transition: "all 200ms ease-out",
          zIndex: 10,
        }}
      >
        {
          isLoading && <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        }
        <List>
          <ListItem
            sx={{
              marginBottom: "1.5rem",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            disablePadding
          >
            {isCollapsed ? (
              <ListItemButton onClick={openSidebar}>
                <ListItemIcon
                  sx={{
                    color: "primary.contrastText",
                  }}
                >
                  <MenuIcon />
                </ListItemIcon>
              </ListItemButton>
            ) : (
              <ListItemButton
                sx={{
                  backgroundColor: "secondary.main",
                  color: "primary.contrastText",
                }}
              >
                {/* <ListItem sx={{}}>
                  <Image src="logo-dark.c911edde.svg" alt="logo" width={100} height={40} />
                </ListItem> */}
                <ListItemText primary={"Dashboard"} />
                <IconButton
                  sx={{
                    color: "primary.contrastText",
                    fontSize: ".8rem",
                  }}
                  onClick={closeSidebar}
                >
                  <TbCircleChevronLeft
                    style={{
                      fontSize: "1.5rem",
                    }}
                  />
                </IconButton>
              </ListItemButton>
            )}
          </ListItem>

          {links.map((item, index) => (
            <ListItem
              aria-selected={isActive(item.url)}
              data-selected={isActive(item.url)}
              key={index}
              disablePadding
            >
              <Link
                href={item.url}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                }}
              >
                <ListItemButton onClick={() => { }}>
                  {/* <ListItemButton onClick={closeSidebar} > */}
                  <ListItemIcon
                    sx={{
                      color: "primary.contrastText",
                    }}
                  >
                    <Tooltip title={item.title} placement="right-end">
                      <div>{item.icon}</div>
                    </Tooltip>
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{
                      opacity: showText ? "100" : "0",
                      transition: "opacity 100ms ease-out",
                      display: isCollapsed ? "none" : "inline",
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Box mt="auto" mb="1rem">
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleLogout()}>
                <ListItemIcon
                  sx={{
                    color: "primary.contrastText",
                  }}
                >
                  <Tooltip title="Logout" placement="right-end">
                    <div>
                      <LogoutIcon />
                    </div>
                  </Tooltip>
                </ListItemIcon>
                <ListItemText
                  primary="Logout"
                  sx={{
                    opacity: showText ? "100" : "0",
                    transition: "opacity 100ms ease-out",
                    display: isCollapsed ? "none" : "inline",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding></ListItem>
          </List>
        </Box>
      </Stack>
      <Box
        sx={{
          ml: !isCollapsed ? 68 : 20,
          mt: 5,
          mr: 5,
          mb: 5,
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Sidebar;

import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Box from "@mui/material/Box";
import { tokens } from "../../theme";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { removeTokenTimestamp } from "../../utils/utils";
import axios from "axios";
import { useSetCurrentUser } from "../../context/UserContext";
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};
const SideBar = () => {
  const setCurrentUser = useSetCurrentUser();
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const handleSignOut = async () => {
    try {
      await axios.post("/dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
      navigate("/signin");
    } catch (err) {
      // console.log(err);
    }
  };
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868ddfb !important",
        },
        "& .pro-menu-item.active": {
          padding: "#687ofa !important",
        },
      }}
    >
      <ProSidebar onToggle="true" collapsed={isCollapsed}>
        <Menu iconShape="round">
          <SidebarHeader>
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={
                isCollapsed ? (
                  <ArrowForwardIosOutlinedIcon />
                ) : (
                  <ArrowBackIosNewOutlinedIcon />
                )
              }
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            ></MenuItem>
          </SidebarHeader>
          <SidebarContent>
            <Item
              title="Home"
              to={"/"}
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Home"
              to={"/profile/:id"}
              icon={<PersonOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </SidebarContent>
          <SidebarFooter>
            <Item
              title="Sign in"
              to={"/signin"}
              icon={<LoginOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <MenuItem onClick={handleSignOut} icon={<LogoutOutlinedIcon />}>
              Sign out
            </MenuItem>
          </SidebarFooter>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SideBar;

import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import models from "../../modelData/models";   // 👈 để lấy thông tin user
import "./styles.css";

function TopBar() {
  const location = useLocation();
  const { userId } = useParams();

  let rightText = "";

  if (location.pathname === "/users") {
    rightText = "User List";
  } else if (location.pathname.startsWith("/users/") && !location.pathname.startsWith("/photos/")) {
    const user = models.userModel(userId);
    rightText = user ? `${user.first_name} ${user.last_name}` : "User Detail";
  } else if (location.pathname.startsWith("/photos/")) {
    const user = models.userModel(userId);
    rightText = user ? `Photos of ${user.first_name} ${user.last_name}` : "User Photos";
  } else {
    rightText = "Photo Sharing App";
  }

  return (
    <AppBar position="static" className="topbar-appBar">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Bên trái: tên bạn */}
        <Typography variant="h6" color="inherit">
          Trần Mạnh Dương
        </Typography>

        {/* Bên phải: tiêu đề động */}
        <Typography variant="h6" color="inherit">
          {rightText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;

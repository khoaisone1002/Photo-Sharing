import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";   
import "./styles.css";
import models from "../../modelData/models";

function UserList() {
  const users = models.userListModel();

  return (
    <div>
      <Typography variant="body1" gutterBottom>
        Danh sách người dùng:
      </Typography>

      <List component="nav">
        {users.map((user) => (
          <React.Fragment key={user._id}>
            <ListItem>
              <Link
                to={`/users/${user._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemText
                  primary={`${user.first_name} ${user.last_name}`}
                />
              </Link>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>

      <Typography variant="caption">
        (Dữ liệu lấy từ models.userListModel())
      </Typography>
    </div>
  );
}

export default UserList;

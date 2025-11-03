import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models"; // 👈 import model dữ liệu

function UserDetail() {
  // Lấy userId từ URL (vd: /users/57231f1a30e4351f4e9f4bd7)
  const { userId } = useParams();

  // Lấy dữ liệu người dùng từ model
  const user = models.userModel(userId);

  // Nếu không tìm thấy user (phòng lỗi)
  if (!user) {
    return <Typography>Không tìm thấy người dùng.</Typography>;
  }

  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom>
        {user.first_name} {user.last_name}
      </Typography>
      <Typography variant="body1">Nghề nghiệp: {user.occupation}</Typography>
      <Typography variant="body1">Địa điểm: {user.location}</Typography>
      <Typography variant="body1">Mô tả: {user.description}</Typography>

      <Box mt={2}>
        <Link to={`/photos/${user._id}`} style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Xem ảnh của người dùng này
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default UserDetail;

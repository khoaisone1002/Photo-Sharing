import React from "react";
import { Typography, Box } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models"; // Dữ liệu model

function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId); // Lấy danh sách ảnh

  // Nếu không có ảnh
  if (!photos || photos.length === 0) {
    return (
      <Typography variant="body1" sx={{ p: 2 }}>
        Người dùng này chưa có ảnh nào.
      </Typography>
    );
  }

  return (
    <Box p={2} className="user-photo-container">
      {photos.map((photo) => (
        <Box key={photo._id} mb={4}>
          {/* Ảnh */}
          <img
            src={`/images/${photo.file_name}`}
            alt={photo.file_name}
            className="user-photo"
          />

          {/* Thời gian tải lên */}
          <Typography variant="caption" display="block" gutterBottom>
            Tải lên lúc: {new Date(photo.date_time).toLocaleString()}
          </Typography>

          {/* Các bình luận */}
          {photo.comments && photo.comments.length > 0 ? (
            <Box ml={2}>
              {photo.comments.map((c) => (
                <Box key={c._id} className="comment-box">
                  <Typography variant="body2">
                    <Link
                      to={`/users/${c.user._id}`}
                      className="comment-user-link"
                    >
                      {c.user.first_name} {c.user.last_name}
                    </Link>
                    : {c.comment}
                  </Typography>
                  <Typography variant="caption" className="comment-date">
                    {new Date(c.date_time).toLocaleString()}
                  </Typography>
                </Box>
              ))}
            </Box>
          ) : (
            <Typography variant="body2" className="no-comment">
              (Chưa có bình luận)
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}

export default UserPhotos;

import React from "react";

const VideoComment = ({ comment }) => {
  return (
    <div>
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
    </div>
  );
};

export default VideoComment;

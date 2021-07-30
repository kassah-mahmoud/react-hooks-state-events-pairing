import React, { useState } from "react";
import VideoComment from "./VideoComment";

const VideoCommentList = ({ comments = [] }) => {
  const [showComments, setShowComments] = useState(false);
  function toggleCommentsDisplay() {
    setShowComments(!showComments);
  }

  return (
    <div className="comment-list">
      <button onClick={toggleCommentsDisplay}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      <hr style={{ width: "70%" }} />
      {showComments &&
        (comments.length <= 0 ? (
          <div> There are no comments yet </div>
        ) : (
          <div>
            {comments.map((comment) => (
              <VideoComment key={comment.id} comment={comment} />
            ))}
          </div>
        ))}
    </div>
  );
};

export default VideoCommentList;

import React from "react";
import VideoCommentList from "./VideoCommentList";
import VideoInfo from "./VideoInfo";

const Video = ({ video }) => {
  return (
    <div className="video">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />

      <VideoInfo
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
        votes={{ up: video.upvotes, down: video.downvotes }}
      />

      <VideoCommentList comments={video.comments} />
    </div>
  );
};

export default Video;

import React from "react";
import VideoVotes from "./VideoVotes";

const VideoInfo = ({ title, views, createdAt, votes }) => {
  return (
    <>
      <h1>{title}</h1>
      <div>
        <span>{`${views} Views`}</span> | <span>{`Uploaded ${createdAt}`}</span>
      </div>

      <VideoVotes votes={votes} />
    </>
  );
};

export default VideoInfo;

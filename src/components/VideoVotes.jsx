import React, { useState } from "react";
import DownvoteIcon from "./icons/DownvoteIcon";

import UpvoteIcon from "./icons/UpvoteIcon";

const VoteButton = ({ votes, onClick, children }) => (
  <button className="vote-btn" onClick={onClick}>
    <span>{votes}</span>
    <span>{children}</span>
  </button>
);

const VideoVotes = ({ votes }) => {
  const [votesState, setVotesState] = useState(votes);

  const handleUpvote = () => setVotesState({ ...votes, up: votes.up + 1 });

  const handleDownvote = () =>
    setVotesState({ ...votes, down: votes.down + 1 });

  return (
    <div className="votes-container">
      <VoteButton votes={votesState.up} onClick={handleUpvote}>
        <UpvoteIcon />
      </VoteButton>

      <VoteButton votes={votesState.down} onClick={handleDownvote}>
        <DownvoteIcon />
      </VoteButton>
    </div>
  );
};

export default VideoVotes;

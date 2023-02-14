import React from "react";

const CommentsList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;
    switch (comment.status) {
      case "approved":
        content = comment.content;
        break;
      case "rejected":
        content = "This comment has been rejected";
        break;
      case "pending":
        content = "This comment is awaiting moderation";
        break;
      default:
        content = "";
    }
    return <li key={comment.id}>{content}</li>;
  });
  return <ul>{renderedComments}</ul>;
};

export default CommentsList;

import { FC, useState } from "react";
import styles from "./Comments.module.scss";
import UserAvatar from "@/shared/ui/user-avatar/UserAvatar";
import { useProfile } from "@/hooks/useProfile";

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
}

const Comments: FC = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Tom",
      content: "Great article! Thanks for sharing.",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      author: "Alice",
      content: "Very insightful! I learned a lot.",
      timestamp: "1 hour ago",
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const { profile } = useProfile();
  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const newCommentData: Comment = {
      id: comments.length + 1,
      author: "Current User", // заменить на имя текущего пользователя
      content: newComment,
      timestamp: "Just now",
    };
    setComments([newCommentData, ...comments]);
    setNewComment("");
  };

  return (
    <div className={styles.comments} id="comments">
      <h2>Comments ({comments.length})</h2>
      <div className={styles.commentForm}>
        {!profile && (
          <div className={styles.noAuth}>
            Please <a href="sign in">sign in</a> to leave a comment
          </div>
        )}
        <UserAvatar alt="Current User" size="medium" />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          disabled={!profile}
        />
        <button
          className={styles.button}
          disabled={!profile}
          onClick={handleAddComment}
        >
          Post
        </button>
      </div>
      <ul className={styles.commentList}>
        {comments.map((comment) => (
          <li key={comment.id} className={styles.comment}>
            <UserAvatar alt={comment.author} size="medium" />
            <div className={styles.commentContent}>
              <div className={styles.commentHeader}>
                <span className={styles.author}>{comment.author}</span>
                <span className={styles.timestamp}>{comment.timestamp}</span>
              </div>
              <p>{comment.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;

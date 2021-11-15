import { useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();
  console.log(params);
  return "Post...";
};

export default Post;

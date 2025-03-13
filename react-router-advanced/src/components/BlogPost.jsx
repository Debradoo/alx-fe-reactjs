import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  return <h1>Viewing Blog Post {id}</h1>;
}

export default BlogPost;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function PostsComponent() {
  // Fetch posts using React Query
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return response.data;
    },
    staleTime: 5000, // Data remains fresh for 5 seconds
    cacheTime: 300000, // Cache persists for 5 minutes
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;

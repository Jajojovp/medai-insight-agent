
import { useParams } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  
  return <BlogPost id={id || ""} />;
};

export default BlogPostPage;

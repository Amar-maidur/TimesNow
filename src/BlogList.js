import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      <div className="heading">
        <h3>Latest Stories</h3>
      </div>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

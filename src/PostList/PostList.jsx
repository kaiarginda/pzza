// import React, { useEffect, useState } from "react";
// import "./PostList.css";
// import IndividualPost from "../IndividualPost/IndividualPost";
// const PostList = () => {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     const getPosts = async () => {
//       const response = await fetch("http://localhost:5000/v1/all-posts");
//       const data = await response.json();

//       setPosts(data);
//     };
//     getPosts();
//   }, []);
//   if (posts.length > 0) {
//     return (
//       <div className="flex justify-center items-center p-5">
//         <div className="grid grid-cols-3 gap-5">
//           {posts.map((post) => {
//             console.log(post, "posts");
//             return (
//               <IndividualPost
//                 name={post.name}
//                 description={post.description}
//                 image={post.image}
//                 id={post._id}
//               />
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// };

// export default PostList;

import React, { useEffect, useState } from "react";
import "./PostList.css";
import IndividualPost from "../IndividualPost/IndividualPost";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("http://localhost:5000/v1/all-posts");
      const data = await response.json();
      setPosts(data);
    };

    getPosts();
  }, []);

  if (posts.length > 0) {
    return (
      <div className="container mx-auto p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {posts.map((post) => (
            <IndividualPost
              key={post._id}
              name={post.name}
              description={post.description}
              image={post.image}
              id={post._id}
            />
          ))}
        </div>
      </div>
    );
  }

  return null; // You may want to handle the case when there are no posts.
};

export default PostList;

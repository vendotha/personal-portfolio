import { useState } from "react";

interface Post {
  id: number;
  content: string;
  image?: string;
  date: string;
}

export default function Posts() {
  const [posts] = useState<Post[]>([
    {
      id: 1,
      content: "🚀 Just launched my new portfolio website! Excited to share my work and projects.",
      image: "/images/portfolio.png",
      date: "2025-08-20",
    },
    {
      id: 2,
      content: "💻 Working on a full-stack food delivery app using Django + React. Stay tuned!",
      image: "/images/mealzo.png",
      date: "2025-08-15",
    },
    {
      id: 3,
      content: "📚 Currently exploring Spring Boot for backend development. Loving the learning curve!",
      date: "2025-08-10",
    },
  ]);

  return (
    <section className="p-6 bg-gray-900 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}
            className="mb-6 p-4 border border-gray-700 rounded-lg bg-gray-800"
          >
            <p className="text-gray-200 mb-2">{post.content}</p>
            {post.image && (
              <img
                src={post.image}
                alt="Post"
                className="rounded-lg mb-2"
              />
            )}
            <p className="text-xs text-gray-400">{post.date}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No posts available.</p>
      )}
    </section>
  );
}

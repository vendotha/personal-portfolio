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
    id: 4,
    content:
      "📱 One day, my grandfather bought a smartphone… but he didn’t know how to use Google Maps, WhatsApp, or make online payments. That inspired me to build Digital Literacy Companion – a Django-based platform designed for senior citizens to navigate the digital world confidently. 🌟 Features: ✅ Tutorials ✅ Multi-language ✅ Voice commands ✅ AI chatbot. ❤️ Tech for inclusion!",
    image: "/images/dlc.png",
    date: "2025-06-20",
  },
  {
    id: 5,
    content:
      "🎉 Excited to share my experience participating in CODE-CRACK 2025 🚀 An offline coding competition with Aptitude + DSA rounds, organized by IEEE MVSR CS. Super grateful for the learning, teamwork, and the Certificate of Participation! 🏆",
    image: "/images/codecrack.png",
    date: "2025-06-14",
  },
  {
    id: 6,
    content:
      "⚠️ Job Scam Alert! I got an email from 'Rhine IT Networks' asking me to pay $9 for a fake screening test. 🚫 Remember: No real company asks for money to get a job. Stay safe, job seekers. hashtag#JobScamAlert",
    image: "/images/scamalert.png",
    date: "2025-06-05",
  },
  {
    id: 7,
    content:
      "🚀 My Journey at Tech Savishkaar 3.0! Participated in a national hackathon tackling Agritech, HealthTech, and more. Cleared the Coding Round ✅ — though I didn’t make it further, the experience was invaluable. 💡 hashtag#HackathonExperience",
    image: "/images/techsavishkaar.png",
    date: "2025-02-18",
  },
  {
    id: 8,
    content:
      "🌟 Exciting News! Selected for Dyne Research ideaLab 🎉 Thrilled to be part of this elite cohort to solve real-world problems over the next 12 weeks. 🚀 hashtag#DyneIdeaLab",
    image: "/images/dyne.png",
    date: "2025-01-30",
  },
  {
    id: 9,
    content:
      "🤖 Project Update: Built an NLP Chatbot with Sentiment Analysis! 🎉 Features: Advanced NLP + TensorFlow sentiment analysis + real-time interaction. Excited about the possibilities! hashtag#AI hashtag#Chatbot",
    image: "/images/sentimentbot.png",
    date: "2024-11-15",
  },
  {
    id: 10,
    content:
      "🧑‍💻 Facial Recognition Profile Builder 🚀 Seamless profile creation using OpenCV + Django. Features: auto profile generation, JWT authentication, and enhanced security. Check it out: https://lnkd.in/gbeNw-My",
    image: "/images/facialrecog.png",
    date: "2024-10-05",
  },
  {
    id: 11,
    content:
      "🎓 Fusion Fest @ MVSR — had a wonderful mock interview experience that sharpened my communication and technical skills. Every step counts toward growth! hashtag#CareerDevelopment",
    image: "/images/fusionfest.png",
    date: "2024-09-10",
  },
  {
    id: 12,
    content:
      "🎉 Thrilled to complete my Cisco Python Certification 🐍 🚀 Excited to apply networking + Python knowledge to real projects and keep learning. hashtag#CiscoPythonCertification",
    image: "/images/cisco.png",
    date: "2024-08-25",
  },
  {
    id: 13,
    content:
      "🖐️ Gesture Mouse Controller (Gestura) 🖱️ A hands-free mouse using webcam gesture recognition and ML. Check it out: https://lnkd.in/eqtf9DnG",
    image: "/images/gestura.png",
    date: "2024-05-12",
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

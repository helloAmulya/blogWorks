import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import blogImg from "../assets/blogImg.jpg";

function Home() {
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.auth.userData);
  const [loading, setLoading] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    appwriteService.allPost().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
      setLoading(false);
    });
  }, [user]);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center text-gray-500 text-lg">
        Loading...
      </div>
    );

  return (
    <div className="w-full min-h-screen bg-transparent text-white py-12">
      <Container>
        {!user && (
          // <div className="bg-transparent p-8 rounded-lg shadow-xl mb-10 text-center max-w-3xl mx-auto">
          //   <div className="">
          //     <img
          //       src={blogImg}
          //       alt="Tech Blog Preview"
          //       className="w-full mx-auto rounded-lg shadow-lg border border-gray-500 mb-4"
          //     />
          //     <p className="text-gray-300 text-sm mb-2">
          //       A modern platform built with cutting-edge technologies. Click
          //       below to learn more.
          //     </p>
          //     <button
          //       onClick={() => setShowFullDescription(!showFullDescription)}
          //       className="bg-gray-800 text-white px-4 py-2 rounded-md"
          //     >
          //       {showFullDescription ? "Show Less" : "Read More"}
          //     </button>
          //   </div>

          //   {(showFullDescription || window.innerWidth >= 768) && (
          //     <div className="text-left text-gray-300 mt-4">
          //       <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
          //         🚀 Welcome to My Blog - A Tech-Powered Journey
          //       </h1>
          //       <p className="mb-6 leading-relaxed">
          //         This platform is built using modern technologies to deliver a
          //         seamless experience. From authentication to dynamic content
          //         management, everything is designed with performance and
          //         scalability in mind. Whether you're browsing posts, engaging
          //         with content, or exploring new ideas, this space is optimized
          //         to provide an intuitive and user-friendly experience.
          //       </p>

          //       {/* Tech Stack Section */}
          //       <h2 className="text-2xl font-bold text-green-400 mb-2">
          //         🔧 Tech Stack
          //       </h2>
          //       <p className="mb-4">
          //         The foundation of this platform is built on powerful, scalable
          //         technologies ensuring seamless performance across devices.
          //       </p>
          //       <ul className="list-disc list-inside text-gray-300 mb-6">
          //         <li>
          //           <strong className="text-blue-400">Frontend:</strong>{" "}
          //           React.js, Redux, TailwindCSS, ShadCN
          //         </li>
          //         <li>
          //           <strong className="text-blue-400">Backend:</strong> Node.js,
          //           Express.js, Appwrite
          //         </li>
          //         <li>
          //           <strong className="text-blue-400">
          //             Database & Storage:
          //           </strong>{" "}
          //           MongoDB, Appwrite Storage
          //         </li>
          //         <li>
          //           <strong className="text-blue-400">State Management:</strong>{" "}
          //           Redux Toolkit
          //         </li>
          //         <li>
          //           <strong className="text-blue-400">UI & Components:</strong>{" "}
          //           TailwindCSS, ShadCN
          //         </li>
          //       </ul>

          //       {/* Features Section */}
          //       <h2 className="text-2xl font-bold text-green-400 mb-2">
          //         🌟 Key Features
          //       </h2>
          //       <p className="mb-4">
          //         This platform offers a range of powerful features designed to
          //         enhance user experience, performance, and scalability. Here’s
          //         what you can expect:
          //       </p>
          //       <ul className="list-disc list-inside text-gray-300">
          //         <li>
          //           🚀 **Whole Slide Image Viewer** with bounding box detection
          //           for precise analysis
          //         </li>
          //         <li>🔒 Secure authentication with Appwrite (Login/Signup)</li>
          //         <li>📱 Fully responsive UI optimized for all screen sizes</li>
          //         <li>
          //           ⚡ Fast-loading pages and optimized backend performance
          //         </li>
          //         <li>
          //           🛠️ Scalable project structure, ready for future enhancements
          //         </li>
          //       </ul>
          //     </div>
          //   )}
          // </div>

          <div className="bg-transparent p-8 rounded-lg shadow-xl mb-10 text-center max-w-3xl mx-auto border border-gray-700 font-grotesk">
            <div>
              <img
                src={blogImg}
                alt="Tech Blog Preview"
                className="w-full mx-auto rounded-lg shadow-lg border border-gray-600 mb-4"
              />
              <p className="text-white text-xl mb-2">
                Welcome to the Blogging Platform
              </p>
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="bg-gradient-to-r from-blue-400 via-white to-pink-400 bg-clip-text text-transparent border border-gray-500 px-5 py-2 rounded-md text-xl font-semibold hover:opacity-90 transition"
              >
                {showFullDescription ? "Show Less" : "Read More"}
              </button>
            </div>

            {showFullDescription && (
              <div className="text-left text-gray-300 mt-6">
                <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-pink-400 mb-4">
                  📖 About This Blogging Platform
                </h1>
                <p className="mb-6 leading-relaxed">
                  This platform is designed to be a{" "}
                  <span className="font-bold">
                    powerful and feature-rich blogging system
                  </span>
                  , enabling users to{" "}
                  <span className="font-bold">
                    create, manage, and share content seamlessly
                  </span>
                  . It provides a structured and engaging reading experience for
                  visitors while giving content creators intuitive tools to
                  publish their ideas.
                </p>

                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-pink-400 mb-2">
                  🛠 Features
                </h2>
                <p className="mb-4">
                  <span className="font-bold">User Authentication</span> –
                  Secure login/signup system for contributors and readers.
                </p>
                <p className="mb-4">
                  <span className="font-bold">Rich Text Editor</span> – Used
                  TinyMce for the editing purpose, with API keys.
                </p>

                <p className="mb-4">
                  <span className="font-bold">Responsive UI</span> – Fully
                  optimized for mobile, tablet, and desktop.
                </p>
                <p className="mb-4">
                  <span className="font-bold">Interaction ?</span> – Readers can
                  only read the blogs till now, later on I will add the comment
                  and like functionality as it grows.
                </p>

                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-pink-400 mb-2">
                  🔥 Technology Stack
                </h2>
                <p className="mb-4">
                  💡 <span className="font-bold">Frontend:</span> React.js,
                  Redux, & TailwindCSS.
                </p>
                <p className="mb-4">
                  🚀 <span className="font-bold">Backend:</span> Appwrite (for
                  authentication & database). It is a product which serves
                  Backend as a service. For beginners its easy to learn and
                  implement.
                </p>
                <p className="mb-4">
                  🛠 <span className="font-bold">Database:</span> MongoDB –
                  Optimized for scalable content storage.
                </p>
                <p className="mb-4">
                  📡 <span className="font-bold">Deployment:</span> Hosted on
                  Vercel.
                </p>

                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-pink-400 mb-2">
                  🚀 How It Works
                </h2>
                <p className="mb-4">
                  ✔️ Users <span className="font-bold">sign up or log in</span>{" "}
                  to access content and post blogs.
                </p>
                <p className="mb-4">
                  ✔️ Authors{" "}
                  <span className="font-bold">create and publish blogs</span>{" "}
                  using a Markdown-supported editor.
                </p>

                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-pink-400 mb-2">
                  💡 Future Enhancements
                </h2>
                <p className="mb-4">
                  🔍{" "}
                  <span className="font-bold">AI-powered Recommendations</span>{" "}
                  – Suggest relevant blogs based on reading history.
                </p>
                <p className="mb-4">
                  📩 <span className="font-bold">Newsletter Integration</span> –
                  Users can subscribe for updates.
                </p>
                <p className="mb-4">
                  📊 <span className="font-bold">Analytics Dashboard</span> –
                  Track views, engagement, and reader demographics.
                </p>
                <p className="mb-4">
                  🌍 <span className="font-bold">Multi-language Support</span> –
                  Expand reach by supporting multiple languages.
                </p>

                <p className="mb-4">
                  This blogging platform is built to{" "}
                  <span className="font-bold">
                    empower writers and engage readers
                  </span>
                  , making content creation seamless and enjoyable. 🚀
                </p>
              </div>
            )}
          </div>
        )}

        {/* Posts Section */}
        <div className="flex flex-wrap justify-center gap-4">
          {posts.length === 0 ? (
            <div className="w-full text-center text-gray-400  text-4xl md:text-6xl mt-10">
              <h1 className="font-semibold hover:text-gray-200 transition">
                Login to read posts
              </h1>
            </div>
          ) : (
            posts.map((post) => (
              <div
                key={post.$id}
                className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <PostCard {...post} />
              </div>
            ))
          )}
        </div>
      </Container>
    </div>
  );
}

export default Home;

// import React, { useState, useEffect } from "react";
// import appwriteService from "../appwrite/config";
// import { Container, PostCard } from "../components";

// function Home() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     appwriteService.allPost().then((posts) => {
//       if (posts) {
//         setPosts(posts.documents);
//       }
//     });
//   }, []);

//   if (posts.length === 0) {
//     return (
//       <div className="w-full py-8 mt-4 text-center">
//         <Container>
//           <div className="flex flex-wrap">
//             <div className="p-2 w-full">
//               <h1 className="text-6xl font-bold text-gray-400 hover:text-gray-300">
//                 Login to read posts
//               </h1>
//             </div>
//           </div>
//         </Container>
//       </div>
//     );
//   }
//   return (
//     <div className="w-full py-8">
//       <Container>
//         <div className="flex flex-wrap">
//           {posts.map((post) => (
//             <div key={post.$id} className="p-2 w-1/4">
//               <PostCard {...post} />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default Home;

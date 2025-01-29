// import React from "react";
// import { InstagramEmbed } from "react-social-media-embed";

// const Instagram = () => {
//   return (
//     <div className="instagram-section flex flex-col items-center bg-gradient-to-r bg-blue-400 py-10 px-4">
//       <h2 className="text-3xl font-bold text-white mb-4 text-center">
//         Follow Us on Instagram
//       </h2>
//       <p className="text-white text-center mb-8 max-w-2xl">
//         Stay updated with our latest activities, events, and stories. We love
//         sharing moments and connecting with our community!
//       </p>
//       <div className="instagram-embed-container bg-white shadow-lg rounded-xl overflow-hidden border-2 border-gray-200">
//         <InstagramEmbed
//           url="https://www.instagram.com/mh14animalhospital"
//           maxWidth={800}
//           className="w-full max-w-[800px] h-auto"
//           hideCaption={false}
//           containerTagName="div"
//           protocol="https:"
//           injectScript
//           onLoading={() => console.log("Loading...")}
//           onSuccess={() => console.log("Loaded successfully")}
//           onAfterRender={() => console.log("Rendered")}
//           onFailure={(error) => console.error("Failed to load", error)}
//         />
//       </div>
//     </div>
//   );
// };

// export default Instagram;

import React from "react";
import { FacebookEmbed } from "react-social-media-embed";
import { InstagramEmbed } from "react-social-media-embed";

const Instagram = () => {
  return (
    <>
      {/* instagram and facebook */}
      <div className="social-media-section bg-gradient-to-r from-blue-400 to-blue-600 py-10 px-4">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Instagram Section */}
          <div className="instagram-section w-full md:w-1/2 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Follow Us on Instagram
            </h2>
            <p className="text-white text-center mb-8 max-w-2xl">
              Stay updated with our latest activities, events, and stories. We
              love sharing moments and connecting with our community!
            </p>
            <div className="instagram-embed-container bg-white shadow-lg rounded-xl overflow-hidden border-2 border-gray-200">
              <InstagramEmbed
                url="https://www.instagram.com/mh14animalhospital"
                maxWidth={1200}
                className="w-full max-w-[900px] h-auto"
                hideCaption={false}
                containerTagName="div"
                protocol="https:"
                injectScript
              />
            </div>
          </div>

          {/* Facebook Section */}
          {/* <div className="facebook-section w-full md:w-1/2 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Connect with Us on Facebook
            </h2>
            <p className="text-white text-center mb-8 max-w-2xl">
              Join our Facebook community to get the latest updates, healthcare
              tips, and heartwarming stories about our animal patients!
            </p>
            <div className="facebook-embed-container bg-white shadow-lg rounded-xl overflow-hidden border-2 border-gray-200">
              <FacebookEmbed
                url="https://www.facebook.com/mh14animalhospital/"
                maxWidth={800}
                className="w-full max-w-[800px] h-auto"
                hideCaption={false}
                containerTagName="div"
                protocol="https:"
                injectScript
              />
            </div>
          </div> */}
        </div>
      </div>

    
    </>
  );
};

export default Instagram;

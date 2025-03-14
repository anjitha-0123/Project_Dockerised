// import React, { useState } from "react";
// import Navbar from "../components/Navbar";

// const AddProfile = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [bio, setBio] = useState("");
//   const [profileImage, setProfileImage] = useState(null);
//   const [previewImage, setPreviewImage] = useState(""); 

//   const handleProfile = async (e) => {
//     e.preventDefault();

//     try {
//         const formData = new FormData();
//         formData.append("username", username);
//         formData.append("email", email);
//         formData.append("bio", bio);
//         if (profileImage) {
//             formData.append("ProfileImage", profileImage); 
//         }

//         const res = await fetch("/api/addProfile", {
//             method: "POST",
//             credentials: "include",
//             body: formData, 
//         });

//         const data = await res.json();
//         if (res.ok) {
//             alert("Profile Updated Successfully!");
          
//         } else {
//             alert("Error: " + (data.message || "Something went wrong"));
//         }
//     } catch (error) {
//         console.error("Error:", error);
//         alert("Something went wrong: " + error.message);
//     }
// };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProfileImage(file);
//       setPreviewImage(URL.createObjectURL(file)); 
//     }
//   };

//   return (
//     <div className="bg-gray-800 w-full min-h-screen">
//       <Navbar />

//       <form className="md:mt-24 sm:mt-12" onSubmit={handleProfile}>
//         <h1 className="text-white md:text-2xl font-semibold text-center">
//           Edit Profile
//         </h1>

//         <div className="bg-gray-400 md:w-[400px] md:h-[200px] mt-4 mx-auto rounded-md flex flex-col items-center justify-center">
//           <img
//             src={previewImage || "images/editprofile.svg"}
//             className="md:w-24 md:h-24 sm:w-12 sm:h-12 rounded-full border"
//             alt="Profile Preview"
//           />
        
//            <label className="cursor-pointer text-blue-600 hover:underline">
//                   Add new Profile Photo
//                   <input
//                    type="file"
//                    className="hidden"
//                    accept="image/*"
//                    onChange={handleImageChange}
//                   />
//            </label>


//         </div>

//         <div className="grid md:w-[450px] mx-auto mt-8">
//           <label className="text-orange-600 font-semibold text-xl">User Name:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full h-12 p-2 rounded-md border"
//             required
//           />

//           <label className="text-orange-600 font-semibold text-xl mt-4">Email ID:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full h-12 p-2 rounded-md border"
//             required
//           />

//           <label className="text-orange-600 font-semibold text-xl mt-4">Bio:</label>
//           <textarea
//             rows="4"
//             value={bio}
//             onChange={(e) => setBio(e.target.value)}
//             className="w-full h-24 p-2 rounded-md border"
//           ></textarea>

//           <button
//             type="submit"
//             className="bg-white text-orange-900 w-24 h-12 mx-auto mt-6 rounded-lg text-lg font-semibold hover:bg-gray-300"
//           >
//             Done
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddProfile;






import React, { useState } from "react";
import Navbar from "../components/Navbar";

const AddProfile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  const handleProfile = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("bio", bio);
      if (profileImage) {
        formData.append("ProfileImage", profileImage);
      }

      const res = await fetch("/api/addProfile", {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        alert("Profile Updated Successfully!");
      } else {
        alert("Error: " + (data.message || "Something went wrong"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong: " + error.message);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-gray-800 w-full min-h-screen flex flex-col items-center p-4">
      <Navbar />

      <form 
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg mt-12"
        onSubmit={handleProfile}
      >
        <h1 className="text-gray-900 text-2xl font-semibold text-center mb-6">Edit Profile</h1>

        {/* Profile Image Upload */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border overflow-hidden">
            <img
              src={previewImage || "images/editprofile.svg"}
              className="w-full h-full object-cover"
              alt="Profile Preview"
            />
          </div>
          <label className="cursor-pointer text-blue-600 hover:underline mt-3">
            Add new Profile Photo
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {/* Form Fields */}
        <div className="mt-6 space-y-4">
          <div>
            <label className="text-gray-700 font-semibold">User Name:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-12 p-2 rounded-md border focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 font-semibold">Email ID:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 p-2 rounded-md border focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 font-semibold">Bio:</label>
            <textarea
              rows="4"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-2 rounded-md border focus:ring focus:ring-blue-300"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white w-full h-12 mt-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AddProfile;























































































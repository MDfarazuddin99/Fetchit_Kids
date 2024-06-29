// "use client";
import Image from "next/image";
import { Link, CloudUpload } from "lucide-react";
import { useChat } from "ai/react";
import React, { useState } from "react";

export default function ChatInputForm() {
  //   const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [imageUrl, setImageUrl] = useState("");
  const [submittedUrl, setSubmittedUrl] = useState("");
  const [imageDesc, setImageDesc] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Perform your POST request with the imageUrl
      const response = await fetch("api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageUrl }),
      });

      if (response.ok) {
        // Assuming response contains image data or confirmation
        const data = await response.json();
        console.log("data: " + data.message);
        setImageDesc(data.message);
        setSubmittedUrl(imageUrl); // Store the submitted URL to display
      } else {
        console.error("Failed to submit image URL");
      }
    } catch (error) {
      console.error("Error submitting image URL:", error);
    }
  };

  return (
    <div className="flex flex-col items-center w-[60%] rounded m-[5px] p-[3%]">
      {/* Display submitted image if available */}
      <div className="flex flex-col items-center w-[100%]">
        {submittedUrl && (
          <div className=" flex flex-col items-center">
            <h2 className="text-lg font-medium text-gray-900 mb-2 text-1xl text-white">
              Submitted Image:
            </h2>
            <Image
              src={submittedUrl}
              objectFit="contain"
              alt="image to be uploaded"
              width={200}
              height={200}
            />{" "}
          </div>
        )}
        {!imageDesc ? (
          <form onSubmit={handleSubmit} className="w-full">
            <label className="mb-2 text-sm font-medium sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {/* Replace with your icon or component */}
                <Link className="w-6 h-6 "></Link>
              </div>
              <input
                className="block w-full p-4 pl-10 text-sm  border rounded-lg c-light"
                placeholder="Enter Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          ""
        )}
        <div className="w-full bg-white mt-2">
          Image Description:{" "}
          {imageDesc ? (
            <div className="mt-4">
              <h2 className="text-lg font-medium text-gray-900 mb-2">
                {imageDesc}
              </h2>
              {<div>Please upload Image</div>}
            </div>
          ) : (
            <div>Upload Image to get description</div>
          )}
        </div>
      </div>

      {!imageDesc ? (
        <div className="flex items-center justify-center w-full mt-5 ">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-500">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <CloudUpload size={40} className="shrink text-white w-12 h-12" />
              <p className="mb-2 text-sm text-gray-900">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-900">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

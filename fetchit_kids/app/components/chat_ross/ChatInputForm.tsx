"use client";
import { Link, CloudUpload } from "lucide-react";
import { useChat } from "ai/react";

export default function ChatInputForm() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="w-[60%] h-[500px] bg-ross rounded mt-[10px] p-[5%]">
      {/* <form onSubmit={handleSubmit}>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Link size={20} className="shrink text-white w-6 h-6" />
          </div>
          <input
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-ross-light"
            placeholder="Enter Image URL"
            value={input}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
          >
            Submit
          </button>
        </div>
      </form> */}
    <div className="flex flex-col w-full max-w-md mx-auto stretch">
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="w-full max-w-md p-2 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
      <div className="flex items-center justify-center w-full mt-5 ">
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-ross-light">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <CloudUpload size={40} className="shrink text-white w-12 h-12" />
            <p className="mb-2 text-sm text-gray-900">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-900">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
}

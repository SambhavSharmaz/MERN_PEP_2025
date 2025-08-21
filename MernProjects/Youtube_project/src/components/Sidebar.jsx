import React from "react";
import { Home, PlaySquare, Clock, ThumbsUp, History, PlayCircle, Music, Film, Gamepad, Newspaper, Radio, Shirt, Headphones,ShoppingCart } from "lucide-react"; 

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4 overflow-y-auto">
      <div className="mb-4">
        <h1 className="text-xl font-bold mb-4">YouTube</h1>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded">
            <Home size={20} /> Home
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded">
            <PlaySquare size={20} /> Shorts
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded">
            <PlayCircle size={20} /> Subscriptions
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded">
            You
          </li>
        </ul>
      </div>

      <div className="border-t border-gray-700 pt-4 mb-4">
        <ul className="space-y-2">
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded">
            <History size={20} /> History
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded">
            Playlists
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded">
            Your videos
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded">
            Your courses
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded">
            <Clock size={20} /> Watch Later
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded">
            <ThumbsUp size={20} /> Liked videos
          </li>
        </ul>
      </div>

      <div className="border-t border-gray-700 pt-4 mb-4">
        <h2 className="font-semibold mb-2">Subscriptions</h2>
        <ul className="space-y-2">
          <li className="cursor-pointer hover:bg-gray-800 p-2 rounded">WWE</li>
          <li className="cursor-pointer hover:bg-gray-800 p-2 rounded">Muse Asia</li>
          <li className="cursor-pointer hover:bg-gray-800 p-2 rounded">Windpress</li>
          <li className="cursor-pointer hover:bg-gray-800 p-2 rounded">The Land Of Boggs</li>
          <li className="cursor-pointer hover:bg-gray-800 p-2 rounded">The Supa Strikas</li>
          <li className="cursor-pointer hover:bg-gray-800 p-2 rounded">PUBG TV</li>
          <li className="cursor-pointer hover:bg-gray-800 p-2 rounded">Alan Becker</li>
          <li className="cursor-pointer hover:bg-gray-800 p-2 rounded text-blue-400">Show more</li>
        </ul>
      </div>

      <div className="border-t border-gray-700 pt-4 mb-4">
        <h2 className="font-semibold mb-2">Explore</h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded"><ShoppingCart size={20}/> Shopping</li>
          <li className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded"><Music size={20}/> Music</li>
          <li className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded"><Film size={20}/> Films</li>
          <li className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded">Live</li>
          <li className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded"><Gamepad size={20}/> Gaming</li>
          <li className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded"><Newspaper size={20}/> News</li>
          <li className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded">Sport</li>
          <li className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded">Courses</li>
          <li className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded"><Shirt size={20}/> Fashion & Beauty</li>
          <li className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded"><Headphones size={20}/> Podcasts</li>
        </ul>
      </div>

      <div className="border-t border-gray-700 pt-4 text-xs text-gray-400 space-y-2">
        <p>More from YouTube</p>
        <p>YouTube Premium</p>
        <p>YouTube Studio</p>
        <p>YouTube Music</p>
        <p>YouTube Kids</p>
        <p className="pt-2">Settings</p>
        <p>Report history</p>
        <p>Help</p>
        <p>Send feedback</p>
        <p className="pt-2 text-gray-500">© 2025 YouTube Clone</p>
      </div>
    </div>
  );
};

export { Sidebar };

import React from "react";

export function Card({ userName, btn = "Veiw", contain }) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{userName}</h1>
        <p className="mt-2 text-sm text-gray-300">{contain}</p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btn} &rarr;
        </button>
      </div>
    </div>
    //Actually the initial state has color olive and the reload technically resets the state. So, it gets the olive color.
  );
}

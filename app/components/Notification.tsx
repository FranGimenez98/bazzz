import React from "react";

export default function Notification() {
  return (
    <div className="fixed bottom-4 left-0 right-0 flex items-center justify-center w-full z-50">
      <div className="h-[2rem] w-[20rem] bg-green-500 rounded-lg flex items-center justify-center ">
        <p className="text-center text-white">Email enviado correctamente!</p>
      </div>
    </div>
  );
}

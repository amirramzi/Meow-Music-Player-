import React from "react";

import AudioPlayer from "./AudioPlayer";

import DrakeImg from "../assets/img/Three-Covers-Of-Drakes-Hotline-Bling.jpg";
import DrakeMusic from "../assets/music/Drake-hotline bling-musicDel-320.mp3";

function CardMusic() {
  return (
    <div className="bg-myGray-50 flex flex-col items-center justify-between backdrop-blur-2xl m-auto  rounded-lg px-4 relative   w-myW">
      <div className="w-full flex items-center ">
        <img
          className="overflow-hidden w-14 mt-4 rounded"
          src={DrakeImg}
          alt="Drake hotline bling"
        />

        <div className="pl-4 w-full ">
          <h6>Drake</h6>
          <p className="line-clamp-1 -mt-2">hotline bling</p>
        </div>
      </div>
      <AudioPlayer src={DrakeMusic} />
    </div>
  );
}

export default CardMusic;

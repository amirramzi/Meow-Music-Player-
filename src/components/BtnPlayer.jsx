import React, { useState } from "react";

import BtnIcon from "./BtnIcon";

import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import Typography from "@mui/material/Typography";

function BtnPlayer(props) {
  const [countDL, setCountDL] = useState(0);
  const [countFav, setCountFav] = useState(0);
  const [statusFavorite, setStatusFavorite] = useState(false);
  const [countShare, setCountShare] = useState(0);

  const favoriteHandeler = () => {
    setStatusFavorite(!statusFavorite);
    statusFavorite ? setCountFav(countFav - 1) : setCountFav(countFav + 1);
  };
  const style = {
    color: "#124076",
  };
  const isPlaying = props?.isPlaying;
  const playCount = props?.playCount;
  return (
    <>
      <div className="h-full flex ">
        <div className="flex items-center ">
          <BtnIcon
            onClick={props.playMusicClick}
            style={style}
            title={isPlaying ? "Pause" : "Play"}
            size="large"
            icon={
              isPlaying ? (
                <PauseCircleOutlineIcon />
              ) : (
                <PlayCircleFilledWhiteOutlinedIcon />
              )
            }
          />
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            {playCount}
          </Typography>
        </div>
        <div className="flex items-center ">
          <BtnIcon
            onClick={() => setCountDL(countDL + 1)}
            style={style}
            title="Download"
            size="large"
            icon={<ArrowCircleDownIcon />}
          />
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            {countDL}
          </Typography>
        </div>
        <div className="flex items-center ">
          <BtnIcon
            onClick={favoriteHandeler}
            style={style}
            title="Favorite"
            size="large"
            icon={
              statusFavorite ? (
                <Favorite style={style} />
              ) : (
                <FavoriteBorder style={style} />
              )
            }
          />
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            {countFav}
          </Typography>
        </div>
        <div className="flex items-center ">
          <BtnIcon
            onClick={() => setCountShare(countShare + 1)}
            style={style}
            title="Share "
            size="large"
            icon={<ShareIcon />}
          />
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            {countShare}
          </Typography>
        </div>
      </div>
    </>
  );
}

export default BtnPlayer;

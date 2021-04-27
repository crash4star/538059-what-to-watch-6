import React, {useEffect, useRef} from 'react';

const Player = (props) => {
  const poster = props.poster;
  const preview = props.preview;
  const isPlaying = props.isPlaying;
  const videoRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.load();
  }, [isPlaying]);

  return (
    <>
      <video width={280} height={175} poster={poster} ref={videoRef} muted>
        <source src={preview} type="video/mp4" />
      </video>
    </>
  );
};

export default Player;

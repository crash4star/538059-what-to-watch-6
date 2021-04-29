import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

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

Player.propTypes = {
  poster: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default Player;

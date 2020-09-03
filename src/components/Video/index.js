import React from 'react';
import style from './video.module.scss';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Video = () => {
  const videoRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);

  const handleVideoClick = () => {
    playing ? videoRef.current.pause() : videoRef.current.play();
    setPlaying(!playing);
  }

  return (
    <div className={style.video}>
      <video
        className={style.video__player}
        onClick={handleVideoClick}
        ref={videoRef}
        loop
        src="https://v16m.tiktokcdn.com/bb31b9eb8ada6c144e42acd8eeb97a74/5f50ad0c/video/tos/alisg/tos-alisg-pve-0037/9b7aaef1ea6c4d2c8256a363a340a25a/?a=1233&br=3978&bt=1989&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020090302444501019018816013004850&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzNteXZlbTc1dzMzZDczM0ApaDNnZzdnPDwzNzg8NzhlZGc0Lm0xM2plZzVfLS1eMTRzc2MwYy40YjJeMl4wNTViMTA6Yw%3D%3D&vl=&vr="
      ></video>

      <Footer />
      <Sidebar />
    </div>
  )
}

export default Video;
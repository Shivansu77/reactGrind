import React from 'react'

const VideoBackground = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black">
      <div className="relative w-full pt-[56.25%]">
        <iframe
          className="absolute inset-0 h-full w-full object-cover"
          src="https://www.youtube.com/embed/itnqEauWQZM?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&loop=1"
          title="Interstellar Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default VideoBackground
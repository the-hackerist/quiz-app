function BackgroundVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 z-[-1] size-full object-cover"
    >
      <source src="bg-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default BackgroundVideo;

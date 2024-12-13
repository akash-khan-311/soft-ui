import CodeBox from "@/components/Shared/Codebox/CodeBox";

const Hero10 = () => {
  return (
    <>
      <CodeBox
        stringCode={`<section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
  {/* Video Background */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
    <video
      className="min-w-full min-h-full absolute object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
      type="video/mp4"
      autoPlay
      muted
      loop
    ></video>
    <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
  </div>
  {/* Content */}
  <div className="space-y-2 z-20">
    <h1 className="text-4xl md:text-5xl lg:text-6xl">Full Hero Video</h1>
    <h3 className="text-xl md:text-2xl lg:text-3xl">with <span className="logo-text">Soft UI</span></h3>
  </div>
</section>`}
      >
        <section className="relative h-[60vh] flex flex-col items-center justify-center text-center text-white">
          {/* Video Background */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <video
              className="min-w-full min-h-full absolute object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              type="video/mp4"
              autoPlay
              muted
              loop
            ></video>
            <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
          </div>

          {/* Content */}
          <div className="space-y-2 z-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              Full Hero Video
            </h1>
            <h3 className="text-xl md:text-2xl lg:text-3xl">
              with <span className="logo-text">Soft UI</span>
            </h3>
          </div>
        </section>
      </CodeBox>
    </>
  );
};
export default Hero10;

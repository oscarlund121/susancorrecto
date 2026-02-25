const WaveDivider = ({ bg = "white", fill = "#367067", flip = false }) => {
  return (
    <div style={{ backgroundColor: bg, marginBottom: "-1px" }}>
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block w-full h-[40px] md:h-[60px] lg:h-[80px]"
        style={flip ? { transform: "scaleY(-1)" } : undefined}
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;

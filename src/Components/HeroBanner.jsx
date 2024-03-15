

const HeroBanner = () => {
    return (
      <>
        <div className="px-4 lg:px-32">
          <div
            className="hero min-h-[600px] rounded-3xl"
            style={{
              backgroundImage: `url(${require("./banner.png")})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay rounded-3xl  bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button classNameName="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default HeroBanner;
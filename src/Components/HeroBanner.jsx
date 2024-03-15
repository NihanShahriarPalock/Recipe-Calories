import banner from "../assets/banner.png"

const HeroBanner = () => {
    return (
      <>
        <div className="px-4 lg:px-32">
          <div
            className="hero min-h-[600px] rounded-3xl"
            style={{
              backgroundImage: `url(${banner})`,
            }}
          >
            <div className="hero-overlay rounded-3xl  bg-opacity-20"></div>
            <div className="hero-content text-center text-white ">
              <div className="">
                <h1 className="text-5xl font-bold">
                  Discover an exceptional cooking <br /> class tailored for you!
                </h1>
                <p className="mt-6">
                  Learn and Master Basic Programming, Data Structures,
                  Algorithm, OOP, Database and solve 500+ coding <br /> problems
                  to become an exceptionally well world-class Programmer.
                </p>

                <div className="mt-10">
                  <button className="mr-4 btn rounded-[50px] px-7  bg-[#0BE58A] text-[#150B2B] text-xl font-semibold">
                    Explore Now
                  </button>
                  <button className="btn rounded-[50px] text-white px-7 bg-transparent text-xl font-semibold">
                    Our Feedback
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default HeroBanner;
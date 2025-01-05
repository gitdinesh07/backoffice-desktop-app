import CustomLayout from "../layout";

const AboutUsPage = () => {
  return (
    <CustomLayout title="About - Design Draft">
      <div className="w-full px-4 md:px-20">
        <h2 className="title text-2xl md:text-4xl inline font-bold leading-tight">About US</h2>
        <p className="mt-4 opacity-60">
          Welcome to Design Draft, a leading Building Engineering Design Consultancy firm dedicated
          to transforming ideas into innovative, sustainable, and efficient built environments. With
          a passion for excellence and a commitment to precision, we specialize in delivering
          cutting-edge engineering solutions and comprehensive BIM (Building Information Modeling)
          services to the Architecture, Engineering, and Construction (AEC) industry.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 my-6">
          <img
            src="assets/about-image.png"
            alt="About Design Draft"
            className="w-full h-auto rounded-md"
          />
          <div>
            <h2 className="text-2xl md:text-4xl inline font-bold leading-tight">Who We Are</h2>
            <p className="mt-4 opacity-60">
              At Design Draft, we are a team of experienced professionals with expertise spanning
              multiple engineering disciplines, including Mechanical, Electrical, Plumbing, HVAC,
              and Fire Fighting systems. By blending creativity with technical expertise, we provide
              tailored solutions that ensure projects are designed, coordinated, and executed
              seamlessly.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
          <div>
            <h2 className="text-2xl md:text-4xl inline font-bold leading-tight">What We Do</h2>
            <p className="mt-4 opacity-60 font-semibold">Building Engineering Design</p>
            <p className="mt-4 opacity-60">
              We offer end-to-end design consultancy services, from concept development to detailed
              engineering design and documentation. Our focus is on creating efficient, functional,
              and sustainable designs that meet client expectations while adhering to international
              standards.
            </p>
            <p className="mt-4 opacity-60 font-semibold">BIM Solutions</p>
            <p className="mt-4 opacity-60">
              Our expertise in Building Information Modeling helps clients visualize, plan, and
              execute projects more effectively. From 3D modeling and clash detection to
              construction documentation and facility management, our BIM services ensure every
              project phase is optimized for success.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl inline font-bold leading-tight">Our Mission</h2>
            <p className="mt-4 opacity-60">
              To empower the AEC industry with innovative design and BIM solutions that drive
              efficiency, enhance collaboration, and deliver sustainable outcomes for clients across
              the globe.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl inline font-bold leading-tight">Why Choose Us?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
          <div>
            <h2 className="text-2xl md:text-4xl inline font-bold leading-tight">Our Values</h2>
            <ul className="mt-4 opacity-60">
              {[
                "Innovation: Continuously embracing new technologies and methodologies to enhance project delivery.",
                "Integrity: Upholding the highest standards of professionalism and ethics in every engagement.",
                "Collaboration: Building strong relationships with clients and stakeholders to achieve shared goals.",
                "Excellence: Striving for perfection in every project, no matter the size or complexity.",
              ].map((item: string, index: number) => (
                <li key={index} className="flex gap-4 items-start">
                  <span className="text-lg font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl inline font-bold leading-tight">Our Vision</h2>
            <p className="mt-4 opacity-60">
              To be the go-to consultancy firm for innovative building design and BIM solutions,
              setting new benchmarks in quality, efficiency, and sustainability.
            </p>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
};

export default AboutUsPage;

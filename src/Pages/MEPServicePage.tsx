import CustomLayout from "../layout";

const MEPServicePage = () => {
  return (
    <CustomLayout title="MEP Service - Design Draft">
      <div className="w-full px-4 md:px-20">
        <h1 className="title text-2xl md:text-4xl inline font-bold leading-tight">MEP Design</h1>
      </div>
      <div className="w-full px-4 md:px-20 mt-8">
        <h2 className="text-1xl md:text-3xl inline font-bold leading-tight">Electrical</h2>
        <img src="assets/image7.png" className="mt-4" />
        <div className="flex flex-col gap-4 mt-4">
          <p>
            Welcome to Design Drafter, where innovation meets expertise in electrical consultancy.
            With a commitment to excellence and a passion for providing tailored solutions, we are
            your trusted partner for all your electrical design, planning, and project management
            needs.
          </p>
          <p>Our Expertise</p>
          <p>
            At Design Drafter, we specialize in delivering cutting-edge electrical consultancy
            services for a diverse range of industries, including residential, commercial,
            industrial, and infrastructure projects. Our team of experienced engineers and
            consultants work closely with clients to ensure every project meets the highest
            standards of safety, efficiency, and sustainability.
          </p>
          <ul>
            {[
              "Low Voltage System Design",
              "Circuiting",
              "Lighting Calculation",
              "Breaker Sizing",
              "Cable Sizing and Scheduling",
              "Power Distribution",
              "Earthing Calculation",
              "Lightning Protection",
              "Electrical Conduiting Layouts",
              "DB Electrical SLD (Single Line Diagrams)",
              "Equipment Selection",
            ].map((item: string, index: number) => (
              <li key={index} className="flex gap-6 items-start">
                <span className="text-lg font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-8">
            <img src="assets/image9.png" />
            <img src="assets/image8.png" />
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-20 mt-12">
        <h2 className="text-1xl md:text-3xl inline font-bold leading-tight">HVAC</h2>
        <img src="assets/image10.png" className="mt-4" />
        <div className="flex flex-col gap-4 mt-4">
          <p>
            Welcome to Design Drafter, your trusted partner for advanced HVAC (Heating, Ventilation,
            and Air Conditioning) solutions. We specialize in creating efficient and sustainable
            environments for residential, commercial, and industrial spaces.
          </p>
          <p>Services We Offer</p>
          <ul>
            {[
              "Air Conditioning",
              "HVAC System Design",
              "Heat Load Calculation",
              "VRV System",
              "Chilled Water System",
              "Ventilation System",
              "Product Selection",
              "System Upgrades",
              "ECS and TVS System",
            ].map((item: string, index: number) => (
              <li key={index} className="flex gap-6 items-start">
                <span className="text-lg font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full px-4 md:px-20 mt-12">
        <h2 className="text-1xl md:text-3xl inline font-bold leading-tight">Fire Fighting</h2>
        <img src="assets/image12.png" className="mt-4" />
        <div className="flex flex-col gap-4 mt-4">
          <p>
            At Design Drafter, safety is our priority. We provide professional fire fighting
            consultancy services to help you safeguard your property and protect lives.
          </p>
          <p>Services We Offer</p>
          <ul>
            {[
              "Fire Sprinklers Layouts",
              "Fire Hydrant Layouts",
              "Fire Alarms",
              "Head Loss Calculation",
              "Pump Selection",
              "Pump Room Layout",
            ].map((item: string, index: number) => (
              <li key={index} className="flex gap-6 items-start">
                <span className="text-lg font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full px-4 md:px-20 mt-12">
        <h2 className="text-1xl md:text-3xl inline font-bold leading-tight">Plumbing</h2>
        <img src="assets/image11.png" className="mt-4" />
        <div className="flex flex-col gap-4 mt-4">
          <p>
            At Design Drafter, we offer specialized plumbing design consultancy services to ensure
            your water systems are efficient, reliable, and sustainable. Whether for residential,
            commercial, or industrial applications, we deliver innovative solutions tailored to your
            specific needs.
          </p>
          <p>Services We Offer</p>
          <ul>
            {[
              "Water Supply System Design",
              "Drainage and Wastewater Systems",
              "Rainwater Harvesting Systems",
              "Fixture Selection and Specification",
            ].map((item: string, index: number) => (
              <li key={index} className="flex gap-6 items-start">
                <span className="text-lg font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CustomLayout>
  );
};

export default MEPServicePage;

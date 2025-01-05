import CustomLayout from "../../layout";

const ElectricPage = () => {
  return (
    <CustomLayout title="MEP Electric Services - Design Draft">
      <div className="w-full px-4 md:px-20 mt-8">
        <h2 className="text-1xl md:text-3xl inline font-bold leading-tight">Electrical</h2>
        <img src="../assets/image7.png" className="mt-4" />
        <div className="flex flex-col gap-4 mt-4">
          <p className="opacity-60" >
            Welcome to Design Drafter, where innovation meets expertise in electrical consultancy.
            With a commitment to excellence and a passion for providing tailored solutions, we are
            your trusted partner for all your electrical design, planning, and project management
            needs.
          </p>
          <p>Our Expertise</p>
          <p className="opacity-60">
            At Design Drafter, we specialize in delivering cutting-edge electrical consultancy
            services for a diverse range of industries, including residential, commercial,
            industrial, and infrastructure projects. Our team of experienced engineers and
            consultants work closely with clients to ensure every project meets the highest
            standards of safety, efficiency, and sustainability.
          </p>
          <ul className="opacity-60" >
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
            <img src="../assets/image9.png" />
            <img src="../assets/image8.png" />
          </div>
        </div>
      </div>
    </CustomLayout>
  );
};

export default ElectricPage;

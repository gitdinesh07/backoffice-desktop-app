import CustomLayout from "../../layout";

const ManpowerPage = () => {
  return (
    <CustomLayout title="BIM Manpower - Design Draft">
      <div className="w-full px-4 md:px-20 ">
      <h2 className="title text-2xl md:text-4xl font-bold leading-tight">
          Staffing / Secondment
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] items-center mb-12 gap-8 sm:gap-12 mt-6">
          <div>
            <img
              src="../assets/image14.png"
              alt="Staffing Image"
              className="w-full max-w-md mx-auto rounded-md"
            />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <p>Design Drafter: Skilled BIM Experts to Strengthen Your Team</p>
            <p className="opacity-60">
              At [Your Company Name], we specialize in providing top-tier BIM manpower resourcing
              solutions for small, medium, and large-scale projects. Our team of highly skilled and
              experienced BIM professionals is equipped to support your projects with precision and
              efficiency, ensuring successful outcomes at every stage.
            </p>
            <p>Why Choose Our BIM Staffing Services?</p>
            <ul className="list-none opacity-60">
              {[
                "Access to Expert Talent: We offer access to a pool of BIM specialists proficient in Architecture, Engineering, and Construction (AEC) disciplines, ready to contribute their expertise to your projects.",
                "Rigorous Recruitment Process: Our thorough and transparent recruitment process ensures that we handpick candidates with the right skills and experience to meet your specific project needs.",
                "Scalable Solutions: Whether you require short-term project support or long-term staffing, our flexible resourcing solutions adapt to the demands of your business.",
                "Cost-Effective Resourcing: We help you achieve your goals while optimizing costs, ensuring value without compromising quality.",
              ].map((item, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <span className="text-lg font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
};

export default ManpowerPage;

import CustomLayout from "../layout";
import { DataType } from "./HomePage";

const data: DataType[] = [
  {
    title: "BIM Modeling",
    description:
      "Our Architecture, Structure and MEPF Modeling Services helps client to Leverage BIM To Drive Efficiencies & Reduce Project Risk.",
  },
  {
    title: "Shop Drawings",
    description:
      "We provide accurate shop drawings for Contractors, Manufacturers and Suppliers to ensure drawings are concise and as per Industry standards.",
  },
  {
    title: "CAD to Revit Conversion",
    description: "Converting legacy 2D drawings into intelligent, information-rich 3D BIM models.",
  },
  {
    title: "Level of Development (LOD)",
    description:
      "Design Drafter has expertise of delivering LOD for different levels including LOD 100, 200, 300, 400 and 500. We adopt internationally accepted standard for LOD.",
  },
  {
    title: "Revit Plugins",
    description:
      "Several Autodesk Revit Productivity Tools for Data Management, Filtering, Model Checking, Drawing Production, Point Clouds, etc.",
  },
  {
    title: "Revit Family Creation",
    description:
      "We provide standard and customized library creation services for building product manufacturers, fabricators, architects and engineers for their product model catalogs which are downloadable from websites",
  },
];

const BIMServices = () => {
  return (
    <CustomLayout title="BIM Service - Design Draft">
      <div className="w-full px-4 md:px-20 ">
        <h2 className="title text-2xl md:text-4xl inline font-bold leading-tight">BIM Services</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 mb-12">
          {["BIM Solution", "Manpower", "Training", "E-Learning"].map(
            (item: string, index: number) => (
              <li key={index} className="flex flex-col items-center">
                <img
                  src={`assets/bmi-service${index + 1}.png`}
                  alt={item}
                  className="w-full max-w-xs object-cover rounded-md"
                />
                <h4 className="font-semibold mt-4 text-center">{item}</h4>
              </li>
            )
          )}
        </ul>
        <h2 className="title text-2xl md:text-4xl inline font-bold leading-tight">BIM Solutions</h2>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] items-center gap-8 sm:gap-12 mt-6">
          <div className="flex flex-col gap-4 mt-4">
            <p>Design Drafter: Empowering AEC Professionals with Comprehensive BIM Solutions</p>
            <p>
              At Design drafter, we are a trusted provider of cutting-edge Building Information
              Modelling (BIM) services, catering to the needs of architecture, engineering, and
              construction (AEC) professionals worldwide. Our team specializes in delivering
              end-to-end BIM solutions that streamline project workflows from initial concept
              through to construction and facilities management.
            </p>
            <p>Our BIM Services Include:</p>
            <ul>
              {[
                "3D Modelling and Visualization: Transforming concepts into accurate, detailed 3D models for better design insights and presentations.",
                "2D to 3D Conversion: Converting legacy 2D drawings into intelligent, information-rich 3D BIM models.",
                "Design and Analysis: Supporting your design process with detailed analysis and optimization using industry-leading tools.",
                "Quantity Take-Off and Cost Estimation: Delivering precise quantity extraction and cost analysis to keep projects on track.",
                "Construction Documentation: Developing coordinated drawings and documentation to support on-site construction.",
                "Clash Detection and Coordination: Identifying and resolving conflicts to ensure smooth project execution.",
                "Facilities Management Integration: Extending BIM into the operational phase with seamless FM integration.",
              ].map((item: string, index: number) => (
                <li key={index} className="flex gap-4 items-start">
                  <span className="text-lg font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="assets/image13.png"
              alt="BIM Services"
              className="w-full max-w-sm mx-auto object-cover rounded-md"
            />
          </div>
        </div>

        <div className="mb-12 mt-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {data.map((item: DataType, index: number) => (
              <li key={index} className="bg-[#9a3eaa] p-6 sm:p-8 rounded-lg shadow-md">
                <h4 className="font-semibold text-center mt-4 sm:mt-8 mb-4 sm:mb-12">
                  {item.title}
                </h4>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="title text-2xl md:text-4xl font-bold leading-tight">
          Staffing / Secondment
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] items-center mb-12 gap-8 sm:gap-12 mt-6">
          <div>
            <img
              src="assets/image14.png"
              alt="Staffing Image"
              className="w-full max-w-md mx-auto rounded-md"
            />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <p>Design Drafter: Skilled BIM Experts to Strengthen Your Team</p>
            <p>
              At [Your Company Name], we specialize in providing top-tier BIM manpower resourcing
              solutions for small, medium, and large-scale projects. Our team of highly skilled and
              experienced BIM professionals is equipped to support your projects with precision and
              efficiency, ensuring successful outcomes at every stage.
            </p>
            <p>Why Choose Our BIM Staffing Services?</p>
            <ul className="list-none">
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

        <h2 className="title text-2xl md:text-4xl font-bold leading-tight">BIM Training</h2>
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] items-center gap-8 sm:gap-12 mt-6 mb-12">
          <div className="flex flex-col gap-4 mt-4">
            <p>Design Drafter: Empowering Professionals with BIM Expertise</p>
            <p>
              At Design Drafter, we are dedicated to advancing careers and enhancing skills through
              our comprehensive BIM Training Program. Designed for architects, engineers,
              contractors, and aspiring professionals, our training program equips participants with
              the knowledge and hands-on experience needed to excel in the evolving field of
              Building Information Modelling (BIM).
            </p>
            <p>Why Choose Our BIM Training Program?</p>
            <ul className="list-none">
              {[
                "Industry-Relevant Curriculum: Our program is tailored to address real-world challenges, covering key BIM concepts, workflows, and tools.",
                "Expert Trainers: Learn from industry veterans with years of experience in BIM implementation and project execution.",
                "Practical, Hands-On Approach: Gain in-depth exposure to leading BIM software through live projects and interactive sessions.",
                "Flexible Learning Options: We offer both online and on-site training, allowing participants to learn at their own pace.",
              ].map((item, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <span className="text-lg font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p>Key Program Highlights</p>
            <ul className="list-none">
              {[
                "BIM Fundamentals: Understand the core principles and processes behind Building Information Modeling.",
                "Software Training: Master industry-standard tools like Revit, Navisworks, AutoCAD, ArchiCAD, and more.",
                "Advanced BIM Techniques: Dive into clash detection, 4D and 5D BIM, and facility management integration.",
                "Project-Based Learning: Work on simulated projects to gain practical experience and problem-solving skills.",
                "Certification: Receive an industry-recognized certification upon completion to validate your BIM expertise.",
              ].map((item, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <span className="text-lg font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="assets/image15.png"
              alt="BIM Training"
              className="w-full max-w-md mx-auto rounded-md"
            />
          </div>
        </div>

        <h2 className="title text-2xl md:text-4xl inline font-bold leading-tight">E-Learning</h2>
        <div className="flex flex-col gap-4 mt-4 mb-12">
          <p>
            Design Drafter: Learn BIM Anytime, Anywhere with Our E-Learning Platform <br /> Discover
            the power of Building Information Modeling (BIM) with [Your Company Name]’s cutting-edge
            BIM E-Learning platform. Designed for professionals, students, and enthusiasts in the
            Architecture, Engineering, and Construction (AEC) industry, our e-learning program
            offers the flexibility to master BIM concepts and tools from the comfort of your home or
            office.
          </p>
          <p>Why Choose Our BIM E-Learning Program?</p>
          <ul>
            {[
              "Comprehensive Curriculum: Explore a wide range of topics, from BIM fundamentals to advanced workflows, tailored to meet the needs of beginners and seasoned professionals.",
              "Self-Paced Learning: Learn at your own pace with access to on-demand courses and resources available 24/7.",
              "Interactive Modules: Engage in immersive learning experiences through videos, quizzes, and practical exercises.",
              "Expert Guidance: Gain insights from industry experts and access mentoring sessions for personalized support.",
              "Certification: Earn a recognized certification to showcase your BIM expertise and enhance your career prospects.",
            ].map((item: string, index: number) => (
              <li key={index} className="flex gap-6 items-start">
                <span className="text-lg font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p>What You'll Learn</p>
          <ul>
            {[
              "BIM Fundamentals: Understand the basics of BIM, its benefits, and applications in the AEC industry.",
              "Software Proficiency: Gain hands-on experience with tools like Revit, Navisworks, AutoCAD, and more.",
              "Advanced Techniques: Dive into clash detection, 4D and 5D BIM, cost estimation, and facility management.",
              "Real-World Applications: Learn how to apply BIM in real projects through practical case studies.",
            ].map((item: string, index: number) => (
              <li key={index} className="flex gap-6 items-start">
                <span className="text-lg font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p>Key Features of Our E-Learning Platform</p>
          <ul>
            {[
              "User-Friendly Interface: Easy-to-navigate platform for seamless learning.",
              "Progress Tracking: Monitor your progress and achievements with detailed analytics.",
              "Downloadable Resources: Access course materials, templates, and guides to supplement your learning.",
              "Global Community: Join a network of learners and professionals to share knowledge and experiences.",
            ].map((item: string, index: number) => (
              <li key={index} className="flex gap-6 items-start">
                <span className="text-lg font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p>Who Should Enroll?</p>
          <ul>
            {[
              "AEC professionals seeking to upskill",
              "Students and graduates aspiring to enter the BIM field",
              "Organizations looking to train their teams in BIM workflows",
            ].map((item: string, index: number) => (
              <li key={index} className="flex gap-6 items-start">
                <span className="text-lg font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p>Take the First Step Towards BIM Mastery</p>
          <p>
            With Design Drafter’s BIM E-Learning program, you can stay ahead of industry trends and
            advance your career with confidence. Enroll today and start your journey towards
            becoming a BIM expert.
          </p>
          <p>
            Sign Up Now!  <br />
            Email: [your-email@example.com] 
            <br />
            Phone: [your-phone-number] 
            <br />
            Website: [Your Website URL]
          </p>
          <p>Design Drafter – Transforming education, empowering the future.</p>
        </div>

        <h2 className="title text-2xl md:text-4xl font-bold leading-tight text-center md:text-left">
          CAD to Revit Conversion
        </h2>
        <div className="flex flex-col gap-4 mt-4 mb-12">
          <p className="text-center md:text-left">
            2D to 3D Conversion Services: Transforming Legacy Drawings into Intelligent BIM Models
          </p>
          <p className="text-center md:text-left">
            At Design Drafter, we specialize in converting traditional 2D drawings into dynamic,
            information-rich 3D Building Information Modeling (BIM) models. This transformation not
            only modernizes legacy designs but also enhances project visualization, coordination,
            and efficiency, enabling stakeholders to make better-informed decisions throughout the
            project lifecycle.
          </p>
          <p className="text-center md:text-left">Why 2D to 3D Conversion is Essential</p>
          <p className="text-center md:text-left">
            Legacy 2D drawings, while historically vital, have limitations in terms of detail,
            collaboration, and adaptability to modern workflows.{" "}
          </p>
          <p className="text-center md:text-left">
            Converting these drawings into 3D BIM models provides:
          </p>
          <ul className="list-disc pl-6 space-y-2 md:space-y-4">
            {[
              "Enhanced Visualization: Gain a comprehensive understanding of the design with realistic, interactive 3D representations.",
              "Improved Accuracy: Minimize errors with detailed, to-scale 3D models that capture every aspect of the original design.",
              "Seamless Collaboration: Facilitate better communication among teams by using a unified, digital 3D model.",
              "Future-Ready Designs: Integrate modern tools and techniques, making the design adaptable for future upgrades and analysis.",
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="text-center md:text-left">What You'll Learn</p>
          <ul className="list-disc pl-6 space-y-2 md:space-y-4">
            {[
              "BIM Fundamentals: Understand the basics of BIM, its benefits, and applications in the AEC industry.",
              "Software Proficiency: Gain hands-on experience with tools like Revit, Navisworks, AutoCAD, and more.",
              "Advanced Techniques: Dive into clash detection, 4D and 5D BIM, cost estimation, and facility management.",
              "Real-World Applications: Learn how to apply BIM in real projects through practical case studies.",
            ].map((item, index) => (
              <li key={index} className="text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-center md:text-left">Our 2D to 3D Conversion Process</p>
          <ul className="list-decimal pl-6 space-y-2 md:space-y-4">
            {[
              "Understanding Requirements: We start by gathering your existing 2D drawings, CAD files, or paper-based plans, along with project-specific details and requirements.",
              "Data Preparation: Our experts assess the quality and completeness of the 2D drawings to identify any gaps and inconsistencies that need to be addressed during conversion.",
              "3D Modeling: Using industry-leading BIM software such as Revit, AutoCAD, ArchiCAD, and Navisworks, we convert your 2D designs into detailed 3D models. These models are enriched with data and attributes relevant to the project's architecture, structure, and MEP systems.",
              "Quality Assurance: Each 3D model undergoes a rigorous quality check to ensure accuracy, compliance with industry standards, and alignment with the original design intent.",
              "Delivery and Integration: The final BIM model is delivered in the desired format, ready for integration into your workflows, whether for visualization, analysis, or construction.",
            ].map((item, index) => (
              <li key={index} className="text-sm md:text-base">
                {item.split(":").map((line, idx) => (
                  <>
                    {`${line}:`}
                    {idx < item.split(":").length - 1 && <br />}
                  </>
                ))}
              </li>
            ))}
          </ul>

          <p className="text-center md:text-left">Applications of 2D to 3D BIM Models</p>
          <ul className="list-disc pl-6 space-y-2 md:space-y-4">
            {[
              "Design Validation: Ensure that the original design intent is accurately represented.",
              "Clash Detection and Coordination: Identify and resolve conflicts across disciplines before construction.",
              "Simulation and Analysis: Perform energy analysis, structural simulations, and other advanced assessments.",
              "Construction Planning: Create detailed construction documentation and schedules.",
              "Facility Management: Use the model as a digital twin for ongoing maintenance and management.",
            ].map((item, index) => (
              <li key={index} className="text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-center md:text-left">Benefits of Choosing [Your Company Name]</p>
          <ul className="list-disc pl-6 space-y-2 md:space-y-4">
            {[
              "Expertise in Conversion: Our team brings years of experience in handling diverse 2D to 3D conversion projects across multiple industries.",
              "Precision and Quality: We prioritize accuracy and detail in every model to ensure your project’s success.",
              "Use of Advanced Tools: We leverage the latest BIM technologies to deliver cutting-edge solutions.",
              "Cost-Effective Services: Save time and resources by entrusting your 2D to 3D conversion needs to our skilled professionals.",
              "Tailored Solutions: We customize our approach to align with your unique project requirements and goals.",
            ].map((item, index) => (
              <li key={index} className="text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-center md:text-left">Transform Your Legacy Drawings Today</p>
          <p className="text-center md:text-left">
            Modernize your workflows and bring your designs to life with [Your Company Name]’s 2D to
            3D conversion services. Let us help you unlock the full potential of BIM technology for
            your projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 md:gap-8 mt-8">
            <div>
              <p>
                Contact Us Now 
                <br />
                Email: [your-email@example.com] 
                <br />
                Phone: [your-phone-number] 
                <br />
                Website: [Your Website URL]
              </p>
              <p>[Your Company Name] – Elevating your designs, empowering your projects.</p>
            </div>
            <div>
              <img src="assets/image16.png" alt="Contact" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <h2 className="title text-2xl md:text-4xl font-bold leading-tight">Revit Plugins</h2>
        <div className="flex flex-col gap-4 mt-4 mb-12">
          <p>Revit Plugins: Elevating Your BIM Experience</p>
          <p>
            At Design Drafter, we provide a suite of Autodesk Revit productivity tools designed to
            enhance your BIM workflows and streamline project execution. These powerful plugins are
            tailored to address specific challenges in data management, model quality, and efficient
            documentation, enabling you to achieve superior results with reduced effort.
          </p>
          <p>Key Features of Our Revit Plugins</p>
          <ul className="list-decimal pl-6 space-y-2 md:space-y-4">
            {[
              "Data Management: Simplify data handling with tools that allow you to organize, manage, and extract information seamlessly. Gain better control over project data for improved decision-making and efficiency.",
              "Filtering: Easily locate, isolate, and work with specific elements in your model using advanced filtering options. This feature ensures a cleaner workspace and faster navigation within complex projects.",
              "Model Checking: Maintain model accuracy and compliance with automated model-checking tools that identify inconsistencies, missing elements, and other potential issues before they escalate.",
              "Drawing Production: Accelerate the creation of detailed drawings and documentation with tools that automate repetitive tasks, ensuring precision and uniformity across all deliverables.",
              "Point Clouds: Work effortlessly with point cloud data by integrating and manipulating scanned 3D data directly in Revit. This enables accurate as-built modeling and enhances renovation or retrofitting projects.",
            ].map((item, index) => (
              <li key={index} className="text-sm md:text-base">
                {item.split(":").map((line, idx) => (
                  <>
                    {`${line}:`}
                    {idx < item.split(":").length - 1 && <br />}
                  </>
                ))}
              </li>
            ))}
          </ul>
          <p>Why Use Our Revit Plugins?</p>
          <ul className="list-disc pl-6 space-y-2 md:space-y-4">
            {[
              "Boost Productivity: Automate tedious tasks and free up time for design and innovation.",
              "Enhance Accuracy: Reduce errors and ensure consistency in every phase of the project.",
              "Simplify Workflows: Tackle complex processes with user-friendly tools that integrate seamlessly with Revit.",
              "Cost-Efficient Solutions: Achieve higher quality output while minimizing project time and cost.",
            ].map((item, index) => (
              <li key={index} className="text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>
          <p>Revolutionize Your Revit Experience Today</p>
          <p>
            Elevate your BIM capabilities with [Your Company Name]’s Revit plugins. Whether you’re
            looking to streamline your workflows, improve data accuracy, or create detailed
            documentation with ease, our tools are the perfect solution to take your projects to the
            next level.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8">
            <div className="flex flex-col gap-4">
              <p>
                Contact Us Now 
                <br />
                Email: [your-email@example.com] 
                <br />
                Phone: [your-phone-number] 
                <br />
                Website: [Your Website URL]
              </p>
              <p>[Your Company Name] – Elevating your designs, empowering your projects.</p>
            </div>
            <div>
              <img src="assets/image17.png" alt="Contact" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
};

export default BIMServices;

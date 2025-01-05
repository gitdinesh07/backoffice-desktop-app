import CustomLayout from "../../layout";

const TrainingPage = () => {
  return (
    <CustomLayout title="BIM Training - Design Draft">
      <div className="w-full px-4 md:px-20 ">
      <h2 className="title text-2xl md:text-4xl font-bold leading-tight">BIM Training</h2>
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] items-center gap-8 sm:gap-12 mt-6 mb-12">
          <div className="flex flex-col gap-4 mt-4">
            <p>Design Drafter: Empowering Professionals with BIM Expertise</p>
            <p className="opacity-60">
              At Design Drafter, we are dedicated to advancing careers and enhancing skills through
              our comprehensive BIM Training Program. Designed for architects, engineers,
              contractors, and aspiring professionals, our training program equips participants with
              the knowledge and hands-on experience needed to excel in the evolving field of
              Building Information Modelling (BIM).
            </p>
            <p>Why Choose Our BIM Training Program?</p>
            <ul className="list-none opacity-60">
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
            <ul className="list-none opacity-60">
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
              src="../assets/image15.png"
              alt="BIM Training"
              className="w-full max-w-md mx-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </CustomLayout>
  );
};

export default TrainingPage;

import CustomLayout from "../../layout";

const ELearingPage = () => {
  return (
    <CustomLayout title="BIM E-Learning - Design Draft">
      <div className="w-full px-4 md:px-20 ">
        <h2 className="title text-2xl md:text-4xl inline font-bold leading-tight">E-Learning</h2>
        <div className="flex flex-col gap-4 mt-4 mb-12">
          <p >
            Design Drafter: Learn BIM Anytime, Anywhere with Our E-Learning Platform <br /> Discover
            the power of Building Information Modeling (BIM) with [Your Company Name]’s cutting-edge
            BIM E-Learning platform. Designed for professionals, students, and enthusiasts in the
            Architecture, Engineering, and Construction (AEC) industry, our e-learning program
            offers the flexibility to master BIM concepts and tools from the comfort of your home or
            office.
          </p>
          <p>Why Choose Our BIM E-Learning Program?</p>
          <ul className="opacity-60" >
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
          <ul className="opacity-60" >
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
          <ul className="opacity-60" >
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
          <ul className="opacity-60" >
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
          <p className="opacity-60" >
            With Design Drafter’s BIM E-Learning program, you can stay ahead of industry trends and
            advance your career with confidence. Enroll today and start your journey towards
            becoming a BIM expert.
          </p>
          <p className="opacity-60" >
            Sign Up Now!  <br />
            Email: [your-email@example.com] 
            <br />
            Phone: [your-phone-number] 
            <br />
            Website: [Your Website URL]
          </p>
          <p>Design Drafter – Transforming education, empowering the future.</p>
        </div>
      </div>
    </CustomLayout>
  );
};

export default ELearingPage;
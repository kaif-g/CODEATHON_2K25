import { useEffect, useState } from "react";
import img from "../assests/images/codeathon.png";
import { TimelineLayout } from "../components/ui/timeline-layout";
import {
  FaCalendarAlt,
  FaUser,
  FaUniversity,
  FaLaptopCode,
  FaUserGraduate,
  FaLightbulb,
  FaTrophy,
  FaChalkboardTeacher,
  FaBuilding,
} from "react-icons/fa";

const Hackathon = () => {
  const [hasRegistered, setHasRegistered] = useState(
    () => localStorage.getItem("HackathonRegistered") === "true"
  );
  const [showPopup, setShowPopup] = useState(!hasRegistered);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    localStorage.setItem("HackathonRegistered", String(hasRegistered));
    setShowPopup(!hasRegistered);
  }, [hasRegistered]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date("2025-03-25T12:00:00+00:00") - +new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  const handleRegisterClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdmhETKuZvrNxMTJyymX1KKXdEj5Bub7k1QzhoNxeq8IpqkJw/viewform?usp=sharing",
      "_blank"
    );
    setHasRegistered(true);
  };

  const handleClosePopup = () => {
    setHasRegistered(true);
  };

  interface FAQProps {
    [key: string]: string | null;
  }

  const [openFAQ, setOpenFAQ] = useState<keyof FAQProps | null>(null);

  const toggleFAQ = (faq: keyof FAQProps) => {
    setOpenFAQ(openFAQ === faq ? null : faq);
  };

  return (
    <div className="min-h-screen mb-8 text-white pt-24 lg:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section>
          <img
            src={img}
            alt="Hackathon Banner"
            className="w-full rounded-lg shadow-lg mb-8 transition-transform duration-500 hover:scale-105"
          />
          <div className="text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">
              AITS CODEATHON 2K25
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Join us for an exciting Codeathon in Annamacharya Tirupati Campus!
            </p>

            <div className="flex justify-center gap-2 mt-6 flex-wrap">
              {Object.keys(timeLeft).map((unit, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-2 rounded-lg shadow-lg text-center w-20 flex-shrink-0"
                >
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                    {timeLeft[unit as keyof typeof timeLeft]}
                  </p>
                  <p className="text-xs uppercase text-gray-400">{unit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 motion-up-blur">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">
                Codeathon Details
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Everything you need to know about Codeathon 2K25
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Date & Venue",
                  description: "25th & 26th March",
                  subDescription: "AITS, Tirupati",
                  icon: FaCalendarAlt,
                },
                {
                  title: "Eligibility",
                  description:
                    "Any undergraduate or postgraduate student, including BE, BTech, M.Tech and MCA",
                  icon: FaUserGraduate,
                },
                {
                  title: "Team Size",
                  description: "Round 1 individual, Round 2 Max of 5 Members",
                  icon: FaUser,
                },
                {
                  title: "Intra-College Teams",
                  description: "All AITS Students Accors all Depts ",
                  icon: FaUniversity,
                },
                {
                  title: "Tech",
                  description:
                    "c, Python, Java, SQL, C++ more are allowed",
                  icon: FaLaptopCode,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm motion-translate-y-in-[20%] h-48 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
                >
                  <div>
                    <div className="text-3xl mb-2">
                      <item.icon />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    {item.subDescription && (
                      <p className="text-muted-foreground">
                        {item.subDescription}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <button
                className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg motion-translate-y-in-[20%]"
                onClick={() =>
                  window.open(
                   "https://docs.google.com/forms/d/e/1FAIpQLSdmhETKuZvrNxMTJyymX1KKXdEj5Bub7k1QzhoNxeq8IpqkJw/viewform?usp=sharing",
                   "_blank"
                  )
                }
              >
                Register Now
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 motion-up-blur">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">
              Codeathon Stages
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Explore the different stages of the codeathon.
              </p>
            </div>

            <TimelineLayout />
          </div>
        </section>
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 motion-up-blur">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">
                Why to Participate?
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Discover the benefits of joining Codeathon 2K25.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Hands-on Experience",
                  description:
                    "Engage in practical, real-world problem-solving activities.",
                  icon: FaLaptopCode,
                },
                {
                  title: "Innovative Projects",
                  description:
                    "Develop and create groundbreaking solutions to complex challenges.",
                  icon: FaLightbulb,
                },
                {
                  title: "Expert Guidance",
                  description:
                    "Receive mentorship and advice from industry leaders and professionals.",
                  icon: FaChalkboardTeacher,
                },
                {
                  title: "Recruitment Opportunities",
                  description:
                    "Showcase your skills and get noticed by top companies for potential job offers.",
                  icon: FaBuilding,
                },
                {
                  title: "Exciting Prizes",
                  description:
                    "Compete for cash prizes, internships, and other exciting rewards.",
                  icon: FaTrophy,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm motion-translate-y-in-[20%] h-48 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
                >
                  <div>
                    <div className="text-3xl mb-2">
                      <item.icon />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 motion-up-blur">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">
          Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
          Find answers to commonly asked questions about the codeathon 2K25
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {/* FAQ Item 1 */}
              <div className="faq-item">
          <button
            className="faq-question flex justify-between items-center w-full text-left"
            onClick={() => toggleFAQ("who")}
          >
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
              Who is eligible to participate in the Codeathon 2025?
            </h3>
            <span className="faq-icon">
              {openFAQ === "who" ? "\u25B4" : "\u25BE"}
            </span>
          </button>
          {openFAQ === "who" && (
            <div
              id="who-answer"
              className="faq-answer text-muted-foreground mt-2 text-black dark:text-white"
            >
              The Codeathon 2025 is open to all undergraduate and postgraduate
              students from all AITS across India. This
              includes students pursuing BE, BTech, M.Tech, MCA, and other
              relevant courses.
            </div>
          )}
              </div>

              {/* FAQ Item 2 */}
              <div className="faq-item">
          <button
            className="faq-question flex justify-between items-center w-full text-left"
            onClick={() => toggleFAQ("fee")}
          >
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
              What is the registration fee structure?
            </h3>
            <span className="faq-icon">
              {openFAQ === "fee" ? "\u25B4" : "\u25BE"}
            </span>
          </button>
          {openFAQ === "fee" && (
            <div
              id="fee-answer"
              className="faq-answer text-muted-foreground mt-2 text-black dark:text-white"
            >
              The registration fee is ₹50 per participant. This fee
              covers event participation
            </div>
          )}
              </div>

             

              {/* FAQ Item 4 */}
              <div className="faq-item">
          <button
            className="faq-question flex justify-between items-center w-full text-left"
            onClick={() => toggleFAQ("tech")}
          >
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
              Which technologies and programming languages can we use?
            </h3>
            <span className="faq-icon">
              {openFAQ === "tech" ? "\u25B4" : "\u25BE"}
            </span>
          </button>
          {openFAQ === "tech" && (
            <div
              id="tech-answer"
              className="faq-answer text-muted-foreground mt-2 text-black dark:text-white"
            >
              You have complete freedom to choos any programming language such as
              Python, Java, JavaScript, c, c++ etc..,
            </div>
          )}
              </div>

          {/* FAQ Item 5 */}
          <div className="faq-item">
          <button
            className="faq-question flex justify-between items-center w-full text-left"
            onClick={() => toggleFAQ("guidance")}
          >
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
            What kind of guidance support will be available?
            </h3>
            <span className="faq-icon">
            {openFAQ === "guidance" ? "\u25B4" : "\u25BE"}
            </span>
          </button>
          {openFAQ === "guidance" && (
            <div
            id="guidance-answer"
            className="faq-answer text-muted-foreground mt-2 text-black dark:text-white"
            >
            Student coordinators and staff members will be available to
            guide you throughout the codeathon. They will assist you with
            understanding the problem statements, provide necessary support,
            Regular check-ins will be conducted to ensure teams have the
            guidance they need.
            </div>
          )}
          </div>
            </div>
          </div>
        </section>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-900 p-6 rounded-lg shadow-xl text-center">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
             Codeathon Registration
            </h2>
            <p className="text-gray-300 mb-4">
              Have you registered for the Codeathon?
            </p>
            <button
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg mr-2"
              onClick={handleRegisterClick}
            >
              Register Now
            </button>
            <button
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
              onClick={handleClosePopup}
            >
              I have registered
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hackathon;

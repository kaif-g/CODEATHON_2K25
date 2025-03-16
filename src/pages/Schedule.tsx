import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import {
    FaStar,
    FaUsers,
    FaCode,
    FaCoffee,
    FaLightbulb,
    FaAward,
  } from "react-icons/fa";

  const Schedule = () => {
    return (
    <div style={{ marginTop: "100px" }}>
         <h1
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 bg-clip-text text-transparent font-bold sm:text-lg lg:text-xl text-center"
                // style={{
                //     textAlign: "center",
                //     color: "#f5f5f5",
                //     marginBottom: "30px",
                //     fontSize: "2em",
                //     fontWeight: "bold",
                // }}
            >
                Our Schedule
            </h1>
             <p
                  className="dark:text-[#f5f5f5] text-black"
                    style={{
                      textAlign: "center",
                      marginBottom: "30px",
                      fontSize: "0.9em",
                      fontStyle: "italic",
                    }}
                  >
                    You Observe two days schedule here
                  </p>

                  
      <VerticalTimeline>
        {/* Day 1: March 25, 2025 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date="Day - 1"
          iconStyle={{ background: "rgb(239, 185, 9)", color: "#fff" }}
        >
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date="09:20 AM - 09:50 AM"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaUsers />}
          contentStyle={{ background: "#222", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #222" }}
        >
          <h3 className="vertical-timeline-element-title">
         Participants Arrival
          </h3>
          <p>
        Check attendance and verification
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date="09:50 AM - 10:20 AM"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaStar />}
          contentStyle={{ background: "#222", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #222" }}
        >
          <h3 className="vertical-timeline-element-title">Inauguration Ceremony</h3>
          <p>
        Start with Gayatri Mantra. Welcome speech by the principal and HOD.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date="10:20 AM - 10:30 AM"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaLightbulb />}
          contentStyle={{ background: "#222", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #222" }}
        >
          <h3 className="vertical-timeline-element-title">
        Pre-Codeathon Briefing
          </h3>
          <p>
        Explanation of rules, and judging criteria, Scoring system, etc..
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date="10:30 AM - 10:40 AM"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentStyle={{ background: "#222", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #222" }}
        >
          <h3 className="vertical-timeline-element-title"> Deatils of Exam venues</h3>
          <p>Setting for exam venues before starting.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date="10:40 AM - 12:40 PM"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCode />}
          contentStyle={{ background: "#222", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #222" }}
        >
          <h3 className="vertical-timeline-element-title">
        Codeathon Round 1
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date="12:40 PM "
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCoffee />}
          contentStyle={{ background: "#222", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #222" }}
        >
          <h3 className="vertical-timeline-element-title">Lunch Break</h3>
          
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date="03:00 PM"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentStyle={{ background: "#222", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #222" }}
        >
          <h3 className="vertical-timeline-element-title">Results Announcement</h3>
          <p>
 
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date="05:00 PM - 06:00 PM"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaStar />}
          contentStyle={{ background: "#222", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #222" }}
        >
          <h3 className="vertical-timeline-element-title">
          Team Schedule Announcement
          </h3>
          <p>Team Schedule is based on the Scoring system</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date="07:00 PM - 11:59 PM"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCode />}
          contentStyle={{ background: "#222", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #222" }}
        >
          <h3 className="vertical-timeline-element-title">Practice Tests</h3>
          <p>
            The Shortlisted Members will get Practice Tests links and finish all tests with in time limit.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date="Day - 2 "
          iconStyle={{ background: "rgb(239, 185, 9)", color: "#fff" }}
          
        >
          
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date="09:30 PM - 10:30 AM"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaUsers />}
          contentStyle={{ background: "#222", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #222" }}
        >
          <h3 className="vertical-timeline-element-title">
          Teams Gathering 
          </h3>
          <p>Explanation of rules, and judging criteria, Scoring system, etc..</p>
        </VerticalTimelineElement>

       

        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date="10:30 AM - 01:00 PM"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCode />}
          contentStyle={{ background: "#222", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #222" }}
        >
          <h3 className="vertical-timeline-element-title"> Codeathon Round 2</h3>
          <p>Teams work on the given Problem statements.</p>
        </VerticalTimelineElement>

       
        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date="2:00 PM"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentStyle={{ background: "#222", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #222" }}
        >
          <h3 className="vertical-timeline-element-title">winner Announcement
          </h3>
          <p></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date="2:10 PM"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaAward />}
          contentStyle={{ background: "#222", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #222" }}
        >
          <h3 className="vertical-timeline-element-title">Award Ceremony</h3>
          <p>Prize distribution and recognition for top teams.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date="02:50 PM"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentStyle={{ background: "#222", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #222" }}
        >
          <h3 className="vertical-timeline-element-title">Closing Ceremony</h3>
          <p>Vote of thanks to judges, and volunteers.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    );
  };

  export default Schedule;
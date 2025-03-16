import {
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
  TimelineHeader,
} from "./timeline";

import { TimelineItemType } from "../../constants/index.ts";

const timelineData: TimelineItemType[] = [
    {
        id: 1,
        title: "Round 1: CodeQuest      (Elimination Round)",
        description:
            "Participants will compete individually in a coding-based challenge consisting of multiple sections, including MCQs, Code Jumbling, Debugging, Output Prediction, Algorithm Building, and more. This round will test logical thinking, problem-solving, and coding accuracy. The top-performing participants will qualify for the final round.",
        time: "March 25, 2025 - 10:00 AM",
    },
    {
        id: 2,
        title: "Round 2: CodeFusion (Team-Based Problem Solving)",
        description:
            "Qualified participants will be grouped into teams of 4-5 members based on their Round 1 scores. Each team will solve four real-world problem statements within a given time limit, focusing on test cases, algorithm efficiency, and problem-solving techniques. Teams must present structured solutions that showcase their coding expertise and logical reasoning.",
        time: "March 26, 2025 - 10:00 AM",
    },
    
];

export const TimelineLayout = () => {
  return (
    <Timeline className="mt-8">
      {timelineData.map((item) => (
        <TimelineItem key={item.id}>
          <TimelineHeader>
            <TimelineTime>{item.time}</TimelineTime>
            <TimelineTitle>{item.title}</TimelineTitle>
          </TimelineHeader>
          {item.description && (
            <TimelineDescription>{item.description}</TimelineDescription>
          )}
        </TimelineItem>
      ))}
    </Timeline>
  );
};

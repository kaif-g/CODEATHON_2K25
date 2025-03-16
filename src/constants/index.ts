
import {
  FaHome,
  FaCalendarAlt,
  FaInfoCircle,
} from "react-icons/fa";

export const MLSCmailId = `replace with siddharth-mlsc mail id`;


export const HackFestNavItems = [
  { label: "Home", path: "/", icon: FaHome },
  { label: "Schedule", path: "/Schedule", icon: FaCalendarAlt },
  { label: "Deatils", path: "/Deatils", icon: FaInfoCircle },
  
];


export type TimelineItemType = {
  id: number;
  title: string;
  description?: string;
  time: string;
};
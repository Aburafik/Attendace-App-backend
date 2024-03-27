import {
  NoteIcon,
  ChecklistIcon,
  PeopleIcon,
} from "@primer/octicons-react";

const sidebarItems = [
  {
    label: "Attendance",
    icon: <NoteIcon className="mr-6 text-zinc-600" size={30} />,
    route: "attendance",
  },
  {
    label: "Task",
    icon: <NoteIcon className="mr-6 text-zinc-600" size={30} />,
    route: "task",
  },
  {
    label: "Reports",
    icon: <ChecklistIcon className="mr-6 text-zinc-600" size={30} />,
    route: "report",
  },
  {
    label: "Employees",
    icon: <PeopleIcon className="mr-6 text-zinc-600" size={30} />,
    route: "employee",
  },
  {
    label: "Leave Management",
    icon: <ChecklistIcon className="mr-6 text-zinc-600" size={30} />,
    route: "leave",
  },
];

export default sidebarItems;

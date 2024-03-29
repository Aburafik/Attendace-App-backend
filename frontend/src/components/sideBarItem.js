import {
  NoteIcon,
  StackIcon,
  RepoForkedIcon,
  ChecklistIcon,
  GraphIcon,
  PeopleIcon,
  CalendarIcon,
  BroadcastIcon,
  PulseIcon,
  SidebarCollapseIcon,
} from "@primer/octicons-react";

const sidebarItems = [
  {
    label: <p className="text-lg">Attendance</p>,
    icon: <PulseIcon className="mr-6 text-zinc-600" size={24} />,
    route: "attendance",
  },
  {
    label: <p className="text-lg">Task</p>,
    icon: <NoteIcon className="mr-6 text-zinc-600" size={24} />,
    route: "task",
  },
  {
    label: <p className="text-lg">Reports</p>,
    icon: <ChecklistIcon className="mr-6 text-zinc-600" size={24} />,
    route: "report",
  },
  {
    label: <p className="text-lg">Employees</p>,
    icon: <PeopleIcon className="mr-6 text-zinc-600" size={24} />,
    route: "employee",
  },
  {
    label: <p className="text-lg">Leave Management</p>,
    icon: <SidebarCollapseIcon className="mr-6 text-zinc-600" size={24} />,
    route: "leave",
  },
  {
    label: <p className="text-lg">Payment</p>,
    icon: <StackIcon size={24} className="mr-6 text-zinc-600" />,
    route: "leave",
  },
  {
    label: <p className="text-lg">Performance</p>,
    icon: <GraphIcon className="mr-6 text-zinc-600" size={24} />,
    route: "leave",
  },
  {
    label: <p className="text-lg">Lead</p>,
    icon: <BroadcastIcon className="mr-6 text-zinc-600" size={24} />,
    route: "leave",
  },
  {
    label: <p className="text-lg">Project</p>,
    icon: <RepoForkedIcon className="mr-6 text-zinc-600" size={24} />,
    route: "leave",
  },
  {
    label: <p className="text-lg">Event</p>,
    icon: <CalendarIcon className="mr-6 text-zinc-600" size={24} />,
    route: "leave",
  },
];

export default sidebarItems;

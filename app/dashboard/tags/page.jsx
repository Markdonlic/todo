import Folder from "@/components/dialogs/Folder";
import AddTask from "@/components/layouts/AddTask";
import PageMenu from "@/components/layouts/PageMenu";
import TaskNotification from "@/components/layouts/TaskNotification";
import { CiFolderOn } from "react-icons/ci";

export default function page() {
  const taskItems = [
    {
      title: "notification",
      tag: "Tasks",
      date: "2023 June, 31",
      status: "Active",
      task: false,
      today: true,
      important: true,
      planned: true,
      delete: true,
    },
    {
      title: "notification",
      tag: "Today",
      date: "2023 June, 31",
      status: "Active",
      task: true,
      today: false,
      important: true,
      planned: true,
      delete: true,
    },
    {
      title: "notification",
      tag: "Important",
      date: "2023 June, 31",
      status: "Active",
      task: true,
      today: true,
      important: false,
      planned: true,
      delete: true,
    },
    {
      title: "notification",
      tag: "Planned",
      date: "2023 June, 31",
      status: "Active",
      task: true,
      today: true,
      important: true,
      planned: false,
      delete: true,
    },
    {
      title: "notification",
      tag: "Deleted",
      date: "2023 June, 31",
      status: "Active",
      task: true,
      today: true,
      important: true,
      planned: true,
      delete: false,
    },
  ];
  return (
    <div className="w-full mx-auto font-mono">
      <div className="flex w-full pt-2 flex-col gap-4">
        <PageMenu title="Tags" icon={<CiFolderOn />} />
        <Folder name="tags" data={taskItems[0]} />
        <Folder name="today" data={taskItems[1]} />
        <Folder name="important" data={taskItems[2]} />
        <Folder name="planned" data={taskItems[3]} />
        <Folder name="completed" data={taskItems[4]} />
        <Folder name="deleted" data={taskItems[5]} />
      </div>
    </div>
  );
}

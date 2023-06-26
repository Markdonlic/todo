import Folder from "@/components/dialogs/Folder";
import AddTask from "@/components/layouts/AddTask";
import PageMenu from "@/components/layouts/PageMenu";
import TaskNotification from "@/components/layouts/TaskNotification";
import { AiOutlineStar } from "react-icons/ai";

export default function page() {
  return (
    <div className="w-full mx-auto font-mono">
      <div className="flex w-full flex-col gap-4 pt-2">
        <PageMenu title="important" icon={<AiOutlineStar />} sort />
        <AddTask />
        <TaskNotification important />
      </div>
    </div>
  );
}

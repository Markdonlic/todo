import Folder from "@/components/dialogs/Folder";
import AddTask from "@/components/layouts/AddTask";
import PageMenu from "@/components/layouts/PageMenu";
import TaskNotification from "@/components/layouts/TaskNotification";
import { CiHome } from "react-icons/ci";

export default function page() {
  return (
    <div className="w-full mx-auto bg-amber-700">
        <PageMenu title="tasks" icon={<CiHome />} sort group />
      <div className="flex w-full flex-col gap-4 px-4 pt-2">
        <AddTask />
        <TaskNotification />
        <Folder name="uncategorised" />
        <Folder name="completed" />
      </div>
    </div>
  );
}

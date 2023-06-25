import Folder from "@/components/dialogs/Folder";
import AddTask from "@/components/layouts/AddTask";
import PageMenu from "@/components/layouts/PageMenu";
import TaskNotification from "@/components/layouts/TaskNotification";
import { CiBrightnessUp } from "react-icons/ci";

export default function page() {
  return (
    <div className="w-full mx-auto">
        <PageMenu title="my day" icon={<CiBrightnessUp />} sort group suggestion />
      <div className="px-4 pt-2 flex w-full flex-col gap-4">
        <AddTask />
        <TaskNotification />
        <Folder name="uncategorised" />
        <Folder name="completed" />
      </div>
    </div>
  );
}

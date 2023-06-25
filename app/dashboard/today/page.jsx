import Folder from "@/components/dialogs/Folder";
import AddTask from "@/components/layouts/AddTask";
import PageMenu from "@/components/layouts/PageMenu";
import TaskNotification from "@/components/layouts/TaskNotification";
import { CiBrightnessUp } from "react-icons/ci";

export default function page() {
  return (
    <div className="w-full md:max-w-7xl mx-auto">
      <div className="flex w-full flex-col gap-4">
        <PageMenu title="my day" icon={<CiBrightnessUp />} sort group suggestion />
        <AddTask />
        <TaskNotification />
        <Folder name="uncategorised" />
        <Folder name="completed" />
      </div>
    </div>
  );
}

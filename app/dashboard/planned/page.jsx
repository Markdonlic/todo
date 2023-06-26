import Folder from "@/components/dialogs/Folder";
import AddTask from "@/components/layouts/AddTask";
import PageMenu from "@/components/layouts/PageMenu";
import TaskNotification from "@/components/layouts/TaskNotification";
import { CiViewList } from "react-icons/ci";

export default function page() {
  return (
    <div className="w-full mx-auto font-mono">
        <PageMenu title="Planned" icon={<CiViewList />} />
      <div className="px-4 pt-2 flex w-full flex-col gap-4">
        <AddTask />
        <Folder name="Today" />
      </div>
    </div>
  );
}

import PageMenu from "@/components/layouts/PageMenu";
import TaskNotification from "@/components/layouts/TaskNotification";
import { AiOutlineDelete } from "react-icons/ai";

const page = () => {
  return (
    <div className="w-full mx-auto font-mono">
      <div className="flex w-full flex-col gap-4 pt-2">
        <PageMenu title="Trash" icon={<AiOutlineDelete />} sort />
        <TaskNotification important />
      </div>
    </div>
  );
};

export default page;

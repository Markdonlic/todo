import PageMenu from "@/components/layouts/PageMenu";
import { AiOutlineDelete } from "react-icons/ai";

const page = () => {
  return (
    <div className="w-full mx-auto font-mono">
      <PageMenu title="Trash" icon={<AiOutlineDelete />} sort />
      <div className="flex w-full flex-col gap-4 px-4 pt-2">Bin</div>
    </div>
  );
};

export default page;

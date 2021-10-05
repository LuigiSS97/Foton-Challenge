import { Input } from "components";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchInput({ label, ...props }) {
  return (
    <Input
      icon={<AiOutlineSearch size="15px"/>}
      label={label}
      {...props}
    />
  );
}

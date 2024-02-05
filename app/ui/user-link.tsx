import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";

type Props = {
  icon: string;
  link?: string | null;
  value: string | null;
};

export const UserLink = ({ icon, link, value }: Props) => (
  <div className={classnames("text-sm flex truncate", !value && "opacity-50")}>
    <div className="inset-y-0 start-0 flex items-center pr-3 pointer-events-none">
      <Image
        className="white"
        width={24}
        height={24}
        src={icon}
        alt="GitHub User Avatar Image"
      />
    </div>
    {link && value ? <Link href={link}>{value}</Link> : value || "Not Available"}
  </div>
);

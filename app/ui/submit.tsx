import classnames from "classnames";
import { useFormStatus } from "react-dom";
import { Spinner } from "./spinner";

export function Submit() {
  const { pending } = useFormStatus();
  return (
    <div role="status">
      <button
        className={classnames(
          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 border border-blue-700 rounded-xl ml-2 flex justify-center w-36",
          pending && "opacity-50 cursor-default"
        )}
        disabled={pending}
        type="submit"
      >
        {pending ? <Spinner /> : "Search"}
      </button>
    </div>
  );
}

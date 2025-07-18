import { Check, LucideX } from "lucide-react";
import { useState } from "react";

type Props = {
  success?: boolean;
  message: string;
  submessage?: string;
};

function Alert({ success = false, message, submessage }: Props) {
  const [enabled, setEnabled] = useState<boolean>(true);

  if (enabled) {
    return (
      <div
        className={` w-full ${success ? "bg-green-500" : "bg-red-500"} rounded-sm px-4 py-2 flex gap-2 items-center mb-4 text-xs justify-between`}
      >
        <div className="flex items-center gap-2">
          {success ? (
            <Check strokeWidth={1.5} size={18} />
          ) : (
            <LucideX strokeWidth={1.5} size={18} />
          )}
          {message}
        </div>
        {submessage && <small>{submessage}</small>}
        <div
          className={` p-1 ${success ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"} rounded-full flex items-center justify-center`}
        >
          <LucideX
            strokeWidth={1.5}
            size={18}
            className="cursor-pointer"
            onClick={() => setEnabled(false)}
          />
        </div>
      </div>
    );
  }
}

export default Alert;

import { Link } from "react-router-dom";
interface props {
  label: string;
  subLabel: string;
  to: string;
  toText: string;
}

function FormHeadings({ label, subLabel, to, toText }: props) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-semibold md:text-3xl">{label}</h1>
      <p className="text-md text-gray-700 md:text-sm">
        {subLabel}{" "}
        <Link to={to} className="text-blue-900 font-semibold">
          {toText}
        </Link>
      </p>
    </div>
  );
}

export default FormHeadings;

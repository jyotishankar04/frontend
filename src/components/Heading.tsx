function Heading({ label }: { label: string }) {
  return (
    <div>
      <h1 className="text-gray-950  font-bold text-4xl sm:text-2xl ">
        {label}
      </h1>
    </div>
  );
}

export default Heading;

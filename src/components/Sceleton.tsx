function Sceleton() {
  return (
    <div>
      <div
        role="status"
        className="w-full p-4 space-y-4 max-h-[calc(100vh-100px)] overflow-hidden divide-y divide-gray-200 animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
      >
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
        <OneSceleton />
      </div>
    </div>
  );
}

function OneSceleton() {
  return (
    <>
      <div className="flex items-center pt-2 justify-between">
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
      </div>
    </>
  );
}
export default Sceleton;

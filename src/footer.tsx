export const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <hr className="border-neutral-200 dark:border-neutral-800 border-2 w-full"></hr>
      <div className="flex gap-8 w-full p-4 items-center max-w-4xl">
        <p className="font-bold">Contact</p>
        <div className="rounded-full dark:bg-neutral-800 bg-neutral-200 py-2 px-4 flex items-center gap-2">
          <img src="/email.svg" className="w-5 h-5 dark:invert"></img>
          <p>meeshroom@gmx.net</p>
        </div>
        <p></p>
      </div>
    </div>
  );
};

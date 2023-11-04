import { twMerge } from "tailwind-merge";

function Container(props) {
  const { className = "", children } = props;
  return (
    <div className={twMerge("max-w-[1265.6px] w-full my-0 mx-auto px-1", className)}>
      {children}
    </div>
  );
}

export default Container;

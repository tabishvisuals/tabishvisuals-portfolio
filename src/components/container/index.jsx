import { twMerge } from "tailwind-merge";

function Container(props) {
  const { className = "", children, ...restProps } = props;
  return (
    <div
      className={twMerge(
        "max-w-[1265.6px] w-full my-0 mx-auto px-4 xl:px-0",
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

export default Container;

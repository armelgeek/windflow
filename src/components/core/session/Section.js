import clsx from "clsx";
export const Section = ({ size, children }) => {
  const sizeClasses = clsx(
    {
      "mb-6": size === "sm",
      "my-48": size === "md",
      "my-32 md:py-48 lg:py-64": size === "lg"
    }
  );

  return <section className={`${sizeClasses} bgGrid`}>{children}</section>;
};

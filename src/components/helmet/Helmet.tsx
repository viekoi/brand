import React from "react";

const Helmet = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  document.title = "Brand - " + title;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>{children}</div>;
};

export default Helmet;

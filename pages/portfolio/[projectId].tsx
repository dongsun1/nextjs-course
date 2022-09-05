import { NextPage } from "next";
import { useRouter } from "next/router";

const PortfolioProjectPage: NextPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
};

export default PortfolioProjectPage;

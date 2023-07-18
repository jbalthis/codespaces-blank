import Home from "../../app/page";

export default {
  title: "Pages/Home",
  component: Home,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
};

export const HomePage = () => <Home />;

import Header from "components/Header";
import "./styles/normalize.css";
import "./styles/fonts.scss";
import "./styles/global.scss";
import "./styles/colors.scss";
import "./styles/root-variables.scss";
import Welcoming from "components/Welcoming";
import Problem from "components/Problem";
import Solution from "components/Solution";
import Advantages from "components/Advantages";
import Tarifs from "components/Tarifs";
import WorkFlow from "components/WorkFlow";
import FAQ from "components/FAQ";

function App() {
  return (
    <>
      <Header />
      <Welcoming />
      <Problem />
      <Solution />
      <Advantages />
      <Tarifs />
      <WorkFlow />
      <FAQ />
    </>
  );
}

export default App;

import "./styles/normalize.css";
import "./styles/fonts.scss";
import "./styles/global.scss";
import "./styles/colors.scss";
import "./styles/root-variables.scss";
import Welcoming from "components/sections/Welcoming";
import Problem from "components/sections/Problem";
import Solution from "components/sections/Solution";
import Advantages from "components/sections/Advantages";
import Tarifs from "components/sections/Tarifs";
import WorkFlow from "components/sections/WorkFlow";
import FAQ from "components/sections/FAQ";
import Header from "components/ui/Header";
import Footer from "components/sections/Footer";

const colors = {
  primaryBlue: "#6b76f6",
  secodaryBlue: "rgba(223, 226, 255, 0.71)",
  white: "#fff",
  pink: "#ffebfe",
  lightGreen: "#f8feda",
};

export interface Sections {
  tarifs: string;
  workflow: string;
  faq: string;
}

const sectionsIds: Sections = {
  faq: "faq",
  tarifs: "tarifs",
  workflow: "workflow",
};

function App() {
  return (
    <>
      <Header bcc={colors.lightGreen} ids={sectionsIds} />
      <Welcoming bcc={colors.primaryBlue} />
      <Problem bcc={colors.secodaryBlue} />
      <Solution bcc={colors.white} />
      <Advantages bcc={colors.secodaryBlue} />
      <Tarifs bcc={colors.pink} id={sectionsIds.tarifs} />
      <WorkFlow bcc={colors.white} id={sectionsIds.workflow} />
      <FAQ bcc={colors.secodaryBlue} id={sectionsIds.faq} />
      <Footer bcc={colors.primaryBlue} />
    </>
  );
}

export default App;

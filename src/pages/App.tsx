import Header from "../components/Header";
import ExpertTitleSection from "../components/ExpertTitleSection";
import ExpertCardList from "../components/ExpertCardList";
import InfoSection from "../components/InfoSection";
import MainTitleSection from "../components/MainTitleSection";
import { experts } from "../api/data";

function App() {
  return (
    <>
      <Header />
      <MainTitleSection />
      <ExpertTitleSection />
      <ExpertCardList experts={experts} />
      <InfoSection />
    </>
  );
}
export default App;
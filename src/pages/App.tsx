import Header from "../components/Header";
import ExpertTitleSection from "../components/ExpertTitleSection";
import ExpertCardList from "../components/ExpertCardList";
import InfoSection from "../components/InfoSection";
import MainTitleSection from "../components/MainTitleSection";
import { experts, tgChannels } from "../api/data";
import '../styles/global.css'
import TelegramChannelCardList from "../components/TelegramChannelCardList";

function App() {
  return (
    <>
      <Header />
      <MainTitleSection />
      <ExpertTitleSection />
      <ExpertCardList experts={experts} />
      <InfoSection />
      <TelegramChannelCardList channels={tgChannels} />
    </>
  );
}
export default App;
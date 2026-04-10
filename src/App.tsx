import './styles/global.css'
import Header from "./components/Header";
import ExpertTitleSection from "./components/ExpertTitleSection";
import ExpertCardList from "./components/ExpertCardList";
import InfoSection from "./components/InfoSection";
import MainTitleSection from "./components/MainTitleSection";
import { experts, tgChannels } from "./api/data";
import TelegramChannelCardList from "./components/TelegramChannelCardList";
import TelegramChannelsInfoSection from "./components/TelegramChannelsInfoSection";

function App() {
  return (
    <>
      <Header />
      <MainTitleSection />
      <ExpertTitleSection />
      <ExpertCardList experts={experts} />
      <InfoSection />
      <TelegramChannelsInfoSection />
      <TelegramChannelCardList channels={tgChannels} />
    </>
  );
}
export default App;
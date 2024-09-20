import PlayersIcon from "../components/icons/players";
import ScoreIcon from "../components/icons/score";
import SettingsIcon from "../components/icons/settings";
import TeamsIcon from "../components/icons/teams";

type MenuOptionProps = {
  icon: React.ReactNode;
  title: string;
};

function MenuOption({ icon, title }: MenuOptionProps) {
  return (
    <section className="rounded-lg border border-white flex flex-col gap-4 p-4 items-center">
      <span className="text-white">{icon}</span>
      <h1 className="text-white">{title}</h1>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 w-full">
        <MenuOption icon={<PlayersIcon />} title="Players" />
        <MenuOption icon={<TeamsIcon />} title="Teams" />
        <MenuOption icon={<ScoreIcon />} title="Scores" />
        <MenuOption icon={<SettingsIcon />} title="Settings" />
      </div>
    </>
  );
}

import { Distro } from "@/data/distros";
import DistroCardGrid from "./DistroCardGrid";
import DistroCardList from "./DistroCardList";

interface DistroCardProps {
  distro: Distro;
  isSelected?: boolean;
  onSelectToggle?: () => void;
  showCheckbox?: boolean;
  showSpecs?: boolean;
  viewMode?: "list" | "grid";
}

const DistroCard = ({
  distro,
  isSelected = false,
  onSelectToggle,
  showCheckbox = true,
  showSpecs = true,
  viewMode = "list",
}: DistroCardProps) => {
  if (viewMode === "grid") {
    return (
      <DistroCardGrid
        distro={distro}
        isSelected={isSelected}
        onSelectToggle={onSelectToggle}
        showCheckbox={showCheckbox}
      />
    );
  }

  return (
    <DistroCardList
      distro={distro}
      isSelected={isSelected}
      onSelectToggle={onSelectToggle}
      showCheckbox={showCheckbox}
      showSpecs={showSpecs}
    />
  );
};

export default DistroCard;

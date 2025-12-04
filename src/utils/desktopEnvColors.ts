export const getDesktopEnvColor = (desktopEnv: string): string => {
  const colorMap: { [key: string]: string } = {
    gnome: "bg-blue-500 text-white",
    "kde plasma": "bg-purple-500 text-white",
    kde: "bg-purple-500 text-white",
    xfce: "bg-blue-400 text-white",
    lxqt: "bg-red-500 text-white",
    mate: "bg-green-600 text-white",
    budgie: "bg-pink-500 text-white",
    cinnamon: "bg-orange-500 text-white",
    i3: "bg-gray-700 text-white",
    sway: "bg-gray-600 text-white",
    pantheon: "bg-cyan-500 text-white",
    deepin: "bg-emerald-500 text-white",
    none: "bg-transparent border border-muted-foreground/40 text-muted-foreground",
  };
  return colorMap[desktopEnv.toLowerCase()] || "bg-gray-500 text-white";
};

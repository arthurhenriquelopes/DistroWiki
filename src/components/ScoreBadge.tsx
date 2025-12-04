interface ScoreBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg";
}

const ScoreBadge = ({ score, size = "md" }: ScoreBadgeProps) => {
  const getScoreColor = (score: number) => {
    if (score === 0) return "bg-secondary text-secondary-foreground";
    if (score > 80) return "bg-green-600 text-white";
    if (score > 60) return "bg-yellow-500 text-white";
    return "bg-red-600 text-white";
  };

  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-lg px-4 py-2",
  };

  return (
    <div
      className={`inline-flex items-center justify-center font-bold rounded-lg ${getScoreColor(
        score
      )} ${sizeClasses[size]} smooth-transition`}
    >
      {score.toFixed(1)}
    </div>
  );
};

export default ScoreBadge;

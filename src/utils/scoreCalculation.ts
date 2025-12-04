interface PerformanceData {
  cpuScore?: number;
  cpu_score?: number;
  ioScore?: number;
  io_score?: number;
  idleRamUsage?: number;
  idle_ram_usage?: number;
  ram_idle?: number;
}

export const calculatePerformanceScore = (distro: PerformanceData): number => {
  const cpuScore = distro.cpuScore || distro.cpu_score || 0;
  const ioScore = distro.ioScore || distro.io_score || 0;
  const ramIdle = distro.idleRamUsage || distro.idle_ram_usage || distro.ram_idle || 0;

  // Se não tiver dados de performance, retorna 0
  if (!cpuScore || !ioScore || !ramIdle) {
    return 0;
  }

  // Calcula o multiplicador de RAM baseado no uso idle
  let ramMultiplier = 1;
  if (ramIdle < 600) {
    ramMultiplier = 1;
  } else if (ramIdle < 1200) {
    ramMultiplier = 0.95;
  } else {
    ramMultiplier = 0.9;
  }

  // Fórmula: CPU Score * IO Score * RAM Multiplier
  const score = (cpuScore * ioScore * ramMultiplier) + 30; // Bônus fixo de 30 pontos

  return Math.min(score, 100); // Limita a 100
};

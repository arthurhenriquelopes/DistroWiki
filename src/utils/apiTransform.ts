import type { Distro, DistroAPI } from "@/types";

/**
 * Transforma uma distro da API para o formato da aplicação
 */
export function transformDistro(apiDistro: DistroAPI): Distro {
  const desktopEnvs = (() => {
    const des = apiDistro.desktop_environments || [];
    if (des.length === 0 || des.some((de) => de.includes("None"))) {
      return ["None"];
    }
    return des;
  })();

  return {
    id: apiDistro.id,
    name: apiDistro.name,
    family: apiDistro.family || "Independent",
    
    // Desktop Environments - ambos os formatos
    desktopEnvironments: desktopEnvs,
    desktop_environments: desktopEnvs,
    
    // Datas - ambos os formatos
    lastRelease: apiDistro.latest_release_date || new Date().toISOString(),
    latest_release_date: apiDistro.latest_release_date || null,
    release_year: apiDistro.release_year ?? null,
    
    // Score/Rating - ambos os formatos
    score: apiDistro.rating || 0,
    rating: apiDistro.rating || 0,
    
    // Performance - ambos os formatos
    idle_ram_usage: apiDistro.idle_ram_usage ?? apiDistro.ram_idle ?? null,
    ramIdle: apiDistro.idle_ram_usage ?? apiDistro.ram_idle,
    cpu_score: apiDistro.cpu_score ?? null,
    cpuScore: apiDistro.cpu_score,
    io_score: apiDistro.io_score ?? null,
    ioScore: apiDistro.io_score,
    
    // Logo
    logo: `/logos/${apiDistro.id}.svg`,
    
    // Website - ambos os formatos
    website: apiDistro.homepage || "",
    homepage: apiDistro.homepage,
    
    // Descrição - ambos os formatos
    description: apiDistro.summary || apiDistro.description || "",
    summary: apiDistro.summary || apiDistro.description,
    
    // Base System - ambos os formatos
    baseSystem: apiDistro.based_on || apiDistro.family || "Independent",
    based_on: apiDistro.based_on,
    
    // Package Manager - ambos os formatos
    packageManager: apiDistro.package_management || apiDistro.package_manager,
    package_management: apiDistro.package_management || apiDistro.package_manager,
    
    // Arquitetura - string único (compatível com definição antiga)
    architecture: apiDistro.architecture ? apiDistro.architecture.join(", ") : undefined,
    architectures: apiDistro.architecture,
    
    // Release Model - ambos os formatos
    releaseModel: apiDistro.release_model || "Unknown",
    release_model: apiDistro.release_model,
    
    // LTS Support - ambos os formatos
    ltsSupport: apiDistro.lts_support || false,
    lts_support: apiDistro.lts_support,
    
    // Campos adicionais
    origin: apiDistro.origin,
    category: apiDistro.category,
    status: apiDistro.status,
    ranking: apiDistro.ranking,
    requirements: apiDistro.requirements || null,
  };
}

/**
 * Transforma um array de distros da API
 */
export function transformDistros(apiDistros: DistroAPI[]): Distro[] {
  return apiDistros.map(transformDistro);
}

// src/data/distros.ts

export interface Distro {
  // Campos obrigatórios
  id: string;
  name: string;
  family: string;
  
  // Logo/Imagem - aceita ambos
  logo?: string;
  
  // Desktop Environments - aceita ambos os formatos
  desktopEnvironments?: string[];
  desktop_environments?: string[];
  
  // Datas - aceita ambos os formatos
  releasedIn?: string;
  lastRelease?: string;
  latest_release_date?: string;
  release_year?: number;
  
  // Score/Rating - aceita ambos os formatos
  score?: number;
  rating?: number;
  
  // Performance - snake_case (API) e camelCase (legacy)
  idle_ram_usage?: number;
  ramIdle?: number;
  
  cpu_score?: number;
  cpuScore?: number;
  
  io_score?: number;
  ioScore?: number;
  
  // Requisitos
  requirements?: string;
  minRam?: number;
  minStorage?: number;
  
  // Website/Homepage - aceita ambos
  website?: string;
  homepage?: string;
  
  // Package Manager - aceita ambos os formatos
  packageManager?: string;
  package_management?: string;
  
  // Descrição/Sumário - aceita ambos
  description?: string;
  summary?: string;
  
  // Release Model & LTS
  releaseModel?: string;
  release_model?: string;
  ltsSupport?: boolean;
  lts_support?: boolean;
  
  // Arquiteturas - aceita ambos
  architectures?: string[];
  architecture?: string;
  
  // Base system - aceita ambos os formatos
  baseSystem?: string;
  based_on?: string;
  
  // Campos adicionais da API
  category?: string;
  status?: string;
  origin?: string;
  os_type?: string;
  image_size?: number;
  office_suite?: string;
  ranking?: number;
  
  // Metadados
  last_updated?: string;
}

// Array vazio - será populado com dados da API
export const distros: Distro[] = [];

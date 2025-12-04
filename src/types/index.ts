export interface DistroAPI {
  id: string;
  name: string;
  family?: string;
  desktop_environments?: string[];
  latest_release_date?: string;
  rating?: number;
  homepage?: string;
  summary?: string;
  description?: string;
  based_on?: string;
  package_manager?: string;
  package_management?: string;
  architecture?: string[];
  origin?: string;
  category?: string;
  status?: string;
  ranking?: number;
  ram_idle?: number;
  idle_ram_usage?: number;
  cpu_score?: number;
  io_score?: number;
  release_model?: string;
  lts_support?: boolean;
  release_year?: number;
  requirements?: any;
}

export interface Distro {
  id: string;
  name: string;
  family: string;
  
  logo?: string;
  
  desktopEnvironments?: string[];
  desktop_environments?: string[];
  
  releasedIn?: string;
  lastRelease?: string;
  latest_release_date?: string;
  release_year?: number;
  
  score?: number;
  rating?: number;
  
  idle_ram_usage?: number;
  ramIdle?: number;
  
  cpu_score?: number;
  cpuScore?: number;
  
  io_score?: number;
  ioScore?: number;
  
  requirements?: string;
  minRam?: number;
  minStorage?: number;
  
  website?: string;
  homepage?: string;
  
  packageManager?: string;
  package_management?: string;
  
  description?: string;
  summary?: string;
  
  releaseModel?: string;
  release_model?: string;
  ltsSupport?: boolean;
  lts_support?: boolean;
  
  architectures?: string[];
  architecture?: string;
  
  baseSystem?: string;
  based_on?: string;
  
  category?: string;
  status?: string;
  origin?: string;
  os_type?: string;
  image_size?: number;
  office_suite?: string;
  ranking?: number;
  
  last_updated?: string;
}

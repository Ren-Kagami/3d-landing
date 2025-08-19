export interface FormData {
  name: string;
  email: string;
  phone: string;
}

export interface AppConfig {
  site_name: string;
  title: string;
  description: string;
  author: string;
  social: Record<string, string>;
}
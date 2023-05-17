/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_WAKATIME_SECRET: string;
    readonly VITE_WAKATIME_APPID: string;
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}

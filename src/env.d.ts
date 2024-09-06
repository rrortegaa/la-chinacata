/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly FORM_ACCESS_KEY: string; // w3forms access key
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'dashboard',
  exposes: {
    './Module': 'dashboard/src/app/remote-entry/entry.module.ts',
  },
};

export default config;

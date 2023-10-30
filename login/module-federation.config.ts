import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'login',
  exposes: {
    './Module': 'login/src/app/remote-entry/entry.module.ts',
  },
};

export default config;

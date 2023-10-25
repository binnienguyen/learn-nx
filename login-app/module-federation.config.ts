import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'login-app',
  exposes: {
    './Module': 'login-app/src/app/remote-entry/entry.module.ts',
  },
};

export default config;

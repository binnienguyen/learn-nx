import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'sign-in',
  exposes: {
    './Module': 'sign-in/src/app/remote-entry/entry.module.ts',
  },
};

export default config;

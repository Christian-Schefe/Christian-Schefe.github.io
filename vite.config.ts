import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const config: UserConfig = {
  plugins: [react()],
  base: '/'
};

export default defineConfig(config);

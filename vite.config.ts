import type { UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default {
	build: {
		lib: {
			entry: './src/AudioPlayer.tsx',
			formats: ['es', 'cjs'],
			fileName: (format) => `AudioPlayer.${format}.js`,
		}
	},
	plugins: [react(), dts()],
	css: {
		modules: {
			localsConvention: 'camelCaseOnly',
		},
	},
} satisfies UserConfig;

import type { UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default {
	build: {
		lib: {
			entry: './src/index.ts',
			formats: ['es', 'cjs'],
			fileName: (format) => format === 'es' ? 'index.mjs' : 'index.cjs',
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM'
				}
			}
		}
	},
	plugins: [react(), dts()],
	css: {
		modules: {
			localsConvention: 'camelCaseOnly',
		},
	},
} satisfies UserConfig;

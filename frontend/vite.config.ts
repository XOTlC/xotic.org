import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@assets': '/src/assets',
			'@components': '/src/components',
			'@types': '/src/types'
		}
	},
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: true,
				ws: true
			}
		}
	},
	css: {
		modules: {
			scopeBehaviour: 'local',
			localsConvention: 'camelCaseOnly',
			generateScopedName: '[name]__[local]___[hash:base64:5]'
		}
	},
	build: {
		target: 'es2022',
		outDir: './dist',
		rollupOptions: {
			output: {
				manualChunks: (id: string) => {
					if (id.includes('node_modules')) return 'vendor';
					return 'main';
				},
				chunkFileNames: '[name].[hash].js',
				entryFileNames: '[name].[hash].js',
				assetFileNames: '[name].[hash].[ext]'
			}
		},
		chunkSizeWarningLimit: 1000,
		manifest: true,
		minify: 'terser',
		terserOptions: {
			format: {
				comments: false
			},
			compress: {
				sequences: true,
				booleans: true,
				loops: true,
				toplevel: true,
				unsafe: true,
				drop_console: false,
				unsafe_comps: true,
				passes: 2
			},
			module: true
		}
	}
});

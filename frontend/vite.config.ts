import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
	const prod = mode === 'production';

	return {
		plugins: [react()],
		resolve: {
			alias: {
				'@assets': '/src/assets',
				'@components': '/src/components',
				'@types': '/src/types',
				'@utils': '/src/utils',
				'@views': '/src/views'
			}
		},
		server: {
			proxy: {
				'/api': {
					target: 'http://localhost:1512',
					changeOrigin: true
				}
			}
		},
		css: {
			modules: {
				scopeBehaviour: 'local',
				generateScopedName: prod ? '[hash:base64:1]' : '[path][local]'
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
	};
});

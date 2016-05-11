import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import npm from 'rollup-plugin-npm';
import typescript from 'rollup-plugin-typescript';
import alias from 'rollup-plugin-alias';


export default {
	entry: 'src/main.js',
	dest: 'dist/app.js',

	format: 'iife',
	plugins: [
		alias({
			resolve: ['.jsx', '.js', '.ts'],
			'react': './../../preact-compat/dist/preact-compat.js',
			'react-dom': './../../preact-compat/dist/preact-compat.js',
		}),
		nodeResolve({
			jsnext: true,
		}),
		commonjs(),
		babel({
			presets: [ 'es2015-rollup' ],
			plugins: [
    		[ 'transform-react-jsx', { 'pragma' : 'h' }],
				'transform-node-env-inline',
				'syntax-decorators',
  		],
		}),
		npm({
			jsnext: true,
			main: true,
			browser: true,
		}),
	],
};

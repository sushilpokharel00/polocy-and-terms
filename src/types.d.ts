// Allow importing CSS and common static assets without type errors in the editor
declare module '*.css';
declare module '*.scss';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';

// If react-router-dom isn't installed yet, this prevents the editor from
// flagging imports as errors. Once dependencies are installed, you can
// remove this and rely on proper types from the package.
declare module 'react-router-dom';

// Minimal React/runtime declarations to prevent editor/type errors when
// @types/react isn't installed. These are stop-gaps until dependencies are
// properly installed via npm.
declare module 'react/jsx-runtime';
declare module 'react/jsx-dev-runtime';
declare module 'react' {
	export const Fragment: any;
	export function createElement(...args: any[]): any;
	export function useState(...args: any[]): any;
	export function useEffect(...args: any[]): any;
	export function useRef(...args: any[]): any;
	export type ReactNode = any;
	export type FC<P = any> = any;
	const React: any;
	export default React;
}

declare module 'react-dom/client' {
	export function createRoot(el: any): any;
}

declare namespace JSX {
	interface IntrinsicElements {
		[elemName: string]: any;
	}
}

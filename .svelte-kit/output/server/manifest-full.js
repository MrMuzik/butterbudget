export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["_redirects","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DjlrY6qC.js","app":"_app/immutable/entry/app.CRcytMJH.js","imports":["_app/immutable/entry/start.DjlrY6qC.js","_app/immutable/chunks/entry.Bi_j9j6P.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.CRcytMJH.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DGhVwavX.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/budgets",
				pattern: /^\/budgets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();


				{
					__sveltekit_6q2rww = {
						base: "",
						version: "3.4.0-rc.0"
					};

					const element = document.currentScript.parentElement;

					import("/_app/immutable/entry/start.CRkXvs5H.js").then(async (kit) => {
						kit.init(__sveltekit_6q2rww);
						const app = await import("/_app/immutable/entry/app.D-D7KbbY.js");
						kit.start(app, element);
					});

					if ('serviceWorker' in navigator) {
						const script_url = '/service-worker.js';
						const policy = globalThis?.window?.trustedTypes?.createPolicy(
							'sveltekit-trusted-url',
							{ createScriptURL(url) { return url; } }
						);
						const sanitised = policy?.createScriptURL(script_url) ?? script_url;
						addEventListener('load', function () {
							navigator.serviceWorker.register(sanitised, { type: 'module' });
						});
					}
				}
			
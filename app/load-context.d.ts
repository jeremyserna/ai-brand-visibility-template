import "react-router";
import type { ExecutionContext as HonoExecutionContext } from "hono";

declare module "react-router" {
	interface AppLoadContext {
		cloudflare: {
			env: Env;
			ctx: HonoExecutionContext;
		};
	}
}

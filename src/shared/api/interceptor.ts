import { paths } from "@/shared/lib/paths";
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

export const interceptor = (baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (args: string | FetchArgs, api: any, extraOptions: any) => {
        const result = await baseQuery(args, api, extraOptions);

        if (result.error?.status === 401) {
            localStorage.removeItem("token");
            window.location.href = paths.signin;
        }

        return result;
    };

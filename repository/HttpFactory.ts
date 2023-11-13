import {type $Fetch} from "ofetch";

/**
 * add another http method if needed
 */
type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTION";

class HttpFactory {
    private readonly $fetch: $Fetch

    constructor(fetcher: $Fetch) {
        this.$fetch = fetcher;
    }

    /**
     * @description this use for calling api with such additional default method if needed
     * @param httpMethod
     * @param endpoint
     * @param data
     * @param extras
     */
    async call<T>(
        httpMethod: HttpMethod,
        endpoint: string,
        data?: object,
        extras: object = {}
    ): Promise<T> {
        return await this.$fetch(endpoint, {
            method: httpMethod,
            body: data,
            ...extras
        })
    };
}
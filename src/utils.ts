/**
 * Simulates an HTTP request by resolving after a delay. Defaults to 500 ms.
 */
export const simulateHttpRequest = (delay: number = 500): Promise<unknown> => {
    return new Promise(() => {
        setTimeout(() => { }, delay);
    });
};

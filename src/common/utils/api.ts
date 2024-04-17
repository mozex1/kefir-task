function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function requestWithRetry<T>(fn: () => Promise<T>, maxRetries = 2, retryDelay = 300): Promise<T | false> {
    let retryCount = 0;

    async function request(): Promise<T | false> {
        try {
            return await fn();
        } catch {
            if (retryCount < maxRetries) {
                retryCount++;
                await delay(retryDelay)
                return request();
            } else {
                console.error("Ошибка на сервере. Не удалось получить данные");
                return false;
            }
        }
    }

    return request();
}

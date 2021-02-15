type LoggerType = (...data: unknown[]) => void;

// eslint-disable-next-line no-console
export const logger: LoggerType = (...data) => console.log(data);

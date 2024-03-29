const createConfig = () => ({
  maxFileSize: 11000,
  modules: {
    errors: 'errors' as const,
    loading: 'loading' as const,
    notices: 'notices' as const,
    router: 'router' as const,
    user: 'user' as const,
    notes: 'notes' as const,
    tags: 'tags' as const,
    routerFilter: 'routerFilter' as const,
  },
  environment: process.env.NODE_ENV,
  defaultDelay: 2000,
  api: 'http://localhost:3000',
});

/**
 * Конфигурация приложения
 */
export const config: Readonly<ReturnType<typeof createConfig>> = createConfig();

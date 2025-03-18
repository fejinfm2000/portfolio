declare global {
    interface Window {
        env: {
            GITHUB_ACCESS_TOKEN: string;
        };
    }
}

export const environment = {
    production: false,
    apiBaseUrl: 'http://localhost:4200',
    githubAccessToken: window.env?.GITHUB_ACCESS_TOKEN || '',
};

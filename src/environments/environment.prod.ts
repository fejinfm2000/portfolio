declare global {
  interface Window {
    env: {
      GITHUB_ACCESS_TOKEN: string;
    };
  }
}

export const environment = {
  production: true,
  apiBaseUrl: 'https://professionalgallery.netlify.app',
  githubAccessToken: window.env?.GITHUB_ACCESS_TOKEN || '',
};

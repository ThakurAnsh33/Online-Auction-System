export const getApiBaseUrl = () => {
  const configuredUrl = import.meta.env.VITE_API_URL;

  if (configuredUrl) {
    return configuredUrl.replace(/\/$/, "");
  }

  if (import.meta.env.PROD) {
    return `${window.location.origin}/_/backend`;
  }

  return "http://localhost:5000";
};
export function getEnvironmentVariables(): EnvironmentVariables {
  return {
    BASE_URL: process.env.REACT_APP_BASE_URL || 'http://localhost:8092'
  };
}

interface EnvironmentVariables {
  BASE_URL: string;
}

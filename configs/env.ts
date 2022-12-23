export interface ENV {
  apiEndPoint: string;
  assetsEndPoint: string;
  apiUrl: string;
  projectImageUrl: string;
  projectUrl: string;
}

const env: ENV = {
  apiEndPoint: process.env.NEXT_PUBLIC_API_END_POINT || "",
  assetsEndPoint: process.env.NEXT_PUBLIC_ASSETS_END_POINT || "",
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "",
  projectImageUrl: process.env.NEXT_PUBLIC_PROJECT_V1_IMAGE_URL || "",
  projectUrl: process.env.NEXT_PUBLIC_PROJECT_V1_URL || "",
};

export default env;

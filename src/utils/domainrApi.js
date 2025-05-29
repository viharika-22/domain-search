import axios from "axios";

const DOMAINR_API_URL = "https://api.domainr.com/v2/status";
const API_KEY = "YOUR_API_KEY_HERE"; // Replace this with your actual key

export async function checkDomainAvailability(query) {
  if (!query) return [];

  const extensions = [".com", ".net", ".io", ".dev", ".xyz"];
  const domains = extensions.map((ext) => `${query}${ext}`).join(",");

  try {
    const response = await axios.get(DOMAINR_API_URL, {
      params: {
        domain: domains,
        client_id: API_KEY,
      },
    });

    const statuses = response.data.status;

    return statuses.map((item) => ({
      name: item.domain,
      available: item.status.includes("undelegated") || item.status.includes("inactive"),
    }));
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}

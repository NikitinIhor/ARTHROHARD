export const getData = async (page = 1, items = 20) => {
  const API_URL = "https://brandstestowy.smallhost.pl/api/random";

  try {
    const response = await fetch(
      `${API_URL}?pageNumber=${page}&pageSize=${items}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

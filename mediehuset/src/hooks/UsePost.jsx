import { useState } from "react";

export const usePost = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const postData = async (url, body, auth = false) => {
    setLoading(true);
    setError(null);

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      const result = await response.json();

      if (response.ok) {
        setData(result);

        // If it's a login request, store the token
        if (url.includes("token") && result.access_token) {
          localStorage.setItem("token", result.access_token);
        }
      } else {
        setError(result.message || "An error occurred");
      }
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, postData };
};

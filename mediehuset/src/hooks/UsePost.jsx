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

        // if its a login request, store the token
        if (url.includes("token") && result.access_token) {
          localStorage.setItem("token", result.access_token);

          // fetch user details after login
          const userResponse = await fetch("https://api.mediehuset.net/mediesuset/", {
            headers: {
              Authorization: `Bearer ${result.access_token}`,
            },
          });

          const userData = await userResponse.json();

          if (userResponse.ok) {
            localStorage.setItem("user", JSON.stringify(userData));
          }
        }
      } else {
        setError(result.message || "En fejl opstod");
      }
    } catch (err) {
      setError("Netværksfejl");
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, postData };
};

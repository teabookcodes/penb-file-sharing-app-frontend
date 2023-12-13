import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ApiDataResponse {
  message: string;
}

export function ApiData() {
  const [data, setData] = useState<ApiDataResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchData() {
    setLoading(true);
    try {
      const response: AxiosResponse<ApiDataResponse> = await axios.get(
        "http://localhost:8000"
      );
      if (response.data) {
        setData(response.data);
      }
    } catch (error) {
      console.log("Something went wrong: ", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="mt-4">
        <h1>Example API Data</h1>
        <Link to="/">Go back home</Link>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          onClick={fetchData}
          className="bg-orange-500 text-white rounded px-4 py-2"
        >
          Get data
        </button>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        data && (
          <div className="mt-4">
            <h2>API Response:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )
      )}
    </>
  );
}

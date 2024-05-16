import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${year}-${month}-${day}/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;

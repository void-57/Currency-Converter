import { useState, useEffect } from "react";
import Inputbox from "/src/components/Inputbox.jsx";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import Select from "react-select";

function App() {
  const [amt, setamt] = useState("");
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convtamt, setconvtamt] = useState("");
  const currencyInfo = useCurrencyInfo(from);

  // const options = Object.keys(currencyInfo || {});
  const currencyOptions = Object.keys(currencyInfo).map((currency) => ({
    value: currency,
    label: currency,
  }));
  const swap = () => {
    setamt(convtamt);
    setconvtamt(amt);
    setfrom(to);
    setto(from);
  };

  const convert = (e) => {
    e.preventDefault();
    if (currencyInfo && currencyInfo[to]) {
      setconvtamt(amt * currencyInfo[to]);
    }
  };

  return (
    <div
      className="flex flex-wrap items-center justify-center w-full h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/106152/euro-coins-currency-money-106152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div
          className="fixed inset-x-0 bottom-0 z-50 max-w-md p-5 mx-auto border rounded-lg border-gray-60 backdrop-blur-sm bg-white/30"
          style={{ marginBottom: "20vh" }}
        >
          <form>
            <div className="w-full mt-1 mb-4">
              <Inputbox
                label="From"
                amount={Number(amt)}
                onCurrencyChange={setfrom}
                currencyOption={currencyOptions}
                selectCurrency={from}
                onAmountChange={setamt}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-customGreen text-white px-2 py-0.5"
                onClick={swap}
              >
                <i class="ri-arrow-up-down-line"></i>
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Inputbox
                label="To"
                amount={convtamt}
                onCurrencyChange={setto}
                currencyOption={currencyOptions}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 text-white rounded-lg bg-customGreen"
              onClick={convert}
            >
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

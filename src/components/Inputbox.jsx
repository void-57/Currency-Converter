import React, { useId } from "react";
import Select from "react-select";
function Inputbox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const inputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={inputId} className="inline-block mb-2 text-black/40">
          {label}
        </label>
        <input
          id={inputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount||''}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="flex flex-wrap justify-end w-1/2 text-right">
        <label className="w-full mb-2 text-black/40">Currency Type</label>
        <Select
  className="px-1 py-1 bg-gray-100 rounded-lg outline-none cursor-pointer"
  value={currencyOption.find(option => option.value ===selectCurrency)}
  onChange={selectedOption => onCurrencyChange(selectedOption.value)}
  filterOption={(option, rawInput) => option.label.startsWith(rawInput)}
  isDisabled={currencyDisable}
  options={currencyOption}
>
          {currencyOption.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
}

export default Inputbox;

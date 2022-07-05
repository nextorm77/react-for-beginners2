import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); // 오류 방지 차원에서 초기값 설정 필요
  const [money, setMoney] = useState(0);
  const onChange = (event) => setMoney(event.target.value);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        // 성능을 위해 동시에 set~함수를 호출하면 1번의 리렌더링?
        setCoins(json);
        setLoading(false);
      });
  }, []);
  //console.log("here");
  console.log(money);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length}건)`}</h1>
      <input
        value={money}
        type="number"
        placeholder="Input your money to buy coin"
        onChange={onChange}
      ></input>{" "}
      USD
      <br />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((item, index) => (
            <option key={item.id}>
              {item.name} ({item.symbol}): {item.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      {loading ? (
        ""
      ) : (
        <ul>
          {coins.map((item, index) => (
            <li key={index}>
              {item.name} ({item.symbol}):{" "}
              {Math.round(money / item.quotes.USD.price)} 주
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  // 일정 금액 입력(달러 기준)시 각 코인마다 몇 주를 살 수 있을까?
}

export default App;

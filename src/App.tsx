import React, { useState } from "react";
import DomainBuy from "./components/DomainBuy";
import MyDomains from "./components/MyDomains";
import MyOrders from "./components/MyOrders"; // 💡 引入新的訂單元件
import MyWallet from "./components/MyWallet";

function App() {
  // 預設頁面設定為 order 方便您直接預覽
  const [currentPage, setCurrentPage] = useState("order");

  return (
    <div className="min-h-screen bg-[#F7F5F0]">
      {currentPage === "purchase" && (
        <DomainBuy setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "my-domains" && (
        <MyDomains setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "wallet" && <MyWallet setCurrentPage={setCurrentPage} />}
      {currentPage === "order" && <MyOrders setCurrentPage={setCurrentPage} />}
    </div>
  );
}

export default App;

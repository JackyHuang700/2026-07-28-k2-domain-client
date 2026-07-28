import React, { useState } from "react";
import DomainBuy from "./components/DomainBuy";
import Login from "./components/Login";
import MyDomains from "./components/MyDomains";
import MyOrders from "./components/MyOrders"; // 💡 引入新的訂單元件
import MyWallet from "./components/MyWallet";

function App() {
  // 判斷使用者是否已登入 (預設為 false)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 登入後預設顯示的頁面
  const [currentPage, setCurrentPage] = useState("wallet");

  // 處理登出的功能 (將狀態改回未登入)
  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage("wallet"); // 重置預設頁面
  };

  // 如果尚未登入，只渲染登入頁面
  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#F7F5F0]">
      {currentPage === "purchase" && (
        <DomainBuy setCurrentPage={setCurrentPage} onLogout={handleLogout} />
      )}
      {currentPage === "my-domains" && (
        <MyDomains setCurrentPage={setCurrentPage} onLogout={handleLogout} />
      )}
      {currentPage === "wallet" && (
        <MyWallet setCurrentPage={setCurrentPage} onLogout={handleLogout} />
      )}
      {currentPage === "order" && (
        <MyOrders setCurrentPage={setCurrentPage} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;

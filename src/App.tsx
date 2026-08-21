import React, { useState } from "react";
import CloudProxy from "./components/CloudProxy";
import DomainBuy from "./components/DomainBuy";
import Login from "./components/Login";
import MyDomains from "./components/MyDomains";
import MyOrders from "./components/MyOrders";
import MyWallet from "./components/MyWallet";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState("cloud-proxy"); // 預設顯示雲端代理頁

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage("wallet");
  };

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
      {currentPage === "cloud-proxy" && (
        <CloudProxy setCurrentPage={setCurrentPage} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;

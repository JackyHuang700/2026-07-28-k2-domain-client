import React from "react";
import {
  Globe,
  FolderOpen,
  Shield,
  Wallet,
  Receipt,
  Settings,
  LogOut,
  RefreshCw,
} from "lucide-react";

interface MyOrdersProps {
  setCurrentPage: (page: string) => void;
  onLogout: () => void;
}

export default function MyOrders({ setCurrentPage, onLogout }: MyOrdersProps) {
  // 模擬訂單明細資料 (精準對應您的截圖)
  const orderData = [
    {
      orderId: "D0178520431989700007M0000",
      domain: "skj168.com",
      app: "XAEL-Ai-209013",
      price: "12.03 USD",
      status: "已完成",
      statusColor: "bg-[#0FA958]", // 綠色 Badge
      createdAt: "2026/7/28 02:05:19",
    },
  ];

  return (
    <div className="h-screen w-screen flex items-center justify-center p-4 sm:p-6 bg-[#EBE9E4] text-[#2C2A29] font-sans">
      <div className="w-full h-full max-w-[1400px] rounded-2xl shadow-2xl flex overflow-hidden border border-[#E5E0D8] bg-white/75 backdrop-blur-md">
        {/* 左側邊欄 */}
        <aside className="w-64 bg-[#FAF8F5]/90 border-r border-[#E5E0D8] flex flex-col justify-between p-4 select-none shrink-0">
          <div>
            {/* 視窗控制按鈕 */}
            <div className="flex items-center space-x-2 mb-6 px-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
            </div>

            {/* 用戶資訊 */}
            <div className="flex items-center space-x-3 px-2 mb-6">
              <div className="w-9 h-9 rounded-xl bg-[#2C2A29] text-white flex items-center justify-center font-bold text-sm shadow">
                K2
              </div>
              <div>
                <h1 className="font-bold text-sm text-[#2C2A29]">K2Net</h1>
                <p className="text-xs text-[#8C877D]">用戶中心</p>
              </div>
            </div>

            {/* 導覽選單 */}
            <nav className="space-y-1 text-sm">
              <div className="text-[#8C877D] text-xs font-semibold px-3 pt-2 pb-1">
                域名管理
              </div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage?.("purchase");
                }}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-[#524E4A] hover:bg-[#EFECE6] transition-all"
              >
                <span className="flex items-center space-x-2.5">
                  <Globe size={16} />
                  <span>購買域名</span>
                </span>
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage?.("my-domains");
                }}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-[#524E4A] hover:bg-[#EFECE6] transition-all"
              >
                <span className="flex items-center space-x-2.5">
                  <FolderOpen size={16} />
                  <span>我的域名</span>
                </span>
              </a>

              <div className="text-[#8C877D] text-xs font-semibold px-3 pt-4 pb-1">
                憑證服務
              </div>
              <a
                href="#"
                className="flex items-center justify-between px-3 py-2 rounded-lg text-[#524E4A] hover:bg-[#EFECE6] transition-all"
              >
                <span className="flex items-center space-x-2.5">
                  <Shield size={16} />
                  <span>憑證管理</span>
                </span>
              </a>

              <div className="text-[#8C877D] text-xs font-semibold px-3 pt-4 pb-1">
                財務與訂單
              </div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage?.("wallet");
                }}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-[#524E4A] hover:bg-[#EFECE6] transition-all"
              >
                <span className="flex items-center space-x-2.5">
                  <Wallet size={16} />
                  <span>我的錢包</span>
                </span>
              </a>
              {/* 我的訂單 (Active 狀態) */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center justify-between px-3 py-2 rounded-lg transition-all bg-[#EFECE6] text-[#C05621] font-semibold"
              >
                <span className="flex items-center space-x-2.5">
                  <Receipt size={16} />
                  <span>我的訂單</span>
                </span>
              </a>
            </nav>
          </div>

          {/* 底部設定 */}
          <div className="border-t border-[#E5E0D8] pt-3 space-y-1">
            <a
              href="#"
              className="flex items-center space-x-2.5 px-3 py-2 rounded-lg text-[#524E4A] hover:bg-[#EFECE6] text-sm transition-all"
            >
              <Settings size={16} />
              <span>帳號設定</span>
            </a>
            <div className="flex items-center justify-between px-3 py-2 text-xs text-[#8C877D]">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-[#E5E0D8] flex items-center justify-center text-[#2C2A29] font-bold">
                  K
                </div>
                <span className="font-medium text-[#2C2A29]">ken</span>
              </div>
              <LogOut
                size={16}
                onClick={onLogout}
                className="cursor-pointer hover:text-[#C05621] transition-colors"
              />
            </div>
          </div>
        </aside>

        {/* 右側主要內容區 */}
        <main className="flex-1 bg-[#EBE9E4]/30 flex flex-col overflow-y-auto p-8">
          {/* 頂部標題與篩選器 */}
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-bold text-[#2C2A29]">訂單</h2>

            {/* 右側篩選器 (來自圖一截圖) */}
            <div className="flex items-end space-x-4">
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold text-[#524E4A]">
                  App
                </label>
                <select className="border border-[#D1D1D1] bg-white rounded px-3 py-1.5 text-sm text-[#2C2A29] focus:outline-none min-w-[160px] shadow-sm">
                  <option>全部 App</option>
                  <option>XAEL-Ai-209013</option>
                </select>
              </div>

              <button className="text-[#2C2A29] hover:text-[#524E4A] font-medium text-sm px-2 h-[34px] flex items-center space-x-1.5 transition-colors">
                <RefreshCw size={14} />
                <span>重新整理</span>
              </button>
            </div>
          </div>

          {/* 明細表格 (白底卡片) */}
          <div className="bg-white border border-[#E5E0D8] shadow-sm rounded-xl flex-1 flex flex-col overflow-hidden">
            <div className="overflow-x-auto flex-1 p-2">
              <table className="w-full text-left whitespace-nowrap">
                <thead className="border-b border-[#E5E0D8]">
                  <tr>
                    <th className="py-4 px-4 text-[#8C877D] text-sm font-semibold tracking-wider">
                      訂單編號
                    </th>
                    <th className="py-4 px-4 text-[#8C877D] text-sm font-semibold tracking-wider">
                      網域
                    </th>
                    <th className="py-4 px-4 text-[#8C877D] text-sm font-semibold tracking-wider">
                      App
                    </th>
                    <th className="py-4 px-4 text-[#8C877D] text-sm font-semibold tracking-wider">
                      售價
                    </th>
                    <th className="py-4 px-4 text-[#8C877D] text-sm font-semibold tracking-wider">
                      狀態
                    </th>
                    <th className="py-4 px-4 text-[#8C877D] text-sm font-semibold tracking-wider">
                      建立時間
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D8]">
                  {orderData.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-[#F7F5F0]/50 transition-colors"
                    >
                      <td className="py-4 px-4 text-sm text-[#524E4A] font-mono">
                        {row.orderId}
                      </td>
                      <td className="py-4 px-4 text-sm text-[#2C2A29] font-medium">
                        {row.domain}
                      </td>
                      <td className="py-4 px-4 text-sm text-[#2C2A29]">
                        {row.app}
                      </td>
                      <td className="py-4 px-4 text-sm text-[#2C2A29] font-medium font-mono">
                        {row.price}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`${row.statusColor} text-white px-2.5 py-1 rounded-md text-xs font-medium tracking-wide`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-[#8C877D]">
                        {row.createdAt}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 右下角分頁按鈕 */}
            <div className="p-4 flex justify-end items-center border-t border-[#E5E0D8]">
              <div className="flex space-x-2">
                <button
                  disabled
                  className="px-4 py-1.5 bg-[#E6E6E6] text-[#8C877D] border border-[#D1D1D1] rounded flex items-center justify-center text-sm cursor-not-allowed"
                >
                  上一頁
                </button>
                <button
                  disabled
                  className="px-4 py-1.5 bg-[#E6E6E6] text-[#8C877D] border border-[#D1D1D1] rounded flex items-center justify-center text-sm cursor-not-allowed"
                >
                  下一頁
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

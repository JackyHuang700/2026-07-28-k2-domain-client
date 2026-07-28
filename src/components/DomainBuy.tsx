import React from "react";
import {
  Globe,
  FolderOpen,
  Shield,
  Wallet,
  Receipt,
  Settings,
  LogOut,
  Search,
  Zap,
  ArrowRight,
} from "lucide-react";

interface DomainBuyProps {
  setCurrentPage: (page: string) => void;
  onLogout: () => void;
}

export default function DomainBuy({ setCurrentPage, onLogout }: DomainBuyProps) {
  return (
    <div className="h-screen w-screen flex items-center justify-center p-4 sm:p-6 bg-[#EBE9E4] text-[#2C2A29] font-sans">
      <div className="w-full h-full max-w-[1400px] rounded-2xl shadow-2xl flex overflow-hidden border border-[#E5E0D8] bg-white/75 backdrop-blur-md">
        {/* 左側邊欄 */}
        <aside className="w-64 bg-[#FAF8F5]/90 border-r border-[#E5E0D8] flex flex-col justify-between p-4 select-none shrink-0">
          <div>
            <div className="flex items-center space-x-2 mb-6 px-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
            </div>

            <div className="flex items-center space-x-3 px-2 mb-6">
              <div className="w-9 h-9 rounded-xl bg-[#2C2A29] text-white flex items-center justify-center font-bold text-sm shadow">
                K2
              </div>
              <div>
                <h1 className="font-bold text-sm text-[#2C2A29]">K2Net</h1>
                <p className="text-xs text-[#8C877D]">用戶中心</p>
              </div>
            </div>

            <nav className="space-y-1 text-sm">
              <div className="text-[#8C877D] text-xs font-semibold px-3 pt-2 pb-1">
                域名管理
              </div>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center justify-between px-3 py-2 rounded-lg transition-all bg-[#EFECE6] text-[#C05621] font-semibold"
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
                  setCurrentPage("my-domains");
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
                  setCurrentPage("wallet");
                }}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-[#524E4A] hover:bg-[#EFECE6] transition-all"
              >
                <span className="flex items-center space-x-2.5">
                  <Wallet size={16} />
                  <span>我的錢包</span>
                </span>
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage("order");
                }}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-[#524E4A] hover:bg-[#EFECE6] transition-all"
              >
                <span className="flex items-center space-x-2.5">
                  <Receipt size={16} />
                  <span>我的訂單</span>
                </span>
              </a>
            </nav>
          </div>
        </aside>

        {/* 右側內容區 */}
        <main className="flex-1 bg-[#EBE9E4]/30 flex flex-col overflow-y-auto">
          <header className="p-6 pb-2">
            <h2 className="text-2xl font-bold text-[#2C2A29] mb-6">購買域名</h2>

            <div className="flex items-center justify-center max-w-xl mx-auto mb-8 text-sm">
              <div className="flex items-center space-x-2 text-[#C05621] font-semibold">
                <span className="w-6 h-6 rounded-full bg-[#C05621] text-white flex items-center justify-center text-xs">
                  1
                </span>
                <span>選擇域名</span>
              </div>
              <div className="flex-1 h-[1px] bg-[#E5E0D8] mx-4"></div>
              <div className="flex items-center space-x-2 text-[#8C877D]">
                <span className="w-6 h-6 rounded-full bg-[#E5E0D8] text-[#8C877D] flex items-center justify-center text-xs">
                  2
                </span>
                <span>加購證書</span>
              </div>
              <div className="flex-1 h-[1px] bg-[#E5E0D8] mx-4"></div>
              <div className="flex items-center space-x-2 text-[#8C877D]">
                <span className="w-6 h-6 rounded-full bg-[#E5E0D8] text-[#8C877D] flex items-center justify-center text-xs">
                  3
                </span>
                <span>確認報價</span>
              </div>
            </div>
          </header>

          <div className="px-8 pb-8 flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative flex-1">
                  <Search
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C877D]"
                  />
                  <input
                    type="text"
                    placeholder="輸入想要的域名，例如 mybrand"
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5E0D8] rounded-xl text-sm focus:outline-none focus:border-[#C05621] focus:ring-1 focus:ring-[#C05621] shadow-sm transition-all"
                  />
                </div>
                <button className="bg-[#2C2A29] hover:bg-[#423E3C] text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all shadow-sm flex items-center space-x-2">
                  <span>查詢</span>
                </button>
                <button className="bg-[#EFECE6] hover:bg-[#E5E0D8] text-[#2C2A29] px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center space-x-1">
                  <Zap size={16} className="text-[#D97706]" />
                  <span>批量模式</span>
                </button>
              </div>

              <div className="border-2 border-dashed border-[#E5E0D8] rounded-2xl p-12 flex flex-col items-center justify-center text-center bg-white/40">
                <div className="w-12 h-12 rounded-full bg-[#EFECE6] flex items-center justify-center text-[#8C877D] mb-3">
                  <Search size={24} />
                </div>
                <p className="text-sm font-medium text-[#2C2A29] mb-1">
                  輸入關鍵字查詢可註冊的域名
                </p>
                <p className="text-xs text-[#8C877D]">
                  會自動列出所有後綴 (.com / .net / .vip ...)
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-5 border border-[#E5E0D8] shadow-sm space-y-4 sticky top-4">
                <h3 className="font-bold text-base text-[#2C2A29] border-b border-[#E5E0D8] pb-3">
                  報價摘要
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-[#524E4A]">
                    <span>域名 (0)</span>
                    <span className="font-medium">$0.00</span>
                  </div>
                  <div className="flex justify-between text-[#524E4A]">
                    <span>證書</span>
                    <span className="text-[#059669] font-medium">免費</span>
                  </div>
                </div>
                <div className="border-t border-[#E5E0D8] pt-3 flex items-baseline justify-between">
                  <span className="font-medium text-sm text-[#2C2A29]">
                    合計
                  </span>
                  <span className="text-2xl font-bold text-[#059669]">
                    $0.00
                  </span>
                </div>
                <div className="bg-[#FAF8F5] rounded-xl p-3 border border-[#E5E0D8] flex items-center justify-between text-xs text-[#8C877D]">
                  <span className="flex items-center space-x-1.5">
                    <Wallet size={14} className="text-[#C05621]" />
                    <span>錢包餘額</span>
                  </span>
                  <span className="font-semibold text-[#2C2A29]">
                    $348.50 USDT
                  </span>
                </div>
                <button
                  disabled
                  className="w-full bg-[#8C877D]/40 text-white font-medium py-3 rounded-xl text-sm cursor-not-allowed flex items-center justify-center space-x-2 transition-all"
                >
                  <span>下一步（已選 0）</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

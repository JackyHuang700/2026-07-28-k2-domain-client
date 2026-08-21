import { ArrowRight, KeyRound, LayoutGrid, Shield } from "lucide-react";
import type React from "react";
import { useState } from "react";

type LoginProps = {
	onLogin: () => void;
};

export default function Login({ onLogin }: LoginProps) {
	const [username, setUsername] = useState("demo");
	const [password, setPassword] = useState("demo");
	const [error, setError] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// 驗證邏輯：使用 demo / demo
		if (username === "demo" && password === "demo") {
			setError("");
			onLogin(); // 觸發登入成功，切換 App.jsx 狀態
		} else {
			setError("帳號或密碼錯誤，請使用 demo / demo 測試");
		}
	};

	return (
		// 外層滿版背景 (Warm Beige)
		<div className="h-screen w-screen flex items-center justify-center p-4 sm:p-6 bg-[#EBE9E4] text-[#2C2A29] font-sans">
			{/* macOS 主視窗容器 (固定高度的登入卡片) */}
			<div className="w-full max-w-[1000px] min-h-[600px] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-[#E5E0D8] bg-white/75 backdrop-blur-md">
				{/* 左側資訊欄 (對應截圖左側的文字介紹) */}
				<div className="hidden md:flex flex-col w-1/2 bg-[#FAF8F5]/90 border-r border-[#E5E0D8] p-10 relative">
					<div className="flex-1 flex flex-col justify-center">
						<div className="text-xs font-bold text-[#8C877D] tracking-widest uppercase mb-3">
							Customer Portal
						</div>
						<h1 className="text-3xl font-bold text-[#2C2A29] mb-4">
							K2 Domain Console
						</h1>
						<p className="text-sm text-[#524E4A] leading-relaxed mb-12">
							管理廠商帳戶與可用
							Apps。登入後即可查看帳戶摘要，並在後續流程自行搜尋與下單。
						</p>

						{/* 功能特色列表 */}
						<div className="space-y-6">
							<div className="flex items-start space-x-3 text-sm">
								<div className="w-6 h-6 rounded-full bg-[#E5E0D8] flex items-center justify-center text-[#524E4A] shrink-0 text-xs font-bold mt-0.5">
									1
								</div>
								<p className="text-[#2C2A29]">
									<span className="font-semibold">帳戶層級登入：</span>
									一組憑證對應整個廠商 Account
								</p>
							</div>
							<div className="flex items-start space-x-3 text-sm">
								<div className="w-6 h-6 rounded-full bg-[#E5E0D8] flex items-center justify-center text-[#524E4A] shrink-0 text-xs font-bold mt-0.5">
									2
								</div>
								<p className="text-[#2C2A29]">
									<span className="font-semibold">可用 Apps：</span>
									只顯示自訂名稱，不暴露內部識別碼
								</p>
							</div>
							<div className="flex items-start space-x-3 text-sm">
								<div className="w-6 h-6 rounded-full bg-[#E5E0D8] flex items-center justify-center text-[#524E4A] shrink-0 text-xs font-bold mt-0.5">
									3
								</div>
								<p className="text-[#2C2A29]">
									<span className="font-semibold">與員工後台完全分離：</span>
									安全獨立的 Session
								</p>
							</div>
						</div>
					</div>

					{/* 左下角環境標籤 */}
					<div className="mt-8 flex items-center space-x-2 text-xs text-[#8C877D]">
						<span>環境</span>
						<span className="px-2 py-0.5 border border-[#D1D1D1] rounded bg-white/50">
							Development
						</span>
					</div>
				</div>

				{/* 右側登入表單區塊 */}
				<div className="w-full md:w-1/2 flex flex-col justify-center p-10 lg:p-16 bg-white/60">
					<div className="max-w-sm w-full mx-auto">
						<h2 className="text-2xl font-bold text-[#2C2A29] mb-2">客戶登入</h2>
						<p className="text-sm text-[#8C877D] mb-8">
							使用廠商登入帳號與密碼進入 Portal
						</p>

						<form onSubmit={handleSubmit} className="space-y-5">
							{/* 帳號輸入框 */}
							<div className="space-y-1.5">
								<label className="text-xs font-semibold text-[#524E4A]">
									帳號
								</label>
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8C877D]">
										<Shield size={16} />
									</div>
									<input
										type="text"
										value={username}
										onChange={(e) => setUsername(e.target.value)}
										placeholder="輸入 demo"
										className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#D1D1D1] rounded-lg text-sm focus:outline-none focus:border-[#C05621] focus:ring-1 focus:ring-[#C05621] transition-all"
									/>
								</div>
							</div>

							{/* 密碼輸入框 */}
							<div className="space-y-1.5">
								<label className="text-xs font-semibold text-[#524E4A]">
									密碼
								</label>
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8C877D]">
										<KeyRound size={16} />
									</div>
									<input
										type="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										placeholder="輸入 demo"
										className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#D1D1D1] rounded-lg text-sm focus:outline-none focus:border-[#C05621] focus:ring-1 focus:ring-[#C05621] transition-all"
									/>
								</div>
							</div>

							{/* 錯誤提示訊息 */}
							{error && (
								<div className="text-[#E0443E] text-xs font-medium bg-[#FF5F56]/10 py-2 px-3 rounded border border-[#FF5F56]/20">
									{error}
								</div>
							)}

							{/* 登入按鈕 */}
							<button
								type="submit"
								className="w-full mt-4 bg-[#2C2A29] hover:bg-[#423E3C] text-white py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm flex justify-center items-center space-x-2"
							>
								<span>登入</span>
								<ArrowRight size={16} />
							</button>
						</form>

						<div className="mt-8 text-center border-t border-[#E5E0D8] pt-6">
							<p className="text-xs text-[#8C877D]">
								登入後可查看廠商資料與可用 Apps
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

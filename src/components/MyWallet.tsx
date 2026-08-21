import {
	ChevronLeft,
	ChevronRight,
	Cloud,
	FolderOpen,
	Globe,
	LogOut,
	Plus,
	Receipt,
	RefreshCw,
	Settings,
	Shield,
	Wallet,
} from "lucide-react";
import type React from "react";

type MyWalletProps = {
	setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
	onLogout: () => void;
};

export default function MyWallet({ setCurrentPage, onLogout }: MyWalletProps) {
	// 模擬帳本明細資料 (完美對應您的第一張截圖)
	const ledgerData = [
		{
			time: "2026/7/28 02:05:59",
			type: "結算",
			typeColor: "bg-[#0EA5E9]", // 藍色
			app: "XAEL-Ai-209013",
			order: "D0178520431989700007M0000",
			amount: "12.03 USD",
			availableAfter: "87.97 USD",
			frozenAfter: "0 USD",
		},
		{
			time: "2026/7/28 02:05:19",
			type: "凍結",
			typeColor: "bg-[#F59E0B]", // 橘黃色
			app: "XAEL-Ai-209013",
			order: "D0178520431989700007M0000",
			amount: "12.03 USD",
			availableAfter: "87.97 USD",
			frozenAfter: "12.03 USD",
		},
		{
			time: "2026/7/28 02:04:57",
			type: "儲值",
			typeColor: "bg-[#10B981]", // 綠色
			app: "—",
			order: "—",
			amount: "100 USD",
			availableAfter: "100 USD",
			frozenAfter: "0 USD",
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

							{/* 我的錢包 按鈕 */}
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

							{/* 我的訂單 按鈕 */}
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									setCurrentPage?.("order");
								}}
								className="flex items-center justify-between px-3 py-2 rounded-lg text-[#524E4A] hover:bg-[#EFECE6] transition-all"
							>
								<span className="flex items-center space-x-2.5">
									<Receipt size={16} />
									<span>我的訂單</span>
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

							{/* 💡👇 請把下面這段完整貼入這 4 個檔案的對應位置 👇💡 */}
							<div className="text-[#8C877D] text-xs font-semibold px-3 pt-4 pb-1">
								雲端服務
							</div>
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									setCurrentPage?.("cloud-proxy");
								}}
								className="flex items-center justify-between px-3 py-2 rounded-lg text-[#524E4A] hover:bg-[#EFECE6] transition-all"
							>
								<span className="flex items-center space-x-2.5">
									<Cloud size={16} />
									<span>雲端代購</span>
								</span>
							</a>
							{/* 💡👆 貼到這裡結束 👆💡 */}

							<div className="text-[#8C877D] text-xs font-semibold px-3 pt-4 pb-1">
								財務與訂單
							</div>
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
					<h2 className="text-2xl font-bold text-[#2C2A29] mb-6">我的錢包</h2>

					{/* 頂部深色高質感卡片 (整合兩張圖的資訊) */}
					<div className="bg-[#2C2A29] rounded-2xl p-8 mb-8 text-white relative overflow-hidden shadow-lg border border-[#423E3C]">
						{/* 背景裝飾圓形 */}
						<div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

						<div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
							{/* 左側：核心餘額 */}
							<div className="space-y-4">
								<div className="flex items-center space-x-2 text-[#D1D1D1]">
									<Wallet size={16} />
									<span className="text-sm font-medium tracking-wider">
										可用餘額 (USD)
									</span>
								</div>
								<div className="flex items-baseline space-x-2">
									<span className="text-5xl font-bold tracking-tight">
										87.97
									</span>
									<span className="text-xl text-[#A3A3A3] font-medium">
										USD
									</span>
								</div>

								{/* 合併圖一的「已凍結」與「總金額」資訊 */}
								<div className="flex items-center space-x-6 text-sm text-[#A3A3A3] pt-2">
									<div className="flex flex-col">
										<span className="text-[#8C877D] text-xs">已凍結</span>
										<span className="font-medium text-[#E5E0D8]">0 USD</span>
									</div>
									<div className="w-px h-6 bg-white/10"></div>
									<div className="flex flex-col">
										<span className="text-[#8C877D] text-xs">總金額</span>
										<span className="font-medium text-[#E5E0D8]">
											87.97 USD
										</span>
									</div>
								</div>
							</div>

							{/* 右側：消費統計與儲值按鈕 (來自圖二) */}
							<div className="flex flex-col items-end space-y-6">
								<div className="flex space-x-6 text-sm">
									<div className="text-right">
										<div className="text-[#8C877D] text-xs mb-1">
											已儲值總額
										</div>
										<div className="font-medium text-[#E5E0D8]">100 USD</div>
									</div>
									<div className="text-right">
										<div className="text-[#8C877D] text-xs mb-1">
											已消費總額
										</div>
										<div className="font-medium text-[#E5E0D8]">12.03 USD</div>
									</div>
								</div>

								<button className="bg-white text-[#2C2A29] hover:bg-[#E5E0D8] px-6 py-2.5 rounded-lg text-sm font-bold transition-colors flex items-center space-x-2 shadow-sm">
									<Plus size={16} />
									<span>立即儲值</span>
								</button>
							</div>
						</div>
					</div>

					{/* 帳本明細區塊 */}
					<div className="flex flex-col flex-1">
						<div className="flex justify-between items-end mb-4">
							<h3 className="text-lg font-bold text-[#2C2A29]">帳本明細</h3>

							{/* 右側篩選器 (來自圖一) */}
							<div className="flex items-end space-x-3">
								<div className="flex flex-col space-y-1.5">
									<label className="text-xs font-semibold text-[#524E4A]">
										App
									</label>
									<select className="border border-[#D1D1D1] bg-white rounded px-3 py-1.5 text-sm text-[#2C2A29] focus:outline-none min-w-[140px] shadow-sm">
										<option>全部 App</option>
										<option>XAEL-Ai-209013</option>
									</select>
								</div>

								<div className="flex flex-col space-y-1.5">
									<label className="text-xs font-semibold text-[#524E4A]">
										類型
									</label>
									<select className="border border-[#D1D1D1] bg-white rounded px-3 py-1.5 text-sm text-[#2C2A29] focus:outline-none min-w-[140px] shadow-sm">
										<option>全部類型</option>
										<option>結算</option>
										<option>凍結</option>
										<option>儲值</option>
									</select>
								</div>

								<button className="text-[#2C2A29] hover:text-[#524E4A] font-medium text-sm px-3 h-[34px] flex items-center space-x-1 transition-colors">
									<RefreshCw size={14} />
									<span>重新整理</span>
								</button>
							</div>
						</div>

						{/* 明細表格 (白底卡片) */}
						<div className="bg-white border border-[#E5E0D8] shadow-sm rounded-xl flex-1 flex flex-col overflow-hidden">
							<div className="overflow-x-auto flex-1">
								<table className="w-full text-left whitespace-nowrap">
									<thead className="border-b border-[#E5E0D8] bg-[#FAF8F5]/50">
										<tr>
											<th className="py-4 px-6 text-[#8C877D] text-xs font-semibold tracking-wider">
												時間
											</th>
											<th className="py-4 px-6 text-[#8C877D] text-xs font-semibold tracking-wider">
												類型
											</th>
											<th className="py-4 px-6 text-[#8C877D] text-xs font-semibold tracking-wider">
												App
											</th>
											<th className="py-4 px-6 text-[#8C877D] text-xs font-semibold tracking-wider">
												訂單
											</th>
											<th className="py-4 px-6 text-[#8C877D] text-xs font-semibold tracking-wider text-right">
												金額
											</th>
											<th className="py-4 px-6 text-[#8C877D] text-xs font-semibold tracking-wider text-right">
												可用後
											</th>
											<th className="py-4 px-6 text-[#8C877D] text-xs font-semibold tracking-wider text-right">
												凍結後
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-[#E5E0D8]">
										{ledgerData.map((row, index) => (
											<tr
												key={index}
												className="hover:bg-[#F7F5F0]/50 transition-colors"
											>
												<td className="py-4 px-6 text-sm text-[#524E4A]">
													{row.time}
												</td>
												<td className="py-4 px-6">
													<span
														className={`${row.typeColor} text-white px-2.5 py-1 rounded-md text-xs font-medium tracking-wide`}
													>
														{row.type}
													</span>
												</td>
												<td className="py-4 px-6 text-sm text-[#2C2A29] font-medium">
													{row.app}
												</td>
												<td className="py-4 px-6 text-sm text-[#524E4A] font-mono">
													{row.order}
												</td>
												<td className="py-4 px-6 text-sm text-[#2C2A29] text-right font-medium">
													{row.amount}
												</td>
												<td className="py-4 px-6 text-sm text-[#2C2A29] text-right">
													{row.availableAfter}
												</td>
												<td className="py-4 px-6 text-sm text-[#524E4A] text-right">
													{row.frozenAfter}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>

							{/* 底部筆數與分頁 */}
							<div className="p-4 flex justify-between items-center border-t border-[#E5E0D8] bg-white">
								<span className="text-sm text-[#8C877D]">共 3 筆</span>
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
					</div>
				</main>
			</div>
		</div>
	);
}

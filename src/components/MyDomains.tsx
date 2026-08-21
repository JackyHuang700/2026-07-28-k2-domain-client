import {
	Cloud,
	FolderOpen,
	Globe,
	LogOut,
	Receipt,
	Settings,
	Shield,
	Wallet,
} from "lucide-react";
import type React from "react";

type MyDomainsProps = {
	setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
	onLogout?: () => void;
};

export default function MyDomains({
	setCurrentPage,
	onLogout,
}: MyDomainsProps) {
	const mockData = [
		{
			assetId: "DA178520435922300007M0000",
			domain: "skj168.com",
			app: "XAEL-Ai-209013",
			status: "使用中",
			purchaseTime: "2026/7/28 02:05:00",
			expireTime: "2027/7/28 02:05:00",
		},
	];

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
								onClick={(e) => {
									e.preventDefault();
									setCurrentPage("purchase");
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
								onClick={(e) => e.preventDefault()}
								className="flex items-center justify-between px-3 py-2 rounded-lg transition-all bg-[#EFECE6] text-[#C05621] font-semibold"
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
								className="cursor-pointer hover:text-[#C05621] transition-colors"
							/>
						</div>
					</div>
				</aside>

				{/* 右側表格內容區 */}
				<main className="flex-1 bg-[#EBE9E4]/30 flex flex-col overflow-hidden p-8">
					<div className="flex justify-between items-end mb-6">
						<h2 className="text-xl font-bold text-[#2C2A29]">網域資產</h2>

						<div className="flex items-end space-x-3">
							<div className="flex flex-col space-y-1.5">
								<label className="text-xs font-semibold text-[#524E4A]">
									App
								</label>
								<select className="border border-[#D1D1D1] bg-white rounded px-3 py-1.5 text-sm text-[#2C2A29] focus:outline-none min-w-[130px]">
									<option>全部 App</option>
									<option>XAEL-Ai-209013</option>
								</select>
							</div>

							<div className="flex flex-col space-y-1.5">
								<label className="text-xs font-semibold text-[#524E4A]">
									狀態
								</label>
								<select className="border border-[#D1D1D1] bg-white rounded px-3 py-1.5 text-sm text-[#2C2A29] focus:outline-none min-w-[130px]">
									<option>全部狀態</option>
									<option>使用中</option>
								</select>
							</div>

							<div className="flex flex-col space-y-1.5">
								<label className="text-xs font-semibold text-[#524E4A]">
									網域關鍵字
								</label>
								<input
									type="text"
									placeholder="example.com"
									className="border border-[#D1D1D1] bg-white rounded px-3 py-1.5 text-sm focus:outline-none min-w-[180px]"
								/>
							</div>

							<button className="bg-[#3B6BE4] hover:bg-[#2C52B5] text-white px-5 py-1.5 rounded text-sm font-medium transition-colors h-[34px]">
								查詢
							</button>
							<button className="text-[#2C2A29] hover:text-[#524E4A] font-medium text-sm px-2 h-[34px] flex items-center transition-colors">
								重新整理
							</button>
						</div>
					</div>

					<div className="bg-white border border-[#E5E0D8] shadow-sm rounded flex-1 flex flex-col overflow-hidden">
						<div className="overflow-x-auto flex-1">
							<table className="w-full text-left whitespace-nowrap">
								<thead className="border-b border-[#E5E0D8]">
									<tr>
										<th className="py-4 px-6 text-[#524E4A] text-sm font-semibold">
											資產編號
										</th>
										<th className="py-4 px-6 text-[#524E4A] text-sm font-semibold">
											網域
										</th>
										<th className="py-4 px-6 text-[#524E4A] text-sm font-semibold">
											App
										</th>
										<th className="py-4 px-6 text-[#524E4A] text-sm font-semibold">
											狀態
										</th>
										<th className="py-4 px-6 text-[#524E4A] text-sm font-semibold">
											購買時間
										</th>
										<th className="py-4 px-6 text-[#524E4A] text-sm font-semibold">
											到期時間
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-[#E5E0D8]">
									{mockData.map((row, index) => (
										<tr
											key={index}
											className="hover:bg-[#F7F5F0]/50 transition-colors"
										>
											<td className="py-4 px-6 text-sm text-[#2C2A29] font-mono">
												{row.assetId}
											</td>
											<td className="py-4 px-6 text-sm text-[#2C2A29]">
												{row.domain}
											</td>
											<td className="py-4 px-6 text-sm text-[#2C2A29]">
												{row.app}
											</td>
											<td className="py-4 px-6">
												<span className="bg-[#0FA958] text-white px-2 py-0.5 rounded text-xs font-medium">
													{row.status}
												</span>
											</td>
											<td className="py-4 px-6 text-sm text-[#524E4A]">
												{row.purchaseTime}
											</td>
											<td className="py-4 px-6 text-sm text-[#524E4A]">
												{row.expireTime}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						<div className="p-4 flex justify-end items-center space-x-2 border-t border-[#E5E0D8]">
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
				</main>
			</div>
		</div>
	);
}

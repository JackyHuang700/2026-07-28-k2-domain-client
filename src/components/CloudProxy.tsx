import {
	ArrowRight,
	CheckCircle2,
	Cloud,
	Database,
	FolderOpen,
	Globe,
	Info,
	LogOut,
	Receipt,
	Server,
	Settings,
	Shield,
	Wallet,
} from "lucide-react";
import type React from "react";
import { useState } from "react";

export default function CloudProxy({
	setCurrentPage,
	onLogout,
}: {
	setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
	onLogout: () => void;
}) {
	const [selectedCloud, setSelectedCloud] = useState("");
	const telegramUrl = "https://t.me/k2cloudproxy";

	const cloudProviders = [
		{
			id: "aliyun",
			name: "阿里雲",
			subtitle: "Alibaba Cloud",
			icon: <Server className="text-[#FF6A00]" size={32} />,
			description:
				"亞太區市佔第一，提供強大的運算資源與極佳的亞洲節點連線品質。",
			features: ["免實名認證開通", "無縫對接阿里防護", "USDT即充即用"],
		},
		{
			id: "tencent",
			name: "騰訊雲",
			subtitle: "Tencent Cloud",
			icon: <Cloud className="text-[#0052D9]" size={32} />,
			description:
				"優質的中國大陸直連線路，特別適合影音、遊戲與社群產業解決方案。",
			features: ["專屬大客戶通道", "免綁定信用卡", "USDT即充即用"],
		},
		{
			id: "aws",
			name: "AWS",
			subtitle: "Amazon Web Services",
			icon: <Database className="text-[#FF9900]" size={32} />,
			description:
				"全球最廣泛使用的雲端平台，擁有最豐富的產品線與全球基礎設施。",
			features: ["跨區域部署首選", "企業級帳號權限", "免除繁瑣註冊流程"],
		},
		{
			id: "other",
			name: "其他需求",
			subtitle: "Custom Solution",
			icon: <Info className="text-[#8B5CF6]" size={32} />,
			description: "包含 GCP、華為雲、混合雲規劃或各式客製化雲端架構需求。",
			features: ["一對一專人諮詢", "多雲架構整合", "專屬技術支持"],
		},
	];

	const selectedProviderName = cloudProviders.find(
		(p) => p.id === selectedCloud,
	)?.name;

	const handleApplyClick = () => {
		if (selectedCloud) {
			const message = encodeURIComponent(
				`您好，我想諮詢/申請 ${selectedProviderName} (${selectedCloud}) 相關雲端代理服務。`,
			);
			const fullUrl = `${telegramUrl}?text=${message}`;
			window.open(fullUrl, "_blank", "noopener,noreferrer");
		}
	};

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

						<nav className="space-y-1 text-sm overflow-y-auto pr-2 pb-4">
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
								雲端服務
							</div>
							<a
								href="#"
								onClick={(e) => e.preventDefault()}
								className="flex items-center justify-between px-3 py-2 rounded-lg transition-all bg-[#EFECE6] text-[#C05621] font-semibold"
							>
								<span className="flex items-center space-x-2.5">
									<Cloud size={16} />
									<span>雲端代購</span>
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
						</nav>
					</div>

					<div className="border-t border-[#E5E0D8] pt-3 space-y-1 mt-2">
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
				<main className="flex-1 bg-[#EBE9E4]/30 flex flex-col p-8 lg:p-10 relative overflow-hidden">
					<div className="flex-1 overflow-y-auto pb-24">
						<div className="mb-10 max-w-3xl">
							<h2 className="text-3xl font-bold text-[#2C2A29] mb-3">
								雲端代購 (即將推出🔥)
							</h2>
							<p className="text-[#524E4A] text-base leading-relaxed">
								透過 K2Net
								專屬渠道為您一鍵開通各大雲端平台子帳號，折扣業界最優。免除繁瑣的企業實名認證與信用卡綁定流程，各式消費與需求皆由專屬窗口
								24 小時為您服務。
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{cloudProviders.map((provider) => {
								const isSelected = selectedCloud === provider.id;

								return (
									<div
										key={provider.id}
										onClick={() => setSelectedCloud(provider.id)}
										className={`cursor-pointer bg-white rounded-2xl p-6 border transition-all flex flex-col relative overflow-hidden group ${isSelected ? "border-[#C05621] shadow-md ring-1 ring-[#C05621]" : "border-[#E5E0D8] shadow-sm hover:shadow-md"}`}
									>
										<div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F7F5F0] rounded-full blur-3xl opacity-50 group-hover:bg-[#EFECE6] transition-colors"></div>

										{isSelected && (
											<div className="absolute top-5 right-5 text-[#C05621] bg-white rounded-full">
												<CheckCircle2 size={24} className="fill-[#C05621]/10" />
											</div>
										)}

										<div className="relative z-10 flex-1 flex flex-col">
											<div className="w-14 h-14 rounded-xl bg-[#FAF8F5] flex items-center justify-center border border-[#E5E0D8] mb-5 shadow-sm">
												{provider.icon}
											</div>

											<h3 className="text-xl font-bold text-[#2C2A29]">
												{provider.name}
											</h3>
											<p className="text-xs text-[#8C877D] tracking-wider mb-4 font-mono">
												{provider.subtitle}
											</p>
											<p className="text-sm text-[#524E4A] mb-6 leading-relaxed flex-1">
												{provider.description}
											</p>

											<div className="space-y-3 bg-[#FAF8F5] p-4 rounded-xl border border-[#E5E0D8]/50">
												{provider.features.map((feat, idx) => (
													<div
														key={idx}
														className="flex items-center space-x-2.5 text-sm text-[#2C2A29]"
													>
														<CheckCircle2
															size={16}
															className="text-[#10B981]"
														/>
														<span className="font-medium">{feat}</span>
													</div>
												))}
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					{/* 底端申請按鈕列 */}
					<div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-[#E5E0D8] p-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between z-20">
						<p className="text-sm text-[#8C877D] font-medium mb-4 sm:mb-0">
							{selectedCloud
								? `您已選擇：${selectedProviderName}`
								: "請點擊上方卡片，選擇您需要的雲端平台或服務。"}
						</p>

						<button
							onClick={handleApplyClick}
							disabled={!selectedCloud}
							className={`px-8 py-3 rounded-xl text-sm font-bold transition-all shadow-sm flex items-center justify-center space-x-2 ${selectedCloud ? "bg-[#2C2A29] hover:bg-[#423E3C] text-white cursor-pointer" : "bg-[#E6E6E6] text-[#A3A3A3] cursor-not-allowed border border-[#D1D1D1]"}`}
						>
							<span>
								{selectedCloud
									? `聯繫我們開通/諮詢 ${selectedProviderName}`
									: "聯繫我們，專人為您服務"}
							</span>
							<ArrowRight size={16} />
						</button>
					</div>
				</main>
			</div>
		</div>
	);
}

declare module "./components/DomainBuy" {
  const DomainBuy: any;
  export default DomainBuy;
}

declare module "./components/CloudProxy" {
  const CloudProxy: any;
  export default CloudProxy;
}

// Fallback for any other .jsx imports (if used elsewhere)
declare module "*.jsx" {
  const value: any;
  export default value;
}

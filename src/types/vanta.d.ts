declare module "vanta/dist/vanta.fog.min" {
  const effect: (options: Record<string, unknown>) => {
    destroy: () => void;
    resize?: () => void;
  };
  export default effect;
}

declare module "vanta/dist/vanta.fog.min.js" {
  const effect: (options: Record<string, unknown>) => {
    destroy: () => void;
    resize?: () => void;
  };
  export default effect;
}

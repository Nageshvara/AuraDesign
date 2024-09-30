import { VelocityScroll } from "./ui/scroll-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Free Shipping Worldwide."
      default_velocity={3}
      className="font-display text-center text-2xl font-bold tracking-[-0.02em] drop-shadow-sm text-[#212427] md:text-3xl mt-20"
    />
  );
}

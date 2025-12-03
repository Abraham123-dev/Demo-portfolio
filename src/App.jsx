import Navbar from "./components/navbar";
import Section from "./components/section";

export default function App() {
  return (
    <div className="flex flex-col h-screen w-full px-8 py-8 md:px-28 gap-16 min-h-screen w-full bg-[#f8fafc] relative">
      {/* Top Fade Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />
         <Navbar />
      <Section />
    </div>
  );
}

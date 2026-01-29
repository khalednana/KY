import exportMap from '../../MAP.png';

const ExportMap = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Map Container */}
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-primary-foreground/20 shadow-2xl">
        {/* Map Background */}
        <img
          src={exportMap}
          alt="Export destinations map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Destinations list */}
      <div className="mt-6 text-center text-xs md:text-sm text-primary-foreground/80 space-y-2">
        <p className="font-semibold tracking-wide uppercase text-[11px] md:text-xs text-muted-foreground">
          Current export destinations
        </p>
        <p className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <span>🇬🇷 Greece</span>
          <span>🇮🇹 Italy</span>
          <span>🇪🇸 Spain</span>
          <span>🇩🇪 Germany</span>
          <span>🇭🇷 Croatia</span>
          <span>🇺🇦 Ukraine</span>
          <span>🇨🇾 Cyprus</span>
          <span>🇲🇶 Martinique</span>
          <span>🇹🇷 Turkey</span>
          <span>🇷🇺 Russia</span>
          <span>🇱🇧 Lebanon</span>
          <span>🇦🇪 United Arab Emirates</span>
          <span>🇸🇦 Saudi Arabia</span>
          <span>🇱🇾 Libya</span>
          <span>🇸🇾 Syria</span>
        </p>
      </div>
    </div>
  );
};

export default ExportMap;

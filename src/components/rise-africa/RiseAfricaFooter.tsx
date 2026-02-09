const RiseAfricaFooter = () => (
  <footer className="w-full border-t border-border py-12 px-6 md:px-[calc(18vw-10rem)]">
    <div className="max-w-[138rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-[1.4rem] text-muted-foreground">
        Rise Africa is an initiative of <span className="font-semibold text-foreground">Elevate My Skill (EMS)</span>
      </p>
      <div className="flex flex-wrap gap-6">
        <a href="#quick-connect" className="text-[1.4rem] font-medium text-accent hover:opacity-80 transition-opacity">
          Partner With Rise Africa
        </a>
        <a href="#quick-connect" className="text-[1.4rem] font-medium text-accent hover:opacity-80 transition-opacity">
          Quick Connect
        </a>
        <a href="#courses" className="text-[1.4rem] font-medium text-accent hover:opacity-80 transition-opacity">
          Explore EMS Global Programs
        </a>
      </div>
    </div>
  </footer>
);

export default RiseAfricaFooter;

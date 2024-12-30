

const CopartnersSliding = ({items}:{items:string[]}) => {
  return (
    <div className="relative font-inter antialiased py-20">
      <main className="relative flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-partners">
                {[...items, ...items].map((partner, index) => (
                  <li key={index}>
                    <img className="h-10" src={partner} alt="Partner logo" />
                  </li>
                ))}
              </ul>
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-partners">
                {[...items, ...items].map((partner, index) => (
                  <li key={index}>
                    <img className="h-10" src={partner} alt="Partner logo" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CopartnersSliding;

import React from 'react';

class Map extends React.Component {
  render() {
    return (
      <>
        <section>
          <div className="px-6 py-12 md:px-12 text-slate-700 text-center lg:text-left">
            <div className="container mx-auto xl:px-32">
              <div className="mt-48 flex flex-col items-center justify-center z-10">
                <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0 z-10">
                  <div
                    id="heroBlock2"
                    className="block rounded-lg shadow-lg px-6 py-14 md:px-12"
                  >
                    <h2 className="font-bold tracking-tight text-center text-slate-700 w-96">
                      <span>Map is coming soon...</span></h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Map;
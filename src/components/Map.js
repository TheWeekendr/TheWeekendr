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

{/* <div
  id="innerEventCard"
  className="rounded-lg shadow-lg bg-white max-w-sm text-center h-100"
>
  <div className="py-3 px-6 border-b border-slate-400">
    {event.date.when}
  </div>
  <div className="w-full">
    <img
      className="d-block object-cover h-44 mx-auto p-2 rounded-xl mt-3"
      src={event.image}
      alt="eventImg"
    />
  </div>
  <div className="p-6 h-72">
    <h5 className="text-gray-900 text-xl font-medium mb-2 border-t border-b border-slate-400 py-2">
      {event.title}
    </h5>
    <p className="text-gray-700 text-base">{event.address[0]}</p>
    <p className="text-gray-700 text-base mb-3">
      {event.address[1]}
    </p>
    <small>{event.description}</small>
  </div>
  <div className="sticky bottom py-3 px-6 border-t border-slate-400">
    <Button
      block
      appearance="default"
      size="md"
      href={event.ticket_info[0].link}
      type="link"
      target="_blank"
      rel="noreferrer noopener"
    >
      Tickets
    </Button>
  </div>
</div> */}
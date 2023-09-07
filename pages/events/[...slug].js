import { useRouter } from "next/router";

import { EventList, Button, ErrorAlert } from "../../components";

import { getFilteredEvents } from "../../dummy-data";

function FilteredEventsPage() {
  const router = useRouter();
  const filteredData = router?.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  const [year, month] = filteredData;
  const numYear = Number(year);
  const numMonth = Number(month);

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Invalid filter. please adjust your valuse!</p>
        </ErrorAlert>
        <div className="center">
          <Button link={"/events"}>SHow All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p className="center">No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link={"/events"}>Show All Events</Button>
        </div>
      </>
    );
  }

  return <EventList items={filteredEvents} />;
}

export default FilteredEventsPage;

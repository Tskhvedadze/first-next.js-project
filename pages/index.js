import { EventList } from "../components";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <EventList items={featuredEvents} />
    </>
  );
}

export default HomePage;

import { useRouter } from "next/router";
import { EventList, EventSearch } from "../components";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const router = useRouter();
  const featuredEvents = getFeaturedEvents();

  const findEventHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={featuredEvents} />
    </>
  );
}

export default HomePage;

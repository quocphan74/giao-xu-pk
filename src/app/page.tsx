"use client"
import EventCard from "@/components/EventCard";
import MediaCard from "@/components/MediaCard";
import Section from "@/components/Section";
import { newsData, sermonsData, announcementsData, liturgicalWeekData, mediaData } from '../data/data';
import CustomCarousel from "@/components/Carousel";
import SeeAllLink from "@/components/SeeAllLink";
import { LISTNUMBER, SEEALLTEXT, TITLESECTION } from "@/constants/constants";
import Card from "@/components/Card";
import NotificationCard from "@/components/Notification";

import SkeletonCard from "@/components/keletonCard";
import useNews from "@/hooks/useNews";
import useSermons from "@/hooks/useSermons";
import useMassSchedules from "@/hooks/useMassSchedules";
type t = {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
};
export default function Home() {
  const { data: mappedSermons, loading: sermonLoading } = useSermons(1);
  const { data, totalPages, loading, error } = useNews(1);
  const { massSchedules, massSchedulesTotalPages, massSchedulesLoading, massSchedulesError } = useMassSchedules(1);

  return (
    <>
      <CustomCarousel />
      <main className="container mx-auto p-4 flex-1">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3 space-y-6">
            <Section title={TITLESECTION.NEWS}>
              {loading ? (
                Array.from({ length: LISTNUMBER.COUNT_LOADER }).map((_, idx) => <SkeletonCard key={idx} />)
              ) : (
                data.map((news) => <Card key={news.id} {...news} />)
              )}
              <SeeAllLink href={SEEALLTEXT.NEWS.url} label={SEEALLTEXT.NEWS.label} />
            </Section>

            <Section title={TITLESECTION.SERMON}>
              {sermonLoading ? (
                Array.from({ length: LISTNUMBER.COUNT_LOADER }).map((_, idx) => <SkeletonCard key={idx} />)
              ) : (
                mappedSermons.map((sermon) => <Card key={sermon.id} {...sermon} />)
              )}
              <SeeAllLink href={SEEALLTEXT.SERMON.url} label={SEEALLTEXT.SERMON.label} />
            </Section>
          </div>
          <div className="lg:w-1/3 space-y-6">
            <Section title={TITLESECTION.NOTIFY} height="max-h-96">
              {announcementsData.map((announcement) => (
                <NotificationCard key={announcement.id} {...announcement} />
              ))}
            </Section>

            <Section title={TITLESECTION.EVENT} height="max-h-96">
              {massSchedulesLoading ? (
                Array.from({ length: LISTNUMBER.COUNT_LOADER }).map((_, idx) => <SkeletonCard key={idx} />)
              ) : (
                massSchedules.map((event) => (
                <EventCard key={event.id} event={event} />))
              )}
              
            </Section>
            <Section title={TITLESECTION.MEDIA}>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
                {mediaData.map((media) => (
                  <MediaCard key={media.id} {...media} />
                ))}
              </div>
            </Section>
          </div>
        </div>
      </main>
    </>
  );
}

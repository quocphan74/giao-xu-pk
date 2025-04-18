import AnnouncementCard from "@/components/AnnouncementCard";
import EventCard from "@/components/EventCard";
import MediaCard from "@/components/MediaCard";
import NewsCard from "@/components/NewsCard";
import Section from "@/components/Section";
import SermonCard from "@/components/SermonCard";
import { newsData, sermonsData, announcementsData, eventsData, mediaData } from '../data/data';

export default function Home() {
  return (
    <main className="container mx-auto p-4 flex-1">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3 space-y-6">
          <Section title="Tin tức">
            {newsData.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </Section>
          <Section title="Bài giảng mới / Lời Chúa hàng tuần">
            {sermonsData.map((sermon) => (
              <SermonCard key={sermon.id} {...sermon} />
            ))}
          </Section>
        </div>
        <div className="lg:w-1/3 space-y-6">
          <Section title="Thông báo">
            {announcementsData.map((announcement) => (
              <AnnouncementCard key={announcement.id} {...announcement} />
            ))}
          </Section>
          <Section title="Lịch lễ & Sự kiện sắp tới">
            {eventsData.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </Section>
          <Section title="Thư viện hình ảnh/video mới nhất">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              {mediaData.map((media) => (
                <MediaCard key={media.id} {...media} />
              ))}
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}

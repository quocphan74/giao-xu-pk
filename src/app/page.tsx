import AnnouncementCard from "@/components/AnnouncementCard";
import EventCard from "@/components/EventCard";
import MediaCard from "@/components/MediaCard";
import Section from "@/components/Section";
import { newsData, sermonsData, announcementsData, eventsData, mediaData} from '../data/data';
import CustomCarousel from "@/components/Carousel";
import SeeAllLink from "@/components/SeeAllLink";
import {SEEALLTEXT, TITLESECTION} from "@/constants/constants";
import Card from "@/components/Card";
import { CardProps, News, Sermon } from "../utils/interface";
export default function Home() {
  // const newsToCardProps = (news: News): CardProps => {
  //   const textItem = news.content.find((item) => item.type === 'text');
  //   const imageItem = news.content.find((item) => item.type === 'image');
    
  //   return {
  //     id: news.id,
  //     title: news.title,
  //     date: news.date,
  //     text: textItem?.value || '',
  //     image: imageItem
  //       ? { src: imageItem.src!, alt: imageItem.alt || news.title }
  //       : undefined,
  //     linkPath: SEEALLTEXT.NEWS.url,
  //   };
  // };
  const newsToCardProps = ({ id, title, date, content }: News): CardProps => {
    const text = content.find((item) => item.type === 'text')?.value || '';
    const imageItem = content.find((item) => item.type === 'image');
    const image = imageItem ? { src: imageItem.src!, alt: imageItem.alt || title } : undefined;

    return { id, title, date, text, image, linkPath: SEEALLTEXT.NEWS.url };
};
  const newsCards: CardProps[] = newsData.map(newsToCardProps);
  const sermonToCardProps = ({ id, title, date, description, image }: Sermon): CardProps => ({
    id,
    title,
    date,
    text: description,
    image: { src: image.url, alt: image.alt_text },
    linkPath: SEEALLTEXT.SERMON.url,
  });

  const sermonCards: CardProps[] = sermonsData.map(sermonToCardProps);
  return (
    <>
      <CustomCarousel />
      <main className="container mx-auto p-4 flex-1">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3 space-y-6">
            <Section title={TITLESECTION.NEWS}>
              {newsCards.map((news) => (
                <Card key={news.id} {...news} />
              ))}
              <SeeAllLink href={SEEALLTEXT.NEWS.url} label={SEEALLTEXT.NEWS.label} />
            </Section>
            <Section title={TITLESECTION.SERMON}>
              {sermonCards.map((sermon) => (
                <Card key={sermon.id} {...sermon} />
              ))}
              <SeeAllLink href={SEEALLTEXT.SERMON.url} label={SEEALLTEXT.SERMON.label} />
            </Section>
          </div>
          <div className="lg:w-1/3 space-y-6">
            <Section title={TITLESECTION.NOTIFY} height="max-h-96">
              {announcementsData.map((announcement) => (
                <AnnouncementCard key={announcement.id} {...announcement} />
              ))}
            </Section>
            <Section title={TITLESECTION.EVENT} height="max-h-96">
              {eventsData.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
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

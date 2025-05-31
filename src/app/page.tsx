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
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import SkeletonCard from "@/components/keletonCard";
import { News } from "@/types/news";
import { CardProps } from "@/types/cardProps";
import { Sermon } from "@/types/sermon";
import useNews from "@/hooks/useNews";
import useSermons from "@/hooks/useSermons";
type t = {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
};
export default function Home() {
  const { sermons, sermonsTotalPages, sermonLoading, sermonError } = useSermons(1);
  const { news, totalPages, loading, error } = useNews(1);
  const mapNewsToCardProps = (news: News): CardProps => ({
    id: news.id,
    title: news.title,
    date: news.created_at || '',
    text: news.news_blocks?.[0]?.content || '',
    image: news.news_blocks?.[0]?.news_block_images
      ?.map(img => img.image)
      .filter((img) => !!img),
    linkPath: SEEALLTEXT.NEWS.url
  });


  const mapSermonToCardProps = (sermon: Sermon): CardProps => ({
    id: sermon.id,
    title: sermon.title,
    date: sermon.created_at || '',
    text: sermon.sermon_blocks?.[0]?.content || '',
    image: sermon.sermon_blocks?.[0]?.sermon_block_images
      ?.map(img => img.image)
      .filter((img) => !!img),
    linkPath: SEEALLTEXT.SERMON.url
  });

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
                news.map((news) => <Card key={news.id} {...mapNewsToCardProps(news)} />)
              )}
              <SeeAllLink href={SEEALLTEXT.NEWS.url} label={SEEALLTEXT.NEWS.label} />
            </Section>

            <Section title={TITLESECTION.SERMON}>
              {sermonLoading ? (
                Array.from({ length: LISTNUMBER.COUNT_LOADER }).map((_, idx) => <SkeletonCard key={idx} />)
              ) : (
                sermons.map((sermon) => <Card key={sermon.id} {...mapSermonToCardProps(sermon)} />)
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
              {liturgicalWeekData.map((event) => (
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

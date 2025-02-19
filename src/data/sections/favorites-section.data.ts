import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'My favorites',
    slug: 'favorites',
    icon: 'fa6-solid:star',
    visible: true,
  },
  books: {
    title: 'Books I read',
    data: [
      {
        image: import('@/assets/favorites/books/book-1.jpeg'),
        title: 'The Pragmatic Programmer: From Journeyman to Master',
        author: 'Andy Hunt, Dave Thomas',
        url: 'https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer',
      },
      {
        image: import('@/assets/favorites/books/book-2.jpg'),
        title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
        author: 'Eric Evans',
        url: 'https://www.goodreads.com/book/show/179133.Domain_Driven_Design',
      },
      {
        image: import('@/assets/favorites/books/seen.jpg'),
        title: 'Have You Seen Her',
        author: 'Lisa Hall',
        url: 'https://www.goodreads.com/book/show/42170560-have-you-seen-her?from_search=true&from_srp=true&qid=qH3r1sorBb&rank=4',
      },
      {
        image: import('@/assets/favorites/books/gone-girl.jpg'),
        title: 'Gone Girl',
        author: 'Gillian Flynn',
        url: 'https://www.goodreads.com/book/show/19288043-gone-girl',
      },
    ],
  },
  videos: {
    title: 'Videos I watched',
    data: [
      {
        image: import('@/assets/favorites/videos/video-1.jpeg'),
        title: 'Building Resilient Frontend Architecture • Monica Lent • GOTO 2019',
        url: 'https://youtu.be/TqfbAXCCVwE',
      },
      {
        image: import('@/assets/favorites/videos/video-2.jpeg'),
        title: 'Scaling Yourself • Scott Hanselman • GOTO 2012',
        url: 'https://youtu.be/FS1mnISoG7U',
      },
      {
        image: import('@/assets/favorites/videos/video-3.jpeg'),
        title: "Why Isn't Functional Programming the Norm? - Richard Feldman",
        url: 'https://youtu.be/QyJZzq0v7Z4',
      },
    ],
  },
  medias: {
    title: 'Media I follow',
    data: [
      {
        image: import('@/assets/favorites/media/media-1.jpeg'),
        title: 'Fireship.io',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/c/Fireship',
      },

      {
        image: import('@/assets/favorites/media/media-5.jpeg'),
        title: 'Front End Happy Hour',
        type: 'Podcast',
        url: 'https://www.frontendhappyhour.com/',
      },
      {
        image: import('@/assets/favorites/media/media-6.webp'),
        title: '.cult by Honeypot',
        type: 'Blog',
        url: 'https://cult.honeypot.io/',
      },
    ],
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;

const tourData = [
  {
    id: 1,
    eventName: "EVO 2023",
    location: "Las Vegas, Nevada",
    imageUrl: "/TourImages/Tour1.png",
    videoUrl: "https://www.youtube.com/watch?v=EK7ObS6yxQc",
  },
  {
    id: 2,
    eventName: "CEO 2023",
    location: "Daytona Beach, Florida",
    imageUrl: "/TourImages/Tour2.png",
    videoUrl: "https://www.youtube.com/watch?v=g8xG9ZQJbEY",
  },
  {
    id: 3,
    eventName: "CB 2023",
    location: "Schaumburg, Illinois",
    imageUrl: "/TourImages/Tour3.png",
    videoUrl: "https://www.youtube.com/watch?v=KvPqSTNXvHc",
  },
  {
    id: 4,
    eventName: "DTN 2022",
    location: "Brooklyn, New York",
    imageUrl: "/TourImages/Tour4.png",
    videoUrl: "https://www.youtube.com/watch?v=On3fawmAHEc",
  },
  {
    id: 5,
    eventName: "EVO Japan 2020",
    location: "Tokyo, Japan",
    imageUrl: "/TourImages/Tour5.png",
    videoUrl: "https://www.youtube.com/watch?v=Qw2F8GroJlA",
  },
  {
    id: 6,
    eventName: "Frosty Faustings 2024",
    location: "Lombard, Illinois",
    imageUrl: "/TourImages/Tour6.png",
    videoUrl: "https://www.youtube.com/watch?v=WzobDWcBAvk",
  },
  {
    id: 7,
    eventName: "Texas Showdown 2024",
    location: "Houston, Texas",
    imageUrl: "/TourImages/Tour7.png",
    videoUrl: "https://www.youtube.com/watch?v=HcQsxC_3DHc",
  },
  {
    id: 8,
    eventName: "DreamHack Dallas 2024",
    location: "Dallas, Texas",
    imageUrl: "/TourImages/Tour8.png",
    videoUrl: "https://www.youtube.com/watch?v=Qw2F8GroJlA",
  },
  {
    id: 9,
    eventName: "Combo Breaker 2024",
    location: "Chicago, Illinois",
    imageUrl: "/TourImages/Tour9.png",
    videoUrl: "https://www.youtube.com/watch?v=E1CpwtzENKI",
  },
  {
    id: 10,
    eventName: "CEO 2024",
    location: "Daytona, Florida",
    imageUrl: "/TourImages/Tour10.png",
    videoUrl: "https://www.youtube.com/watch?v=Em5rEdYrZpE",
  },
];

// Export only the newest 5 tour locations (last 5 entries)
export default tourData.slice(-5);

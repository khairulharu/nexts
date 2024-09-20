import { FocusCards } from "@/app/components/ui/focus-card";

export function ProductsFocusCards() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "https://cdn.pixabay.com/photo/2024/09/03/18/03/desert-9019840_1280.jpg",
    },
    {
      title: "Valley of life",
      src: "https://cdn.pixabay.com/photo/2023/05/31/17/30/camera-8031914_960_720.jpg",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://cdn.pixabay.com/photo/2024/04/09/22/28/trees-8686902_960_720.jpg",
    },
    {
      title: "Camping is for pros",
      src: "https://cdn.pixabay.com/photo/2024/02/20/05/16/hummingbird-8584603_960_720.jpg",
    },
    {
      title: "The road not taken",
      src: "https://cdn.pixabay.com/photo/2024/08/23/12/53/water-lily-8991682_960_720.png",
    },
    {
      title: "The First Rule",
      src: "https://cdn.pixabay.com/photo/2023/10/24/19/09/nevada-8338929_960_720.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}

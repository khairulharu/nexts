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
      src: "https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769_1280.jpg",
    },
    {
      title: "Camping is for pros",
      src: "https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_1280.jpg",
    },
    {
      title: "The road not taken",
      src: "https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_1280.jpg",
    },
    {
      title: "The First Rule",
      src: "https://cdn.pixabay.com/photo/2013/07/25/01/31/forest-166733_1280.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}

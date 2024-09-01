import { FocusCards } from "@/app/components/ui/focus-card";

export function ProductsFocusCards() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "/signature.jpg",
    },
    {
      title: "Valley of life",
      src: "/myfoto.jpg",
    },
    {
      title: "Sala behta hi jayega",
      src: "/myfoto.jpg",
    },
    {
      title: "Camping is for pros",
      src: "/myfoto.jpg",
    },
    {
      title: "The road not taken",
      src: "/myfoto.jpg",
    },
    {
      title: "The First Rule",
      src: "/myfoto.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}

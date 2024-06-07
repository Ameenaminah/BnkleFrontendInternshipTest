export interface Link {
  id: number;
  link: string;
  to: string;
}
export const links: Link[] = [
  {
    id: 1,
    link: "Home",
    to: "cards",
  },
  {
    id: 2,
    link: "Analytics",
    to: "analytics",
  },
];

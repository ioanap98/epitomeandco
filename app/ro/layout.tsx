import { getLocalizedMetadata } from "@/lib/seo"

export const metadata = getLocalizedMetadata('ro');

export default function RoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}

import { getLocalizedMetadata } from "@/lib/seo"

export const metadata = getLocalizedMetadata('en-GB');

export default function EnGBLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}

import { redirect } from 'next/navigation'

export default function EnGBPage() {
  // Redirect to main page since en-GB uses the main portfolio page
  redirect('/')
}

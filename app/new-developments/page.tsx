import type { Metadata } from 'next';
import NewDevelopmentsContent from './NewDevelopmentsContent';

export const metadata: Metadata = {
  title: 'New Developments in Roatan | Pre-Construction Properties',
  description: 'Explore the latest new real estate developments in Roatan, Honduras. Pre-construction investment opportunities in prime Caribbean beachfront and hillside locations.',
  alternates: { canonical: 'https://www.tomasfigueroa.com/new-developments' },
};

export default function NewDevelopmentsPage() {
  return <NewDevelopmentsContent />;
}

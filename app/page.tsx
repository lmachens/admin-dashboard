import Apps from './apps';
import { APPS } from './env';

export default async function IndexPage() {
  return <Apps apps={APPS} />;
}

export const revalidate = 3600;

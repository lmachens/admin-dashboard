import { getApps } from './api';
import Apps from './apps';

export default async function IndexPage() {
  const apps = await getApps();
  return <Apps apps={apps.map((app) => app.name).sort()} />;
}

export const revalidate = 3600;

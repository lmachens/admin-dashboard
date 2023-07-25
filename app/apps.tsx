import { Card, Title } from '@tremor/react';

export default function Apps({ apps }: { apps: string[] }) {
  return (
    <Card className="space-y-2">
      <Title>My Apps</Title>
      <div className="flex flex-wrap gap-2">
        {apps.map((app) => (
          <div
            key={app}
            className="rounded bg-gray-100 text-gray-700 px-2 py-1"
          >
            {app}
          </div>
        ))}
      </div>
    </Card>
  );
}

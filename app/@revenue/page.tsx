import { getDashboardRevenue } from '../api';
import Widget from '../widget';
import WidgetContainer from '../widget-container';

export default async function Revenue() {
  const widgets = await getDashboardRevenue();
  return (
    <>
      {widgets.map((widget) => (
        <WidgetContainer key={widget.id} widget={widget}>
          <Widget widget={widget} />
        </WidgetContainer>
      ))}
    </>
  );
}

export const revalidate = 3600;

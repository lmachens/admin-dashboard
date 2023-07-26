import { getDashboardKPIs } from '../api';
import Widget from '../widget';
import WidgetContainer from '../widget-container';

export default async function KPIs() {
  const widgets = await getDashboardKPIs();
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

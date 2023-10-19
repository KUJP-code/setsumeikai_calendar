import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import jaLocale from "@fullcalendar/core/locales/ja";
import { useLoaderData } from "react-router-dom";

function responsiveView() {
  return window.innerWidth < 700 ? "listMonth" : "dayGridMonth";
}

export default function Calendar() {
  const events: setsumeikai[] = useLoaderData() as setsumeikai[];

  return (
    <FullCalendar
      contentHeight={"auto"}
      firstDay={1}
      events={events}
      eventBackgroundColor="#ef8200"
      initialView={responsiveView()}
      locale={jaLocale}
      plugins={[dayGridPlugin, listPlugin]}
      viewClassNames={["p-3"]}
      windowResize={(viewAPI) =>
        viewAPI.view.calendar.changeView(responsiveView())
      }
    />
  );
}

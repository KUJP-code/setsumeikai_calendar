import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";

function responsiveView() {
  return window.innerWidth < 700 ? "listMonth" : "dayGridMonth";
}

export default function Calendar() {
  return (
    <FullCalendar
      contentHeight={"auto"}
      initialView={responsiveView()}
      plugins={[dayGridPlugin, listPlugin]}
      viewClassNames={["p-3"]}
      windowResize={(viewAPI) =>
        viewAPI.view.calendar.changeView(responsiveView())
      }
    />
  );
}

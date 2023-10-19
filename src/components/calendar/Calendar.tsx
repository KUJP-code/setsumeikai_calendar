import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import jaLocale from "@fullcalendar/core/locales/ja";
import { useLoaderData, useNavigate } from "react-router-dom";
import useSelectionContext from "../../hooks/useSelectionContext";

function responsiveView() {
  return window.innerWidth < 700 ? "listMonth" : "dayGridMonth";
}

export default function Calendar() {
  const events: setsumeikai[] = useLoaderData() as setsumeikai[];
  const navigate = useNavigate();
  const { selections, setSelections } = useSelectionContext();

  return (
    <FullCalendar
      contentHeight={"auto"}
      firstDay={1}
      events={events}
      eventBackgroundColor="#ef8200"
      eventBorderColor="#ef8200"
      eventClassNames={["cursor-pointer"]}
      eventClick={(eventClickInfo) => {
        const event = eventClickInfo.event;
        if (event && event.start) {
          setSelections({
            ...selections,
            setsumeikaiId: parseInt(event.id),
            setsumeikaiDate: event.start,
          });
          navigate(`/form/${selections.schoolName}/${event.id}`);
        }
      }}
      eventDisplay="block"
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

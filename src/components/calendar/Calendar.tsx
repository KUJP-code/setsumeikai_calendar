import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import jaLocale from "@fullcalendar/core/locales/ja";
import { useNavigate } from "react-router-dom";
import useSelectionContext from "../../hooks/useSelectionContext";
import { school, setsumeikai } from "../../declarations";

function responsiveView() {
  return window.innerWidth < 700 ? "listMonth" : "dayGridMonth";
}

export default function Calendar() {
  const { schools, selections, setSelections } = useSelectionContext();
  const navigate = useNavigate();
  const events = schools
    .find((s: school) => s.id === selections.schoolId)
    ?.setsumeikais.map((setsumeikai: setsumeikai) => {
      if (setsumeikai.full) {
        return { ...setsumeikai, title: "満席" };
      } else {
        return setsumeikai;
      }
    });

  return (
    <main className="p-3">
      <FullCalendar
        contentHeight={"auto"}
        dayCellClassNames={"font-semibold text-ku-secondary rounded border-secondary"}
        dayHeaderClassNames={"bg-ku-orange rounded border-none text-white text-lg"}
        events={events}
        eventColor="#ef8200"
        eventClassNames={function name(arg) {
          if (arg.event._def.extendedProps.full) {
            return [
              "cursor-not-allowed",
              "bg-ku-secondary",
              "border-ku-secondary",
            ];
          } else {
            return ["cursor-pointer"];
          }
        }}
        eventClick={(eventClickInfo) => {
          const event = eventClickInfo.event;
          if (event._def.extendedProps.full) return;

          if (event && event.start) {
            setSelections({
              ...selections,
              setsumeikaiId: event.id,
              setsumeikaiDate: event.start,
            });
            navigate(`/form/${selections.schoolId}/${event.id}`);
          }
        }}
        eventDisplay="block"
        firstDay={1}
        initialView={responsiveView()}
        locale={jaLocale}
        plugins={[dayGridPlugin, listPlugin]}
        windowResize={(viewAPI) =>
          viewAPI.view.calendar.changeView(responsiveView())
        }
      />
    </main>
  );
}

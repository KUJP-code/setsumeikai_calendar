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
        return { ...setsumeikai, title: "満席", borderColor: "#918779" };
      } else {
        return setsumeikai;
      }
    });

  return (
    <main>
      <FullCalendar
        contentHeight={"auto"}
        dayCellClassNames={
          "font-semibold text-ku-button rounded border-secondary"
        }
        dayHeaderClassNames={
          "md:bg-ku-orange md:rounded md:border-none md:text-white md:text-lg"
        }
        events={events}
        eventColor="#ef8200"
        eventClassNames={function name(arg) {
          if (arg.event._def.extendedProps.full) {
            return [
              "cursor-not-allowed",
              "md:bg-ku-secondary",
              "md:border-ku-secondary",
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

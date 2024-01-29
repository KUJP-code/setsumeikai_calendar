import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin, { NoEventsMountArg } from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import jaLocale from "@fullcalendar/core/locales/ja";
import { useNavigate } from "react-router-dom";
import useSelectionContext from "../../hooks/useSelectionContext";
import { school, setsumeikai } from "../../declarations";
import fcValidRange from "../../helpers/fcValidRange";
import { useRef } from "react";

function responsiveView() {
  return window.innerWidth < 700 ? "listMonth" : "dayGridMonth";
}

function nextIfBlank(el: NoEventsMountArg) {
  const nextMonth = el.view.currentEnd.getMonth();
  const fourMonthsAhead = new Date().getMonth() + 4;
  if (nextMonth < fourMonthsAhead) {
    el.view.calendar.next();
  }
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
  const { start, end } = fcValidRange(new Date());
  const mainRef = useRef<null | HTMLElement>(null);

  return (
    <main ref={mainRef}>
      <FullCalendar
        contentHeight={"auto"}
        datesSet={() => {
          if (mainRef.current) {
            const position = mainRef.current.getBoundingClientRect().top;
            const headerHeight = 100;
            const currentPosition = window.scrollY;
            const offset = position + currentPosition - headerHeight;
            window.scrollTo({
              top: offset,
              behavior: "smooth",
            });
          }
        }}
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
        footerToolbar={{ start: "title", center: "", end: "today prev,next" }}
        initialView={responsiveView()}
        locale={jaLocale}
        noEventsDidMount={(el) => nextIfBlank(el)}
        noEventsText="今月の説明会はありません"
        plugins={[dayGridPlugin, listPlugin]}
        validRange={{ start, end }}
        windowResize={(viewAPI) =>
          viewAPI.view.calendar.changeView(responsiveView())
        }
      />
    </main>
  );
}

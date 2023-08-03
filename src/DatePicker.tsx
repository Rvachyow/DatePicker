import { days, findPrevItem, howManyDaysInMonth } from "./utils";
import { useState } from "react";
import clsx from "clsx";

export const DatePicker = ({ value }: { value: Date }) => {
  const [togglePopup, setTogglePopup] = useState(false);
  const [activeDate, setActiveDate] = useState(value);
  console.log(findPrevItem(activeDate));
  
  const todayYear = value.getFullYear();
  const todayMonth = value.getMonth();
  const todayDay = value.getDate();

  const activeYear = activeDate.getFullYear();
  const activeMonth = activeDate.getMonth();
  const activeDay = activeDate.getDate();

  const handleActivePopUp = () => {
    setTogglePopup(!togglePopup);
  };

  const handlePrevMonth = () => {
    setActiveDate(new Date(activeYear, activeMonth - 1, activeDay));
  };
  const handleNextMonth = () => {
    setActiveDate(new Date(activeYear, activeMonth + 1, activeDay));
  };
 
  return (
    <div className="container">
      <button onClick={handlePrevMonth} className="container__btn">
        prev month
      </button>
      <button onClick={handleNextMonth} className="container__btn">
        next month
      </button>
      <button className="btn__popup" onClick={handleActivePopUp}>
        {`${activeYear}.${activeMonth + 1}.${activeDay}`}
      </button>
      {togglePopup && (
        <div className="popup">
          <Calendar
            activeMonth={todayMonth === activeMonth}
            value={activeDate}
          />
        </div>
      )}
    </div>
  );
};

export const Calendar = ({
  value,
  activeMonth,
}: {
  value: Date;
  activeMonth: boolean;
}) => {
  const arrayForDays = Array.from(new Array(howManyDaysInMonth(value))).map(
    (_, i) => i + 1
  );
  const findPrevItems = findPrevItem(value);
  const arryPlusPrevItem = [...findPrevItems, ...arrayForDays];

  return (
    <div className="calendar">
      {days.map((item, index) => (
        <div className="month" key={index}>
          {item}
        </div>
      ))}
      {arryPlusPrevItem.map((item, index) => (
        <div
          className={clsx("days", {
            ["dayActive"]: item === value.getDate() && activeMonth,
          })}
          key={index}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

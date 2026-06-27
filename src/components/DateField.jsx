import { useEffect, useRef } from 'react';
import AirDatepicker from 'air-datepicker';
import localeEn from 'air-datepicker/locale/en';
import 'air-datepicker/air-datepicker.css';

const DATE_FIELD_BREAKPOINT = 568;

function formatPickerDate(date) {
  if (!date) {
    return '';
  }

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}_${month}_${year}`;
}

const navArrowPrev =
  '<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">' +
  '<path fill="currentColor" d="M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>' +
  '</svg>';

const navArrowNext =
  '<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">' +
  '<path fill="currentColor" d="M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>' +
  '</svg>';

function getDatepickerPosition() {
  return window.innerWidth > DATE_FIELD_BREAKPOINT ? 'bottom left' : 'bottom right';
}

function DateField({ id, placeholder }) {
  const inputRef = useRef(null);
  const fieldRef = useRef(null);
  const pickerRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    const field = fieldRef.current;

    if (!input || !field) {
      return undefined;
    }

    const datepickerOptions = {
      locale: localeEn,
      dateFormat: formatPickerDate,
      autoClose: true,
      offset: 8,
      classes: 'datepicker',
      navTitles: {
        days: 'MMMM yyyy',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2',
      },
      prevHtml: navArrowPrev,
      nextHtml: navArrowNext,
      container: field,
      position: getDatepickerPosition(),
    };

    pickerRef.current = new AirDatepicker(input, datepickerOptions);

    const handleResize = () => {
      pickerRef.current?.update({ position: getDatepickerPosition() });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      pickerRef.current?.destroy();
      pickerRef.current = null;
    };
  }, []);

  const handleClear = (event) => {
    event.preventDefault();
    pickerRef.current?.clear();
  };

  const handleTrigger = (event) => {
    event.preventDefault();
    inputRef.current?.focus();
    pickerRef.current?.show();
  };

  return (
    <label className="date-field" ref={fieldRef}>
      <input
        className="date-field__input"
        id={id}
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        readOnly
      />
      <button
        type="button"
        className="date-field__clear"
        data-target={id}
        aria-label={`Clear ${placeholder} date`}
        onClick={handleClear}
      ></button>
      <button
        type="button"
        className="date-field__trigger"
        data-target={id}
        aria-label={`Open ${placeholder} calendar`}
        onClick={handleTrigger}
      ></button>
    </label>
  );
}

export default DateField;

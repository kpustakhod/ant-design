import _extends from "@babel/runtime/helpers/esm/extends";
import CalendarLocale from "rc-picker/es/locale/gl_ES";
import TimePickerLocale from '../../time-picker/locale/gl_ES'; // Merge into a locale object

var locale = {
  lang: _extends({
    placeholder: 'Escolla data',
    rangePlaceholder: ['Data inicial', 'Data final']
  }, CalendarLocale),
  timePickerLocale: _extends({}, TimePickerLocale)
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

export default locale;
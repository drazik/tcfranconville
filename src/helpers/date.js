import _formatDate from "date-fns/format"
import frLocale from "date-fns/locale/fr"

export function formatDate(date, formatStr) {
  return _formatDate(date, formatStr, { locale: frLocale })
}

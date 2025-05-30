import { pl } from 'date-fns/locale'
import { format } from 'date-fns'

export const formattedDate = date => {
	return format(new Date(date), 'd MMMM yyyy', { locale: pl })
}

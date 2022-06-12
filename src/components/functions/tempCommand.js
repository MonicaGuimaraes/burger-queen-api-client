import {
  format
} from 'date-fns'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import minutesToHours from 'date-fns/minutesToHours'

export function formatHour(dateCommand) {
  const date = new Date(dateCommand)
  const formatDate = format(date, 'dd/MM/yyyy HH:mm')
  return formatDate
}

export function comparingTheTime(startDate, updatedDate) {
  const createdAt = new Date(startDate)
  const updatedAt = new Date(updatedDate)
  const valueTimePreparation = differenceInMinutes(updatedAt, createdAt)
  if(valueTimePreparation < 60){
    return `Tempo de preparo: ${valueTimePreparation} Minutos`
  }else{
    return `Tempo de preparo: ${minutesToHours(valueTimePreparation)} Horas`
  }
  
}
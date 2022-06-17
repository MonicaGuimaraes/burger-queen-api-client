import {
  formatHour,
  comparingTheTime
} from './tempCommand.js'
import '@testing-library/jest-dom';

const date = '2022-06-12t18:42:46.151z'
const startDate = '2021-02-16T13:11:54.173Z'
const updatedDate = '2021-02-16T13:20:54.173Z'
const updatedDate1 = '2021-02-16T14:20:54.173Z'

describe('formatHour()', () => {
  it('Devera Formartar a String dateFake', () => {
    expect(formatHour(date)).toBe('12/06/2022 15:42')
  })

})

describe('comparingTheTime()', () => {
  it('Devera comparar a hora de inicio(startDate)com o tempo do estado atual(updatedDate).', () => {
    expect(comparingTheTime(startDate, updatedDate)).toBe('Tempo de preparo: 9 Minutos')
  })

  it('Devera comparar a hora de inicio(startDate)com o tempo do estado atual(updatedDate) e entrar no else.', () => {
    expect(comparingTheTime(startDate, updatedDate1)).toBe('Tempo de preparo: 1 Horas')
  })
})
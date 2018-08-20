export const sortByText = (text = '') => {
    return {
      type: 'SORT_BY_TEXT',
      text: text
    }
}
  
export const sortByDate = (sortBy = '') => {
      return {
          type: 'SORT_BY_DATE',
          sortBy: sortBy
      }
}
  
export const sortByAmount = (sortBy = '') => {
      return {
          type: 'SORT_BY_AMOUNT',
          sortBy: sortBy
      }
}
  
export const setStartDate = (startDate = undefined) => {
      return {
          type: 'START_DATE',
          startDate: startDate
      }
}
  
export const setEndDate = (endDate = undefined) => {
      return {
          type: 'END_DATE',
          endDate: endDate
      }
}
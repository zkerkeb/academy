const migrations = {
  0: state => {
    return {
      ...state,
      theme: {
        ...state.theme,
        name: 'light'
      }
    }
  },
  1: state => {
    return {
      ...state,
      courses: {
        ...state.courses,
        coursesFilter: 'Cours'
      }
    }
  }
}

export default migrations

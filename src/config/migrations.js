const migrations = {
  0: state => {
    return {
      ...state,
      theme: {
        ...state.theme,
        name: 'light'
      }
    }
  }
}

export default migrations

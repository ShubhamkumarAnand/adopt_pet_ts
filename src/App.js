const Pet = () => {
  return React.createElement('div', {}, [
    React.createElement('h1',{},'Bunny'),
    React.createElement('h2',{},'Rabbit'),
    React.createElement('h2',{},'forest'),
  ])
}

const App = () => {
        return React.createElement(
          "div",
          {},
          [
            React.createElement("h1", {}, "Adopt Me Please!"),
            React.createElement(Pet)
          ]
        )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))

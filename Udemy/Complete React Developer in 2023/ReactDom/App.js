const Person = props => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('p', {}, props.occupation)
    ]);
}

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', { class: 'title' }, "React IS rendered"),
        React.createElement(Person, { name: 'Jennifer', occupation: 'instructor' }, null),
        React.createElement(Person, { name: 'Michelle', occupation: 'Lead instructor' }, null),
        React.createElement(Person, { name: 'Heike', occupation: 'teacher' }, null),
    ]);
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);
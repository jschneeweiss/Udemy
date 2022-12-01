const Person = props => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('p', {}, props.occupation)
    ]);
}

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', { className: 'title' }, "React IS rendered"),
        React.createElement(Person, { name: 'Jennifer', occupation: 'instructor' }, null),
        React.createElement(Person, { name: 'Michelle', occupation: 'Lead instructor' }, null),
        React.createElement(Person, { name: 'Heike', occupation: 'teacher' }, null),
    ]);
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App),);
import React from 'react';
import Data from './Data';
import Birthday from './Birthday';

const App = () => {
    const [birthdays, setBirthDays] = React.useState(Data);
    
    function removeAll() {
        setBirthDays([]);
    }
    function removeItem(id) {
        setBirthDays(prevState => prevState.filter(birthday => birthday.id !== id));
    }
    
    const birthdayObj = birthdays.map(birthday => (
        <Birthday 
            key={birthday.id}
            {...birthday}
            removeItem={removeItem}
        />
    ))
    return (
        <main className='container'>
            <h3>{birthdays.length} Birthday{(birthdays.length-1) ? '\'s':''} Today</h3>
            {birthdayObj}
            <button type='button' className='btn--clearAll' onClick={removeAll}>Clear All</button>
        </main>
    )
}

export default App
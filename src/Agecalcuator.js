// import React, { useState } from 'react';

// const AgeCalculator = () => {
//   const [birthdate, setBirthdate] = useState('');
//   const [age, setAge] = useState(null);

//   const calculateAge = () => {
//     const birthDate = new Date(birthdate);
//     const today = new Date();
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
//     setAge(age);
//   };

//   return (
//     <div>
//       <h1>Age Calculator</h1>

//       <label>Enter your birthdate:</label>
//       <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
//       <button onClick={calculateAge}>Calculate Age</button>
//       {age !== null && <p>Your age is: {age}</p>}

//     </div>
//   );
// };

// export default AgeCalculator;


import React, { useState } from 'react';

const AgeTimeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [birthtime, setBirthtime] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDateTime = new Date(`${birthdate}T${birthtime}`);
    const today = new Date();
    let ageYears = today.getFullYear() - birthDateTime.getFullYear();
    let ageMonths = today.getMonth() - birthDateTime.getMonth();
    let ageDays = today.getDate() - birthDateTime.getDate();
    let ageHours = today.getHours() - birthDateTime.getHours();
    let ageMinutes = today.getMinutes() - birthDateTime.getMinutes();
    let ageSeconds = today.getSeconds() - birthDateTime.getSeconds();

    if (ageSeconds < 0) {
      ageMinutes--;
      ageSeconds += 60;
    }
    if (ageMinutes < 0) {
      ageHours--;
      ageMinutes += 60;
    }
    if (ageHours < 0) {
      ageDays--;
      ageHours += 24;
    }
    if (ageDays < 0) {
      ageMonths--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
      ageDays += prevMonth.getDate();
    }
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    setAge({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
      hours: ageHours,
      minutes: ageMinutes,
      seconds: ageSeconds,
    });
  };

  return (
    <div>
      <h1>Age  Calculator</h1>
      <label>Enter your birthdate:</label>
      <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
      <label>Enter your birthtime:</label>
      <input type="time" value={birthtime} onChange={(e) => setBirthtime(e.target.value)} />
      <button onClick={calculateAge}>Calculate Age</button>
      {age && (
        <p>
          Your age is: {age.years} years, {age.months} months, {age.days} days, {age.hours} hours,{' '}
          {age.minutes} minutes, and {age.seconds} seconds.
        </p>
      )}
    </div>
  );
};

export default AgeTimeCalculator;
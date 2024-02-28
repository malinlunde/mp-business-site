import React from 'react'
import StaffPicture from '../images/staffpicture.jpg';
import './aboutUs.css';

export const AboutUs = () => {
  
  const staffList = [
    'Tommie',
    'Person2',
    'Person3',
    'Person4',
    'Person5',
  ];

  const staffInfo = {
    'Tommie': {
      name: 'Tommie Magnusson',
      description: 'Text om personen',
    },
    'Person2': {
      name: 'Kalle Karlsson',
      description: 'Description about the object',
    },
    'Person3': {
      name: 'Konrad Konradsson',
      description: 'Description about the object',
    },
    'Person4': {
      name: 'Staffan Staffansson',
      description: 'Description about the object',
    },
    'Person5': {
      name: 'Lisa Larsson',
      description: 'Description about the object',
    },
  };
  

  const imageForPerson = {
    'Tommie': StaffPicture,
    'Person2': StaffPicture,
    'Person3': StaffPicture, 
    'Person4': StaffPicture,
    'Person5': StaffPicture,
  };
  
  return (
    <section className='staff'>
      <div className='About'>

      </div>
      <div className='list'>
        {staffList.map((person, index) => (
          <div key={index} className='staff-card'>
            <img src={imageForPerson[person]} className='staff-image' alt='' />
            <div className='staff-text-container'>
              <h2 className='h2staffcard'>{staffInfo[person].name}</h2>
              <p className='pstaffcard'>{staffInfo[person].description}</p>
            </div>
          </div>
        ))}
      </div>
     
    </section>
  );
};
export default AboutUs;
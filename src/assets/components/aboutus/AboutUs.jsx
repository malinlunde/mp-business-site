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
      description: 'Text om personen',
    },
    'Person3': {
      name: 'Konrad Konradsson',
      description: 'Text om personen',
    },
    'Person4': {
      name: 'Staffan Staffansson',
      description: 'Description about the object',
    },
    'Person5': {
      name: 'Lisa Larsson',
      description: 'Text om personen',
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
    <div className='about-us'>
     <section className='company-info'>
      <h1 className='h1company'>Välkomna till M&P</h1>
        <p className='pcompany'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce ultrices, nisi eu tincidunt mattis, libero ex bibendum arcu, ac ultricies elit nulla vitae urna.
          Sed nec sagittis metus. Integer sit amet justo vel neque iaculis tincidunt id ac enim.
          Curabitur eu justo ut nunc lacinia tincidunt.
          Mauris vestibulum ipsum vel maximus tincidunt. Duis ac odio vel quam tincidunt laoreet.
          Nullam auctor, odio ut sollicitudin facilisis, odio dui cursus elit, et luctus sem ex nec ligula.
        </p>
     </section>
     <section className='staff'>
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
    </div>
  );
};
export default AboutUs;
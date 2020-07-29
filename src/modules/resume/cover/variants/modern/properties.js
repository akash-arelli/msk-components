import propertyTypes from 'msk-property-types'
import themes from 'msk-themes'

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.dark.shadowPurple,
    required: true
  },
  name: {
    name: 'Name',
    type: propertyTypes.STRING,
    value: 'hello',
    required: true
  },
  imageUrl: {
    name: 'Image URL',
    type: propertyTypes.STRING,
<<<<<<< HEAD
    value: 'https://mskdocuments.com/images/favicon.png',
    required: false

=======
    value: ['https://mskdocuments.com/images/favicon.png','https://github.com/ManojSatishkumar'],
    required: false
   
>>>>>>> 55badd50c663ecf3d165816c635c4381f2e78949

  },
  designation: {
    name: 'Designation',
    type: propertyTypes.STRING,
    value: 'Designation',
    required: false
  },
  company: {
    name: 'Company',
    type: propertyTypes.STRING,
    value: 'Company name',
    required: false
  },
  emailId: {
    name: 'Email ID',
    type: propertyTypes.EMAIL,
    value: 'Email ID',
    required: true
  },
  phoneNo: {
    name: 'Phone No',
    type: propertyTypes.NUMBER,
    value: '9999999999',
    required: true
  },
  gitHandle:{
    name:'github profile',
    type: propertyTypes.STRING,
    value: 'https://github.com/ManojSatishkumar',
    required:false

  },
};

export default properties;

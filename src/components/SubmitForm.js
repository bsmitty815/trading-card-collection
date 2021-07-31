import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'


const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]


function SubmitForm() {

    
    return (
      <div className="App">
          <h1>Add A Card</h1>
          <Form>
            <Form.Group widths='equal'>
            <Form.Field
                id='card-name'
                control={Input}
                label='Name'
                placeholder='Name'
            />
            <Form.Field
                id='form-input-control-last-name'
                control={Input}
                label='Last name'
                placeholder='Last name'
            />
            <Form.Field
                id='card-year'
                control={Input}
                label='Year'
                placeholder='Year'
            />
            <Form.Field
                id='card-description'
                control={Input}
                label='Description'
                placeholder='Description'
            />
            <Form.Field
                control={Select}
                options={genderOptions}
                label={{ children: 'Collection', htmlFor: 'form-select-control-collection' }}
                placeholder='Colleciton'
                search
                searchInput={{ id: 'card-collection' }}
            />
            </Form.Group>
            <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Submit'
            label='Submit Card'
            />
        </Form>

      </div>
    );
  }
  
export default SubmitForm;
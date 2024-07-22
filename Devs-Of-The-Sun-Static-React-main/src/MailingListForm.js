import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const MailingListForm = () => (
  <div className='mailing-form'>
    <Form>
        <Form.Field>
        <label className='fname'>First Name</label>
        <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
        <label className='lname'>Last Name</label>
        <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
    </Form>
  </div>
)

export default MailingListForm

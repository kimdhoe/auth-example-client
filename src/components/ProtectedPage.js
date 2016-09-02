import React from 'react'

import FormPage               from './FormPage'
import ProtectedFormContainer from '../containers/ProtectedFormContainer'

const ProtectedPage = () =>
  <FormPage>
    <ProtectedFormContainer />
  </FormPage>

export default ProtectedPage

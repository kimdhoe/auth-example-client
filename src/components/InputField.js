import React      from 'react'
import classnames from 'classnames'

const InputField = ({ type, fieldName, label, value, error, onChange }) =>
  <div className={classnames("form-group", { "has-error": error })}>
    <label className="control-label" htmlFor="passwordConfirmation">
      {label}
    </label>
    <input
      className="form-control"
      type={type}
      name={fieldName}
      id={fieldName}
      value={value}
      onChange={onChange}
    />
    {error &&
      <span className="help-block">{error}</span>
    }
  </div>

InputField.propTypes =
  { type:      React.PropTypes.string.isRequired
  , fieldName: React.PropTypes.string.isRequired
  , label:     React.PropTypes.string.isRequired
  , value:     React.PropTypes.string.isRequired
  , error:     React.PropTypes.string
  , onChange:  React.PropTypes.func
  }

InputField.defaultProps = { type: 'text' }

export default InputField

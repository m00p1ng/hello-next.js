import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { FormGroup, Label, Button } from 'reactstrap'

import 'react-datepicker/dist/react-datepicker.css'

class PortDate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dateValue: moment(),
      isHidden: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.toggleDate = this.toggleDate.bind(this)
  }

  handleChange(date) {
    const { setFieldValue, setFieldTouched } = this.props.form
    const { name } = this.props.field

    this.setState({
      dateValue: date,
    })

    setFieldValue(name, date, true)
    setFieldTouched(name, true, true)
  }

  toggleDate(date) {
    const { setFieldValue, setFieldTouched } = this.props.form
    const { name } = this.props.field

    this.setState({
      isHidden: !this.state.isHidden,
    })

    setFieldValue(name, date, true)
    setFieldTouched(name, true, true)
  }

  render() {
    const {
      label,
      field,
      canBeDisabled,
      form: { touched, errors },
    } = this.props
    const {
      isHidden,
      dateValue,
    } = this.state
    return (
      <FormGroup>
        <Label>{label}</Label>
        <div className="input-group">
          {!isHidden && (
            <DatePicker
              className="form-control"
              selected={dateValue}
              onChange={this.handleChange}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              maxDate={moment()}
              dropdownMode="select"
            />
          )}
        </div>
        {canBeDisabled && !isHidden && (
          <Button onClick={() => this.toggleDate(null)}>
            Still Working here...
          </Button>
        )}
        {canBeDisabled && isHidden && (
          <>
            <span>Still Working here</span>
            <Button onClick={this.toggleDate}>
              Set End Date
            </Button>
          </>
        )}
        {touched[field.name] &&
          errors[field.name] &&
          <div className="error">{errors[field.name]}</div>}
      </FormGroup>
    )
  }
}

export default PortDate
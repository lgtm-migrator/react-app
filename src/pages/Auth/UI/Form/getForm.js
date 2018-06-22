import React, { Fragment } from 'react'
import { Field } from 'react-final-form'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '../../../../components/Form/TextField'
import Select from '../../../../components/Form/Select'

export default function getForm(currentTab) {
  switch (currentTab) {
    case 'recovery':
      return (
        <Fragment>
          <Field
            name="mail"
            label="Mail"
            component={TextField}
            fullWidth
          />
        </Fragment>
      )
    case 'recoveryPassword':
      return (
        <Fragment>
          <Field
            name="password"
            label="Password"
            component={TextField}
            fullWidth
          />
          <Field
            name="retryPassword"
            label="Retry password"
            component={TextField}
            fullWidth
          />
        </Fragment>
      )
    case 'signOn':
      return (
        <Fragment>
          <Field
            name="mail"
            label="Mail"
            component={TextField}
            fullWidth
          />
          <Field
            name="password"
            label="Password"
            component={TextField}
            fullWidth
          />
          <Field
            name="retryPassword"
            label="Retry password"
            component={TextField}
            fullWidth
          />
          <FormControl style={{ width: '100%' }}>
            <InputLabel htmlFor="controlled-open-select">
Language
            </InputLabel>
            <Field
              name="language"
              component={Select}
              fullWidth
            >
              <MenuItem value="ru_RU">
Russia
              </MenuItem>
              <MenuItem value="en_GB">
English
              </MenuItem>
            </Field>
          </FormControl>
        </Fragment>
      )
    case 'logIn':
    default:
      return (
        <Fragment>
          <Field
            name="mail"
            label="Mail"
            component={TextField}
            fullWidth
          />
          <Field
            name="password"
            label="Password"
            type="password"
            component={TextField}
            fullWidth
          />
          <FormControl style={{ width: '100%' }}>
            <InputLabel htmlFor="controlled-open-select">
Language
            </InputLabel>
            <Field
              name="language"
              component={Select}
              fullWidth
            >
              <MenuItem value="ru_RU">
Russia
              </MenuItem>
              <MenuItem value="en_GB">
English
              </MenuItem>
            </Field>
          </FormControl>
        </Fragment>
      )
  }
}

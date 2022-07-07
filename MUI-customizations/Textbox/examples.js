// @flow
import InputAdornment from '@material-ui/core/InputAdornment'
import React from 'react'
import Textbox from './'

export const Default: * = (
  <Textbox
    id='input-default'
    label='Default'
    placeholder='Hello World'
  />
)

export const WithValue: * = (
  <Textbox
    id='input-with-value'
    label='Default'
    placeholder='Enter some text'
    value='Hello World'
  />
)

export const WithDefaultValue: * = (
  <Textbox
    defaultValue='Default Message'
    id='input-with-default-value'
    label='Default'
    placeholder='Enter some text'
  />
)

export const Disabled: * = (
  <Textbox
    disabled
    id='input-disabled'
    label='Disabled'
    placeholder='Disabled Input'
  />
)

export const Error: * = (
  <Textbox
    error
    helperText='This field is required'
    id='input-error'
    label='Error'
    placeholder='Hello World'
  />
)

export const FullWidth: * = (
  <Textbox
    fullWidth
    helperText='This is a full width textbox'
    id='input-full-width'
    label='Full Width'
    placeholder='Full width textbox'
  />
)

export const Required: * = (
  <Textbox
    id='input-required'
    label='Required'
    placeholder='Hello World'
    required
  />
)

export const HelperText: * = (
  <Textbox
    helperText='This is a help text for the input'
    id='input-helper-text'
    label='Textbox label'
    placeholder='Hello World'
  />
)

export const Email: * = (
  <Textbox
    helperText='Enter your email address'
    id='input-email'
    label='Email Address'
    placeholder='Enter your email'
    type='email'
  />
)

export const Password: * = (
  <Textbox
    helperText='Enter your password'
    id='input-password'
    label='Password'
    placeholder='Password'
    type='password'
  />
)

export const Multiline: * = (
  <Textbox
    helperText='This is a help text for the multiline input'
    id='input-description'
    label='Long Text'
    multiline
    placeholder='Enter some long text'
    rows={2}
  />
)

export const Adornment: * = (
  <Textbox
    endAdornment={<InputAdornment position='end'>
      { '%' }
    </InputAdornment>}
    id='input-adornment'
    label='With Adornment'
  />
)

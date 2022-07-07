// @flow
import { type StyledComponentProps, withStyles } from '@material-ui/core/styles'
import { forwardProps } from '../../utils/props'
import { theming } from '../../themes/d2'
import MaterialFormControl from '@material-ui/core/FormControl'
import MaterialFormHelperText from '@material-ui/core/FormHelperText'
import MaterialInput from '@material-ui/core/Input'
import MaterialInputLabel from '@material-ui/core/InputLabel'
import Providers from '../../providers/standalone'
import React, { type ComponentType } from 'react'
import injectSheet from 'react-jss'
import styles, { helperTextStyles, inputStyles, labelStyles } from './styles'
import type { OwnProps, Props } from './types'

const MaterialInputStyled: ComponentType<StyledComponentProps> = withStyles(inputStyles)(MaterialInput)
const MaterialInputLabelStyled: ComponentType<StyledComponentProps> = withStyles(labelStyles)(MaterialInputLabel)
const MaterialFormHelperTextStyled: ComponentType<StyledComponentProps> = withStyles(helperTextStyles)(MaterialFormHelperText)

const Textbox: ComponentType<Props> = ({
  classes,
  disabled,
  error,
  fullWidth,
  helperText,
  id,
  label,
  name,
  required,
  value,
  ...props
}) => (
  <div>
    <MaterialFormControl
      aria-describedby={`${id}-text`}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      required={required}
    >
      <MaterialInputLabelStyled
        disabled={disabled}
        error={error}
        FormLabelClasses={{
          error: classes.error,
          focused: classes.focused,
          root: classes.root,
        }}
        htmlFor={id}
        required={required}
      >
        { label }
      </MaterialInputLabelStyled>
      <MaterialInputStyled
        fullWidth={fullWidth}
        id={id}
        name={name}
        value={value}
        {...forwardProps(props)}
        onChange={({ target: { value } }) => {
          if (props.onChange) props.onChange(value)
        }}
      />
      { helperText && (
        <MaterialFormHelperTextStyled
          disabled={disabled}
          error={error}
          id={`${id}-text`}
        >
          { helperText }
        </MaterialFormHelperTextStyled>
      ) }
    </MaterialFormControl>
  </div>
)

const ConnectedComponent: ComponentType<OwnProps> = injectSheet(styles, { theming })(Textbox)

export const ComponentWithProviders: ComponentType<OwnProps> = (props) => (<Providers>
  <ConnectedComponent {...props} />
</Providers>)

export default ConnectedComponent

// @flow
// Make sure moment is initialized with proper locale
import '../../utils/dates'
import {
  BasePicker,
  Calendar,
  MuiPickersUtilsProvider,
} from 'material-ui-pickers'
import { type TranslationProps, injectTranslations } from '../../hocs/Translations'
import { compose } from 'recompose'
import { theming } from '../../themes/d2'
import Button from '../Button'
import DialogActions from '@material-ui/core/DialogActions'
import FaIcon from '../FontAwesome'
import Modal from '../Modal'
import MomentUtils from '@date-io/moment'
import React, { Fragment } from 'react'
import injectSheet from 'react-jss'
import styles, { type Styles } from './styles'
import translations, { type Translations } from './translations'
import type { JssProps } from '../../../types'

type OwnProps = {|
  'data-test-id'?: string,
  maxDate?: ?Date,
  minDate?: ?Date,
  onChange: (date: Date) => void,
  onDismiss: () => void,
  value: ?Date,
|}

type Props = {|
  ...JssProps<Styles>,
  ...TranslationProps<Translations>,
  ...OwnProps,
|}

const DatePicker: React$StatelessFunctionalComponent<Props> = ({
  classes,
  onChange,
  onDismiss,
  minDate,
  maxDate,
  t,
  value,
}) => (
  <Modal maxWidthPx={320}>
    <div className={classes.modalContents}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <BasePicker
          onChange={onChange}
          value={value}
        >
          { ({ date, handleAccept, handleChange }) => (
            <Fragment>
              <Calendar
                date={date}
                leftArrowIcon={<FaIcon
                  icon='angle-left'
                  weight='regular'
                />}
                maxDate={maxDate}
                minDate={minDate}
                onChange={handleChange}
                rightArrowIcon={<FaIcon
                  icon='angle-right'
                  weight='regular'
                />}
              />
              <DialogActions>
                <Button
                  block
                  danger
                  onClick={onDismiss}
                >
                  { t('cancel') }
                </Button>
                <Button
                  block
                  onClick={() => {
                    handleAccept()
                    onDismiss()
                  }}
                >
                  { t('apply') }
                </Button>
              </DialogActions>
            </Fragment>
          ) }
        </BasePicker>
      </MuiPickersUtilsProvider>
    </div>
  </Modal>
)

const ConnectedComponent: React$ComponentType<OwnProps> = compose(
  injectTranslations({ key: 'DatePicker', translations }),
  injectSheet(styles, { theming }),
)(DatePicker)

export default ConnectedComponent
